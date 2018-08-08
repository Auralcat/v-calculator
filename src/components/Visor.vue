<template>
  <input type="text" v-model="currentDisplay"/>
</template>

<script>
import store from "@/store"

export default {
  computed: {
    currentDisplay () {
      return store.state.current
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
input {
  border: none;
  border-radius: 4px;
  color: #372382;
  padding: 12px;
  font-family: Orbitron;
  font-size: 16px;
  text-align: right;
  background-color: lighten(#Afeeee, 13%);
  margin-bottom: 12px;
}
</style>
