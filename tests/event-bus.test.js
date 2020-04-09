import test from 'ava'
import { eventBus, storage } from '../src/utils'

test('event bus can register event', t => {
  let called = false
  eventBus.$on('foo', () => (called = true))
  t.false(called)
  eventBus.$emit('bar')
  t.false(called)
  eventBus.$emit('foo')
  t.true(called)
})

test('file-read handle by bus', async t => {
  let fileContent = await storage.get('file')
  t.falsy(fileContent)
  eventBus.$emit('file-read', 'a great content')
  fileContent = await storage.get('file')
  t.is(fileContent, 'a great content')
})
