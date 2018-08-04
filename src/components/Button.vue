<template>
  <button class="button" v-on:click="press">{{label}}</button>
</template>

<script>
import store from "@/store"

export default {
  props: ['label', 'color'],
  methods: {
    press () {
      switch (this.label) {
        case "=":
          store.commit("equals")
          break
        case "ϖ":
          store.commit("printPi")
          break
        case "ln":
          store.commit("ln")
          break
        case "C":
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
<!-- You'd better use Sass for this. -->
<style lang="scss">
  .number {
    background-color: #ff9;
    border: 1px solid lighten(#ff9, 30%);
    box-shadow: 0 2px 0 darken(#ff9, 10%);
  }

  .operation {
    background-color: #f00;
    border: 1px solid lighten(#f00, 30%);
    box-shadow: 0 2px 0 darken(#f00, 10%);
  }

button {
  font-family: OpenSans;
  color: #FFFFFF;
  background-color: #0ab;
  border: 1px solid lighten(#0ab, 30%);
  border-radius: 4px;
  box-shadow: 0 2px 0 darken(#0ab, 10%);
  position: relative;
  top: 0px;
  transition: all ease 0.3s;
}

button:active {
  box-shadow: 0 2px 0 darken(#0ab, 10%);
  top: 4px;
}
</style>
