<template>
  <button class="button" v-on:click="press">{{label}}</button>
</template>

<script>
import store from "@/store"

export default {
  props: ['label'],
  methods: {
    press () {
      switch (this.label) {
        case "=":
          store.commit("EQUALS")
          break
        case "C":
          store.commit("CLEAR")
          break
        case "√":
          store.commit("SQUAREROOT")
          break
        case "x²":
          store.commit("SQUARE")
          break
        case "←":
          store.commit("BACKSPACE")
          break
        default:
          store.commit("ADDCHAR", this.label)
      }
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
