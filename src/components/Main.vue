<template>
  <div class="results">
    <input class="input" name="" type="text" readonly value="" v-model="current"/>
    <button class="change-mode" v-on:click="changeMode = !changeMode">
      <p v-show="changeMode">Show Advanced Mode</p>
      <p v-show="!changeMode">Show Basic Mode</p>
    </button>
    <div class="advanced-mode" v-show="!changeMode"></div>
    <div class="basic-mode" v-show="changeMode"></div>
    <div class="buttons">
      <button class="button" v-on:click="press">7</button>
      <button class="button" v-on:click="press">8</button>
      <button class="button" v-on:click="press">9</button>
      <button class="button" v-on:click="press">4</button>
      <button class="button" v-on:click="press">5</button>
      <button class="button" v-on:click="press">6</button>
      <button class="button" v-on:click="press">1</button>
      <button class="button" v-on:click="press">2</button>
      <button class="button" v-on:click="press">3</button>
      <button class="button equal-sign" v-on:click="press">=</button>
      <button class="button" v-on:click="press">C</button>
      <button class="button" v-on:click="press">*</button>
      <button class="button" v-on:click="press">/</button>
      <button class="button" v-on:click="press">√</button>
      <button class="button" v-on:click="press">x²</button>
    </div>
  </div>
</template>

<script>
export default {
    name: 'Main',
    data () {
      return {
        current: '',
        changeMode: true
      }
    },
    methods: {
      press (event) {
        /* We make a reference to the inner text of each button
           to dispatch our functions*/
        let key = event.target.innerText
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
          default:
            this.current += key
        }
      },
      /* Refactor later */
      /* The = button */
      equals () {
        if ((this.current).indexOf("^") > -1) {
          let base = (this.current).slice(0, (this.current).indexOf("^"))
          let exponent = (this.current).slice((this.current).indexOf("^") + 1)
          this.current = eval("Math.pow(" + base + "," + exponent + ")")
        } else {
          this.current = eval(this.current)
        }
      },
      /* The C button */
      clear () {
        this.current = "";
      },
      backspace () {
        this.current = this.current.substring(0, this.current.length - 1)
      },
      multiply () {
        this.current += "*"
      },
      divide () {
        this.current += "/"
      },
      plus () {
        this.current += "+"
      },
      minus () {
        this.current += "-"
      },
      sin () {
        this.current = Math.sin(this.current)
      },
      cos () {
        this.current = Math.cos(this.current)
      },
      tan () {
        this.current = Math.tan(this.current)
      },
      log10 () {
        this.current = Math.log10(this.current)
      },
      square () {
        this.current = this.current ** 2
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
