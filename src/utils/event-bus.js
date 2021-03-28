const Vue = require('vue/dist/vue')
const { storage } = require('./storage.js')

const eventBus = new Vue()

eventBus.$on('file-read', data => {
  console.log('bus : saving file content to LS')
  storage.set('file', data)
})

exports.eventBus = eventBus
