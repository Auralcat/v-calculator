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
@mixin button-colors($base, $font:#000) {
  background-color: $base;
  border: 1px solid lighten($base, 30%);
  box-shadow: 0 2px 0 darken($base, 10%);
  color: $font;
}
/* Button type colors */
.number {
  @include button-colors(#ff0)
}

.operation {
  @include button-colors(#ffa500)
}

.warning {
  @include button-colors(#f00)
}

button {
  font-family: OpenSans;
  border-radius: 4px;
  position: relative;
  top: 0px;
  transition: all 0.2s;
}

button:active {
  top: 2px;
}
</style>
