
import pkg from '../package.json'

const separator = '_'
const baseKey = `${pkg.name}${separator}${pkg.version}`

export async function get (key) {
  const fullKey = baseKey + separator + key
  if (!localStorage[fullKey]) {
    return Promise.reject(new Error(`storage : found no matching key "${fullKey}"`))
  }
  try {
    return Promise.resolve(JSON.parse(localStorage[fullKey]))
  } catch (e) {
    return Promise.reject(e)
  }
}

export async function set (key, data) {
  const fullKey = baseKey + separator + key
  localStorage[fullKey] = JSON.stringify(data)
  return Promise.resolve(data)
}
