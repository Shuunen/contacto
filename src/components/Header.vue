<template>
  <div class="header line margin-bottom">
    <img class="header--logo margin-right" alt="contacto logo" height="64" width="64" src="../assets/icons8-clean-64.png">
    <div class="col">
      <h1 class="header--title">{{ title }}</h1>
      <h2 class="header--subtitle">{{ description }}</h2>
    </div>
  </div>
</template>

<script>
import pkg from '@/../package.json'

export default {
  data () {
    return {
      title: pkg.config.title,
      description: pkg.description,
    }
  },
}
</script>

<style>
.header--title,
.header--subtitle {
  text-align: left;
  margin-top: 0;
  margin-bottom: 0;
}
</style>
