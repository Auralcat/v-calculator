<template>
  <button class="button" v-on:click="press">{{label}}</button>
</template>

<script>
  export default {
    props: ['label']
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
