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

export const googleCols = [
  'Name',
  'Given Name',
  'Additional Name',
  'Family Name',
  'Yomi Name',
  'Given Name Yomi',
  'Additional Name Yomi',
  'Family Name Yomi',
  'Name Prefix',
  'Name Suffix',
  'Initials',
  'Nickname',
  'Short Name',
  'Maiden Name',
  'Birthday',
  'Gender',
  'Location',
  'Billing Information',
  'Directory Server',
  'Mileage',
  'Occupation',
  'Hobby',
  'Sensitivity',
  'Priority',
  'Subject',
  'Notes',
  'Language',
  'Photo',
  'Group Membership',
  'E-mail 1 - Type',
  'E-mail 1 - Value',
  'E-mail 2 - Type',
  'E-mail 2 - Value',
  'E-mail 3 - Type',
  'E-mail 3 - Value',
  'E-mail 4 - Type',
  'E-mail 4 - Value',
  'E-mail 5 - Type',
  'E-mail 5 - Value',
  'IM 1 - Type',
  'IM 1 - Service',
  'IM 1 - Value',
  'Phone 1 - Type',
  'Phone 1 - Value',
  'Phone 2 - Type',
  'Phone 2 - Value',
  'Phone 3 - Type',
  'Phone 3 - Value',
  'Address 1 - Type',
  'Address 1 - Formatted',
  'Address 1 - Street',
  'Address 1 - City',
  'Address 1 - PO Box',
  'Address 1 - Region',
  'Address 1 - Postal Code',
  'Address 1 - Country',
  'Address 1 - Extended Address',
  'Address 2 - Type',
  'Address 2 - Formatted',
  'Address 2 - Street',
  'Address 2 - City',
  'Address 2 - PO Box',
  'Address 2 - Region',
  'Address 2 - Postal Code',
  'Address 2 - Country',
  'Address 2 - Extended Address',
  'Organization 1 - Type',
  'Organization 1 - Name',
  'Organization 1 - Yomi Name',
  'Organization 1 - Title',
  'Organization 1 - Department',
  'Organization 1 - Symbol',
  'Organization 1 - Location',
  'Organization 1 - Job Description',
  'Website 1 - Type',
  'Website 1 - Value',
  'Website 2 - Type',
  'Website 2 - Value',
  'Website 3 - Type',
  'Website 3 - Value',
  'Website 4 - Type',
  'Website 4 - Value',
  'Website 5 - Type',
  'Website 5 - Value',
  'Website 6 - Type',
  'Website 6 - Value',
  'Website 7 - Type',
  'Website 7 - Value',
  'Website 8 - Type',
  'Website 8 - Value',
  'Website 9 - Type',
  'Website 9 - Value',
  'Website 10 - Type',
  'Website 10 - Value',
  'Event 1 - Type',
  'Event 1 - Value',
  'Custom Field 1 - Type',
  'Custom Field 1 - Value',
]

const generateLine = line => {
  return googleCols.map(key => {
    // clean weird stuff
    const data = line[key] || ''
    if (data.includes(',') || data.includes('\n')) return `"${data}"`
    return data
  })
}

export const generate = (lines) => {
  console.log('generate csv from lines :', lines)
  // headers
  let csv = googleCols.join(',')
  csv += '\n' + lines.map(line => generateLine(line)).join('\n')
  console.log(csv)
  return csv
}
