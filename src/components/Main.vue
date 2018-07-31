<template>
  <div class="results">
    <input class="input" name="" type="text" readonly value="" v-model="current"/>
    <button class="change-mode">
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
    data: {
      current: '',
      changeMode: true
    },
    methods: {
      press (event) {
        /* We make a reference to the inner text of each button
           to dispatch our functions*/
        let key = event.target.innerText
        switch (key) {
          case "=":
            equals()
            break
          case "C":
            clear()
            break
          case "*":
            multiply()
            break
          case "/":
            divide()
            break
          case "√":
            squareRoot()
            break
          case "x²":
            square()
            break
          default:
            this.current += key
        }
      },
      /* Refactor later */
      /* The = button */
      equals () {
        if ((app.current).indexOf("^") > -1) {
          let base = (app.break).slice(0, (app.current).indexOf("^"))
          let exponent = (app.current).slice((app.current).indexOf("^") + 1)
          app.current = eval("Math.pow(" + base + "," + exponent + ")")
        } else {
          app.current = eval(app.current)
        }
      },
      /* The C button */
      clear () {
        app.current = "";
      },
      backspace () {
        app.current = app.current.substring(0, app.current.length - 1)
      },
      multiply () {
        app.current += "*"
      },
      divide () {
        app.current += "/"
      },
      plus () {
        app.current += "+"
      },
      minus () {
        app.current += "-"
      },
      sin () {
        app.current = Math.sin(app.current)
      },
      cos () {
        app.current = Math.cos(app.current)
      },
      tan () {
        app.current = Math.tan(app.current)
      },
      log10 () {
        app.current = Math.log10(app.current)
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
