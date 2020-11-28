import test from 'ava'
import package_ from '../package.json'
import { generate, parse } from '../src/utils'

test('parse valid csv', async t => {
  const result = await parse('header a,header b\nline a,line b')
  const expected = [{ 'header a': 'line a', 'header b': 'line b' }]
  t.deepEqual(result, expected)
})

test('parse invalid csv', async t => {
  const error = await t.throwsAsync(parse('header a;header b\nline a,line b,,'))
  t.is(error.message, 'Unexpected Error: column header mismatch expected: 1 columns got: 4')
})

test('generate csv', t => {
  const columns = package_.config.columns
  const lines = [{ 'Given Name': 'John Doe' }]
  const expected = columns.join(',') + '\n' + 'John Doe' + ','.repeat(columns.length - 1)
  const generated = generate(columns, lines)
  t.is(generated, expected)
})

test('generate csv with a comma inside a field', t => {
  const columns = package_.config.columns
  const lines = [{ 'Given Name': 'John, Doe' }]
  const expected = columns.join(',') + '\n' + '"John, Doe"' + ','.repeat(columns.length - 1)
  const generated = generate(columns, lines)
  t.is(generated, expected)
})
