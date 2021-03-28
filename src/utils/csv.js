const csv = require('fast-csv')
require('setimmediate') // eslint-disable-line import/no-unassigned-import

exports.parse = text => new Promise((resolve, reject) => {
  const lines = []
  const stream = csv.parse({ headers: true })
  stream.on('error', error => reject(error))
  stream.on('data', line => lines.push(line))
  stream.on('end', () => resolve(lines))
  stream.write(text)
  stream.end()
})

const generateLine = (columns, line) => {
  return columns.map(key => {
    if (!line[key]) return ''
    const data = line[key].replace(/(\s:::\s)|(\n)/g, ' ').trim() // clean some BS
    if (data.includes(',') || data.includes('\n')) return `"${data}"`
    return data
  })
}

exports.generate = (columns, lines) => {
  console.log('generate csv from lines :', lines)
  let csv = columns.join(',')
  csv += '\n' + lines.map(line => generateLine(columns, line)).join('\n')
  console.log(csv)
  return csv
}
