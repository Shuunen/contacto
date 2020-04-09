
import test from 'ava'
import { storage } from '../src/utils'

test('fail safe on getting non-existing key', async t => t.falsy(await storage.get('foo')))

test('store a key value', async t => {
  t.falsy(await storage.get('bar'))
  await storage.set('bar', 'jeez')
  t.is(await storage.get('bar'), 'jeez')
})

test('detect non-existing key', async t => t.false(await storage.has('foo')))

test('detect existing key', async t => {
  await storage.set('bar', 'jeez')
  t.true(await storage.has('bar'))
})
