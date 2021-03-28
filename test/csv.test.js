const { generate, parse } = require('../src/utils/csv.js')
const { rejects } = require('assert')
const columns = ['Given Name', 'Family Name', 'Nickname', 'Birthday']
const equal = require('assert').deepStrictEqual

/* eslint-disable no-useless-concat */

it('parse valid csv', async () => {
  const result = await parse('header a,header b\nline a,line b')
  const expected = [{ 'header a': 'line a', 'header b': 'line b' }]
  equal(result, expected)
})

it('parse invalid csv', async () => {
  await rejects(parse('header a;header b\nline a,line b,,'), { name: 'Error', message: 'Unexpected Error: column header mismatch expected: 1 columns got: 4' })
})

it('generate csv', () => {
  const lines = [{ 'Given Name': 'John Doe' }]
  const expected = columns.join(',') + '\n' + 'John Doe' + ','.repeat(columns.length - 1)
  const generated = generate(columns, lines)
  equal(generated, expected)
})

it('generate csv with a comma inside a field', () => {
  const lines = [{ 'Given Name': 'John, Doe' }]
  const expected = columns.join(',') + '\n' + '"John, Doe"' + ','.repeat(columns.length - 1)
  const generated = generate(columns, lines)
  equal(generated, expected)
})

/* eslint-enable no-useless-concat */
