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
          store.dispatch("EQUALS")
          break
        case "C":
          store.dispatch("CLEAR")
          break
        case "√":
          store.dispatch("SQUAREROOT")
          break
        case "x²":
          store.dispatch("SQUARE")
          break
        case "←":
          store.dispatch("BACKSPACE")
          break
        default:
          store.dispatch("ADDCHAR")
      }
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
