import * as csv from 'fast-csv'
import 'setimmediate'

export const parse = (text) => new Promise((resolve, reject) => {
  const lines = []
  const stream = csv.parse({ headers: true })
  stream.on('error', error => reject(error))
  stream.on('data', line => lines.push(line))
  stream.on('end', () => resolve(lines))
  stream.write(text)
  stream.end()
})
