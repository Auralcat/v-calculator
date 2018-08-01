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
          this.equals()
          break
        case "C":
          this.clear()
          break
        case "*":
          this.multiply()
          break
        case "/":
          this.divide()
          break
        case "√":
          this.squareRoot()
          break
        case "x²":
          this.square()
          break
        case "←":
          this.backspace()
          break
        default:
          current += this.label
      }
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
