<template>
  <div class="table-editor col">
    <table class="table">
      <thead>
        <tr>
          <th style="width:200px">
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
            <input v-model="line[column]" class="input">
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import pkg from '@/../package.json'
import { eventBus, parse, generate } from '@/utils'

export default {
  data () {
    return {
      columns: pkg.config.columns,
      lines: [],
    }
  },
  created () {
    eventBus.$on('file-read', data => this.onFileLoaded(data))
    eventBus.$on('export-to-csv', () => generate(this.lines))
  },
  methods: {
    async onFileLoaded (file) {
      this.lines = await parse(file.content)
      console.log('table : found', this.lines.length, 'line(s)')
      eventBus.$emit('nb-lines', this.lines.length)
    },
  },
}
</script>

<style>
.table {
  border: 1px solid var(--color-lightgrey);
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
  border-bottom: 1px solid var(--color-lightgrey);
}

.table td,
.table th {
  border-bottom: 1px solid var(--color-lightgrey);
  border-left: 1px solid var(--color-lightgrey);
  font-size: inherit;
  margin: 0;
  overflow: visible;
  padding: 0.5em 1em;
  font-weight: normal;
}

.table td:first-child,
.table th:first-child {
  border-left-width: 0;
}

.table thead {
  background-color: var(--color-grey);
  color: var(--color-white);
  text-align: left;
  vertical-align: bottom;
}

.table tr:nth-child(2n-1) td {
  background-color: var(--color-white);
}

.name {
  text-align: left;
}

.input {
  width: 100%;
}
</style>
