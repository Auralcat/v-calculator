<template>
  <div class="results">
    <visor/>
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
