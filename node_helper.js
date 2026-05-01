const NodeHelper = require('node_helper')
const path = require('node:path')
const fs = require('node:fs')

module.exports = NodeHelper.create({
  start: function () {
    // MM v2.36.0+ serializes functions natively via __mmFunction but loses closure context.
    // This helper restores closure variables by extracting variable preamble from config.js
    // and injecting it when reconstructing functions on the frontend.
    // TODO: Remove when upstream MM adds closure variable support to function reviver.
    this.functionConfigs = []
    this.variablePreamble = ''
    this.registrationCount = 0
    this.loadFunctionConfigs()
  },

  /**
   * Extract variable declarations from config.js (everything before "let config = {").
   * These variables are needed as closure context for callback functions
   * that reference them (eventTransformer, eventFilter, etc.).
   *
   * Example:
   *   let myVar = {key: "value"}
   *   const helpers = { ... }
   *   let config = { modules: [...] }
   *
   * Returns the preamble: "let myVar = {key: \"value\"}\nconst helpers = { ... }"
   */
  extractVariablePreamble: function () {
    try {
      const configPath = path.resolve(
        global.root_path,
        process.env.MM_CONFIG_FILE || 'config/config.js',
      )
      const configContent = fs.readFileSync(configPath, 'utf-8')

      // Find where the config object starts (let/var/const config = {)
      const configMatch = configContent.match(/(let|var|const)\s+config\s*=/)
      if (!configMatch) {
        return ''
      }

      const configStartIndex = configMatch.index
      // Get everything before the config declaration (the variable preamble)
      const preamble = configContent.substring(0, configStartIndex).trim()
      return preamble
    } catch (error) {
      console.warn(`[${this.name}] Could not extract variable preamble:`, error.message)
      return ''
    }
  },

  loadFunctionConfigs: function () {
    const functionKeys = ['preProcessor', 'eventFilter', 'eventTransformer', 'eventSorter']

    // Extract variable preamble once (used for all module instances)
    this.variablePreamble = this.extractVariablePreamble()

    try {
      const configPath = path.resolve(
        global.root_path,
        process.env.MM_CONFIG_FILE || 'config/config.js',
      )
      delete require.cache[require.resolve(configPath)]
      const userConfig = require(configPath)

      for (const mod of userConfig.modules || []) {
        if (mod.module !== this.name || !mod.config) continue

        const fnStrings = {}
        for (const key of functionKeys) {
          if (typeof mod.config[key] === 'function') {
            fnStrings[key] = mod.config[key].toString()
          }
        }
        this.functionConfigs.push(fnStrings)
      }
    } catch (error) {
      // Keep module functional even when config cannot be loaded from helper.
      console.warn(`[${this.name}] Could not load config functions:`, error.message)
    }
  },

  socketNotificationReceived: function (notification, payload) {
    if (notification === 'CX3J_REGISTER') {
      // MM initializes modules in config order; map nth registration to nth config entry.
      const index = this.registrationCount++
      this.sendSocketNotification('CX3J_FUNCTIONS_RESTORED', {
        identifier: payload.identifier,
        variablePreamble: this.variablePreamble,
        functions: this.functionConfigs[index] || {},
      })
    }
  },
})
