const target = (typeof localStorage !== 'undefined') ? localStorage : {}

class Storage {
  async get (key) {
    const data = target[key]
    if (!data) return null
    console.log('found data :', data)
    return (data[0] === '{') ? JSON.parse(data) : data
  }

  async set (key, data) {
    target[key] = typeof data === 'object' ? JSON.stringify(data) : data
    return data
  }

  async has (key) {
    return this.get(key).then(value => !!value).catch(() => false)
  }
}

export const storage = new Storage()
