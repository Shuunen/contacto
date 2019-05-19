
import pkg from '../package.json'

const separator = '_'
const baseKey = `${pkg.name}${separator}${pkg.version}`

export async function get (key) {
  const fullKey = baseKey + separator + key
  let data = localStorage[fullKey]
  if (!data) {
    const message = `storage : found no matching key "${fullKey}"`
    console.log(message)
    return Promise.reject(new Error(message))
  }
  try {
    data = JSON.parse(data)
    return Promise.resolve(data)
  } catch (e) {
    console.error(e)
    return Promise.reject(e)
  }
}

export async function set (key, data) {
  const fullKey = baseKey + separator + key
  localStorage[fullKey] = JSON.stringify(data)
  return Promise.resolve(data)
}
