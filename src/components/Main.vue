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
      <div class="numbers">
        <div class="number-row">
          <calc-button label="7"/>
          <calc-button label="8"/>
          <calc-button label="9"/>
        </div>
        <div class="number-row">
          <calc-button label="4"/>
          <calc-button label="5"/>
          <calc-button label="6"/>
        </div>
        <div class="number-row">
          <calc-button label="1"/>
          <calc-button label="2"/>
          <calc-button label="3"/>
        </div>
      </div>
      <calc-button label="="/>
      <calc-button label="C"/>
      <calc-button label="*"/>
      <calc-button label="/"/>
      <calc-button label="+"/>
      <calc-button label="-"/>
      <calc-button label="←"/>
      <calc-button label="√"/>
      <calc-button label="x²"/>
    </div>
  </div>
</template>

<script>
import Visor from "@/components/Visor"
import CalcButton from "@/components/Button"

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
          case "←":
            this.backspace()
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
    },
    components: {
      Visor,
      CalcButton
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
