import Vue from 'vue'
import { storage } from '.'

export const eventBus = new Vue()

eventBus.$on('file-read', (data) => {
  console.log('bus : saving file content to LS')
  storage.set('file', data)
})
