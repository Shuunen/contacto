<template>
  <div class="line">
    <p v-if="fileLoaded" class="margin-right font-size color">{{ status }}</p>
    <input ref="input" class="hidden" type="file" accept=".csv" @change="onFileSelection">
    <button class="button margin-right" @click="selectFile">Open {{ fileLoaded ? 'another ' : '' }} file</button>
    <button class="button" @click="exportFile">Export data</button>
  </div>
</template>

<script>
import { eventBus } from '@/utils'

export default {
  data () {
    return {
      fileLoaded: undefined,
      visible: false,
      nbLines: undefined,
    }
  },
  computed: {
    status () {
      if (this.nbLines >= 0) return `Editing ${this.nbLines} line(s) from "${this.fileLoaded.name}"`
      return `Editing "${this.fileLoaded.name}"`
    },
  },
  created () {
    eventBus.$on('file-read', data => this.onFileLoaded(data))
    eventBus.$on('nb-lines', nbLines => (this.nbLines = nbLines))
  },
  methods: {
    loadTextFile (file) {
      var reader = new FileReader()
      console.log('file : reading', file)
      reader.addEventListener('load', event => eventBus.$emit('file-read', { name: file.name, content: event.target.result }))
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
      console.log('file : file loaded')
      this.fileLoaded = file
    },
    exportFile () {
      console.log('file : export')
    },
  },
}
</script>
