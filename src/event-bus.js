import Vue from 'vue'
import * as storage from './storage'

const eventBus = new Vue()

eventBus.$on('file-read', (data) => {
  console.log('bus : saving file content to LS')
  storage.set('file', data)
})

export default eventBus
