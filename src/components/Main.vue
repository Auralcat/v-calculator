<template>
  <div class="results">
    <input class="input" name="" type="text" value="" v-model="current"/>
    <div class="buttons">
      <button class="button" v-on:click="press">7</button>
      <button class="button" v-on:click="press">8</button>
      <button class="button" v-on:click="press">9</button>
      <button class="button" v-on:click="press">4</button>
      <button class="button" v-on:click="press">5</button>
      <button class="button" v-on:click="press">6</button>
      <button class="button" v-on:click="press">1</button>
      <button class="button" v-on:click="press">2</button>
      <button class="button" v-on:click="press">3</button>
      <button class="button equal-sign" v-on:click="press">=</button>
      <button class="button" v-on:click="press">C</button>
      <button class="button" v-on:click="press">*</button>
      <button class="button" v-on:click="press">/</button>
      <button class="button" v-on:click="press">√</button>
      <button class="button" v-on:click="press">x²</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Main',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
