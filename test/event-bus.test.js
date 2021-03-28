const { eventBus } = require('../src/utils/event-bus.js')
const { storage } = require('../src/utils/storage.js')
const equal = require('assert').deepStrictEqual

it('event bus can register event', () => {
  let called = false
  eventBus.$on('foo', () => {
    called = true
  })
  equal(called, false)
  eventBus.$emit('bar')
  equal(called, false)
  eventBus.$emit('foo')
  equal(called, true)
})

it('file-read handle by bus', async () => {
  let fileContent = await storage.get('file')
  equal(fileContent, undefined)
  eventBus.$emit('file-read', 'a great content')
  fileContent = await storage.get('file')
  equal(fileContent, 'a great content')
})
