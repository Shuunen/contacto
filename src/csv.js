import csv from 'fast-csv'
import 'setimmediate'

export async function parse (text) {
  return new Promise((resolve) => {
    const lines = []
    csv.parseString(text, { headers: true })
      .on('data', (data) => lines.push(data))
      .on('end', resolve(lines))
  })
}
