<template>
  <div class="file-loader">
    <button class="file-loader--button" @click="selectFile">Open file</button>
    <input class="file-loader--input" type="file" ref="input" @change="onFileSelection" accept=".csv">
  </div>
</template>

<script>
import eventBus from '../event-bus'

export default {
  data () {
    return {
      visible: false
    }
  },
  methods: {
    loadTextFile (file) {
      var reader = new FileReader()
      console.log('reading file', file)
      reader.onload = event => eventBus.$emit('file-read', { name: file.name, content: event.target.result })
      reader.readAsText(file)
    },
    selectFile () {
      console.log('simulate click on input file')
      this.$refs.input.click()
    },
    onFileSelection () {
      console.log('user selected file')
      this.loadTextFile(this.$refs.input.files[0])
    }
  }
}
</script>

<style>
.file-loader--input {
  display: none;
}
</style>
