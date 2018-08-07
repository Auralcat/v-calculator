<template>
  <div>
    <input name="" type="text" readonly value="" v-model="currentDisplay"/>
  </div>
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
<style>
input {
  border: none;
  border-radius: 4px;
  color: #372382;
  padding: 12px;
  font-family: Orbitron;
  font-size: 16px;
  text-align: right;
  background-color: grayscale(#Afeeee);
}
</style>
