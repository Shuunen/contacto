<template>
  <div class="line">
    <p v-if="fileLoaded" class="margin-right font-size color">Editing file : {{ fileLoaded.name }}</p>
    <input ref="input" class="hidden" type="file" accept=".csv" @change="onFileSelection">
    <button class="button margin-right" @click="selectFile">Open file</button>
    <button class="button" @click="exportFile">Export data</button>
  </div>
</template>

<script>
import eventBus from '../event-bus'

export default {
  data () {
    return {
      fileLoaded: null,
      visible: false
    }
  },
  created () {
    eventBus.$on('file-read', data => this.onFileLoaded(data))
  },
  methods: {
    loadTextFile (file) {
      var reader = new FileReader()
      console.log('file : reading', file)
      reader.onload = event => eventBus.$emit('file-read', { name: file.name, content: event.target.result })
      reader.readAsText(file)
    },
    selectFile () {
      console.log('file : simulate click on input')
      this.$refs.input.click()
    },
    onFileSelection () {
      console.log('file : selected file')
      this.loadTextFile(this.$refs.input.files[0])
    },
    async onFileLoaded (file) {
      this.fileLoaded = file
    },
    exportFile () {
      console.log('file : export')
    }
  }
}
</script>
