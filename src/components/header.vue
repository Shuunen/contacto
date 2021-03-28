<template>
  <div class="header line margin-bottom">
    <img class="header--logo margin-right" alt="contacto logo" src="../assets/logo.svg" />
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

.header--title {
  font-size: 3rem;
  letter-spacing: -1px;
}

.header--subtitle {
  color: var(--color-grey);
  margin-left: .2rem;
}

.header--logo {
  height: 10rem;
}
</style>
