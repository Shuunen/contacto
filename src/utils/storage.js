/* global localStorage */
let target = {}
/* istanbul ignore if  */
if (typeof localStorage !== 'undefined') target = localStorage

class Storage {
  async get(key) {
    const data = target[key]
    if (!data) return
    return (data[0] === '{') ? JSON.parse(data) : data
  }

  async set(key, data) {
    target[key] = typeof data === 'object' ? JSON.stringify(data) : data
    return data
  }

  async has(key) {
    return this.get(key).then(value => Boolean(value))
  }
}

exports.storage = new Storage()
