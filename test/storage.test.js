
const { storage } = require('../src/utils/storage.js')
const equal = require('assert').deepStrictEqual

it('fail safe on getting non-existing key', async () => {
  equal(await storage.get('foo'), undefined)
})

it('store a key value (string)', async () => {
  equal(await storage.get('bar'), undefined)
  await storage.set('bar', 'jeez')
  equal(await storage.get('bar'), 'jeez')
})

it('json set & get', async () => {
  const me = { name: 'Shu', age: 30 }
  await storage.set('me', me)
  const clone = await storage.get('me')
  equal(clone.age, 30)
})

it('detect non-existing key', async () => {
  equal(await storage.has('foo'), false)
})

it('detect existing key', async () => {
  await storage.set('bar', 'jeez')
  equal(await storage.has('bar'), true)
})
