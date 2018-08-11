<template>
  <input class="visor" type="text" v-model="currentDisplay" readonly/>
</template>

<script>
import store from '@/store'

export default {
  computed: {
    currentDisplay () {
      /* return store.state.current.match(/.{1,3}/g).join(",") */
      return store.state.current
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.visor {
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
