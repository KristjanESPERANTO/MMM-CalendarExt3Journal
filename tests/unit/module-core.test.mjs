import assert from 'node:assert/strict'
import { test } from 'node:test'
import { createRequire } from 'node:module'

const require = createRequire(import.meta.url)

let registeredModule

global.Log = {
  warn: () => {},
  error: () => {},
  log: () => {},
}

global.Module = {
  register: (_name, definition) => {
    registeredModule = definition
  },
}

require('../../MMM-CalendarExt3Journal.js')

const moduleDef = registeredModule

test('normalizeOverlapConfig clamps invalid maxLaneThreshold to default', () => {
  const cfg1 = { maxLaneThreshold: -1 }
  const cfg2 = { maxLaneThreshold: 'abc' }
  const cfg3 = { maxLaneThreshold: '4' }

  moduleDef.normalizeOverlapConfig(cfg1)
  moduleDef.normalizeOverlapConfig(cfg2)
  moduleDef.normalizeOverlapConfig(cfg3)

  assert.equal(cfg1.maxLaneThreshold, 3)
  assert.equal(cfg2.maxLaneThreshold, 3)
  assert.equal(cfg3.maxLaneThreshold, 4)
})

test('fetch stores deep-cloned payload and updates view', () => {
  const viewUpdates = []
  const payload = [{ title: 'Event A', meta: { level: 1 } }]
  const sender = { identifier: 'calendar-a' }
  const options = { refreshInterval: 1000 }

  const ctx = {
    eventPool: new Map(),
    updateView: (opts) => viewUpdates.push(opts),
  }

  moduleDef.fetch.call(ctx, payload, sender, options)

  payload[0].title = 'MUTATED'
  payload[0].meta.level = 9

  const stored = ctx.eventPool.get('calendar-a')
  assert.equal(stored[0].title, 'Event A')
  assert.equal(stored[0].meta.level, 1)
  assert.deepEqual(viewUpdates, [options])
})

test('socketNotificationReceived restores callback functions', () => {
  let readyCalls = 0
  const ctx = {
    identifier: 'module-1',
    activeConfig: {},
    originalConfig: {},
    _functionsReady: () => {
      readyCalls += 1
    },
  }

  moduleDef.socketNotificationReceived.call(ctx, 'CX3J_FUNCTIONS_RESTORED', {
    identifier: 'module-1',
    functions: {
      preProcessor: '(ev) => ({ ...ev, normalized: true })',
      eventFilter: '(ev) => ev.keep === true',
    },
  })

  assert.equal(typeof ctx.activeConfig.preProcessor, 'function')
  assert.equal(typeof ctx.activeConfig.eventFilter, 'function')
  assert.equal(typeof ctx.originalConfig.preProcessor, 'function')
  assert.equal(typeof ctx.originalConfig.eventFilter, 'function')
  assert.equal(ctx.activeConfig.preProcessor({ a: 1 }).normalized, true)
  assert.equal(ctx.activeConfig.eventFilter({ keep: true }), true)
  assert.equal(readyCalls, 1)
})

test('socketNotificationReceived ignores payload for other instance', () => {
  let readyCalls = 0
  const ctx = {
    identifier: 'module-1',
    activeConfig: {},
    originalConfig: {},
    _functionsReady: () => {
      readyCalls += 1
    },
  }

  moduleDef.socketNotificationReceived.call(ctx, 'CX3J_FUNCTIONS_RESTORED', {
    identifier: 'module-2',
    functions: {
      preProcessor: '(ev) => ev',
    },
  })

  assert.equal(ctx.activeConfig.preProcessor, undefined)
  assert.equal(ctx.originalConfig.preProcessor, undefined)
  assert.equal(readyCalls, 0)
})
