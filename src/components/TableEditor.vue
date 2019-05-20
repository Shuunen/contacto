<template>
  <div class="table-editor col">
    <p v-if="fileLoaded">Editing file : {{ fileLoaded.name }}</p>
    <table class="table">
      <thead>
        <tr>
          <th style="width:100px">
            <div class="ellipsis">Name</div>
          </th>
          <th v-for="column in columns" :key="column">
            <div class="ellipsis">{{ column }}</div>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(line, index) in lines" :key="'line-'+index">
          <td>
            <div class="name ellipsis">{{ line.Name }}</div>
          </td>
          <td v-for="column in columns" :key="column">
            <input class="input" v-model="line[column]" />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import * as storage from '../storage'
import * as csv from '../csv'
import eventBus from '../event-bus'

export default {
  data () {
    return {
      columns: ['Given Name', 'Family Name', 'Nickname', 'Birthday'],
      fileLoaded: null,
      lines: []
    }
  },
  created () {
    this.checkSavedFile()

    eventBus.$on('file-read', data => this.onFileLoaded(data))
  },
  methods: {
    checkSavedFile () {
      console.log('table : checking for saved file')
      storage
        .get('file')
        .then(data => this.onFileLoaded(data))
        .catch(() => console.log('table : no previousky saved file found'))
    },
    async onFileLoaded (file) {
      this.fileLoaded = file
      this.lines = await csv.parse(file.content)
      // console.log('table : line', this.lines)
    }
  }
}
</script>

<style>
.table {
  border: 1px solid #cbcbcb;
  border-collapse: collapse;
  border-spacing: 0;
  empty-cells: show;
  table-layout: fixed;
  width: 100%;
  white-space: nowrap;
}

.table tbody > tr:last-child > td {
  border-bottom-width: 0;
}

.table td {
  background-color: transparent;
  border-bottom: 1px solid #cbcbcb;
}

.table td,
.table th {
  border-bottom: 1px solid #cbcbcb;
  border-left: 1px solid #cbcbcb;
  border-width: 0 0 1px;
  font-size: inherit;
  margin: 0;
  overflow: visible;
  padding: 0.5em 1em;
}

.table td:first-child,
.table th:first-child {
  border-left-width: 0;
}

.table thead {
  background-color: #e0e0e0;
  color: #000;
  text-align: left;
  vertical-align: bottom;
}

.table tr:nth-child(2n-1) td {
  background-color: #f2f2f2;
}

.name {
  text-align: left;
}

.input {
  width: 100%;
}
</style>
