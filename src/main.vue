<template>
  <div id="app">
    <div class="line margin-bottom">
      <Header />
      <FileHandler class="push-right" />
    </div>
    <TableEditor />
    <About />
  </div>
</template>

<script>
import Header from '@/components/header.vue'
import FileHandler from '@/components/file-handler.vue'
import TableEditor from '@/components/table-editor.vue'
import About from '@/components/about.vue'
import { storage, eventBus } from '@/utils'

export default {
  components: {
    About,
    FileHandler,
    Header,
    TableEditor,
  },
  mounted () {
    this.checkSavedFile()
  },
  methods: {
    async checkSavedFile () {
      console.log('app : checking for saved file')
      const data = await storage.get('file')
      if (!data) return console.log('app : no previousky saved file found')
      eventBus.$emit('file-read', data)
    },
  },
}
</script>

<style>
#app {
  font-family: sans-serif;
  -webkit-font-smoothing: antialiased;
  text-align: center;
  color: var(--color-black);
  padding: 20px;
  font-size: 16px;
  --color-primary: royalblue; /* #4169e1 */
  --color-secondary: #f2f2fc;
  --color-black: #333;
  --color-white: #f2f2f2;
  --color-grey: grey;
  --color-lightgrey: lightgrey;
}

#app * {
  box-sizing: border-box;
}

.line {
  display: flex;
  align-items: center;
}

.line .push-right {
  margin-left: auto;
}

.push-bottom {
  margin-top: auto;
}

.col {
  display: flex;
  flex-direction: column;
}

.button {
  background-color: transparent;
  cursor: pointer;
}

.border,
.button {
  border: 2px solid;
}

.border-radius,
.button {
  border-radius: .4rem;
}

.font-size,
.button {
  font-size: 1.4rem;
}

.input,
.button {
  padding: .4rem .5rem .2rem;
}

.margin {
  margin: 1rem;
}

.margin-right {
  margin-right: 1rem;
}

.margin-bottom {
  margin-bottom: 1rem;
}

.color,
.button {
  color: var(--color-primary);
}

.hidden {
  display: none;
}

.ellipsis {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}

p {
  margin: 0;
}

.input {
  border-color: var(--color-lightgrey);
  border-style: solid;
  border-width: .05rem;
  font-size: inherit;
}
</style>
