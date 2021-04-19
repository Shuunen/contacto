<template>
  <p>
    This webapp <strong>{{ pkg.name }} v{{ pkg.version }}</strong> is open source, code available on
    <a target="_blank" :href="pkg.homepage">Github</a>.<br />
    Kindly hosted by <a target="_blank" href="https://www.netlify.com/">Netlify</a>
  </p>
</template>

<script>
import packageJson from "../../package.json"

export default {
  data () {
    return {
      pkg: packageJson
    }
  },
}
</script>

<style scoped>
p {
  line-height: 2;
  margin: 2rem 0;
}
</style>
