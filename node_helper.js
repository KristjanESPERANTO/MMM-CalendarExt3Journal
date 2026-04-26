const NodeHelper = require('node_helper')
const path = require('node:path')

module.exports = NodeHelper.create({
  start: function () {
    // TODO: Re-evaluate with MagicMirror v2.36.0 and remove this helper
    // when frontend config keeps function callbacks intact again.
    this.functionConfigs = []
    this.registrationCount = 0
    this.loadFunctionConfigs()
  },

  loadFunctionConfigs: function () {
    const functionKeys = ['preProcessor', 'eventFilter', 'eventTransformer', 'eventSorter']

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
        functions: this.functionConfigs[index] || {},
      })
    }
  },
})
