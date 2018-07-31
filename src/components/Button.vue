<template>
  <button class="button" v-on:click="press">{{label}}</button>
</template>

<script>
import { current } from '@/logic'

export default {
  props: ['label'],
  methods: {
    press () {
      let key = this.label
      switch (key) {
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
          current += key
      }
    },
    /* Refactor later */
    /* The = button */
    equals () {
      if ((current).indexOf("^") > -1) {
        let base = (current).slice(0, (current).indexOf("^"))
        let exponent = (current).slice((current).indexOf("^") + 1)
        current = eval("Math.pow(" + base + "," + exponent + ")")
      } else {
        current = eval(current)
      }
    },
    /* The C button */
    clear () {
      current = "";
    },
    backspace () {
      current = current.substring(0, current.length - 1)
    },
    sin () {
      current = Math.sin(current)
    },
    cos () {
      current = Math.cos(current)
    },
    tan () {
      current = Math.tan(current)
    },
    log10 () {
      current = Math.log10(current)
    },
    square () {
      current = current ** 2
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
