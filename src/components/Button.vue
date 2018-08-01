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
          store.commit("equals")
          break
        case "c":
          store.commit("clear")
          break
        case "√":
          store.commit("squareroot")
          break
        case "x²":
          store.commit("square")
          break
        case "←":
          store.commit("backspace")
          break
        default:
          store.commit("addchar", this.label)
      }
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
