import * as csv from 'fast-csv'
import 'setimmediate'

export const parse = (text) => new Promise((resolve) => {
  const lines = []
  const stream = csv.parse({ headers: true })
  stream.on('error', error => console.error(error))
  stream.on('data', line => lines.push(line))
  stream.on('end', () => resolve(lines))
  stream.write(text)
  stream.end()
})
