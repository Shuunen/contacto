<template>
  <div id="app">
    <Header/>
    <FileLoader/>
    <TableEditor />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import FileLoader from './components/FileLoader.vue'
import TableEditor from './components/TableEditor.vue'

export default {
  name: 'app',
  components: {
    FileLoader,
    Header,
    TableEditor
  }
}
</script>

<style>
#app {
  font-family: sans-serif;
  -webkit-font-smoothing: antialiased;
  text-align: center;
  color: #2c3e50;
  padding: 20px;
  font-size: 16px;
}

.line {
  display: flex;
}

.col {
  display: flex;
  flex-direction: column;
}

button {
  background-color: transparent;
  border: 2px solid;
  font-size: 1.5rem;
  color: royalblue;
  border-radius: .4rem;
  margin: 1rem;
  cursor: pointer;
}
</style>
