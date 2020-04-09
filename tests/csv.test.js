import test from 'ava'
import { parse } from '../src/utils'

test('parse valid csv', async t => {
  const result = await parse('header a,header b\nline a,line b')
  const expected = [{ 'header a': 'line a', 'header b': 'line b' }]
  t.deepEqual(result, expected)
})

test('parse invalid csv', async t => {
  const error = await t.throwsAsync(parse('header a;header b\nline a,line b,,'))
  t.is(error.message, 'Unexpected Error: column header mismatch expected: 1 columns got: 4')
})
