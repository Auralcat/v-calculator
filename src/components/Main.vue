<template>
  <div class="results">
    <visor/>
    <button class="change-mode" v-on:click="changeMode = !changeMode">
      <p v-show="changeMode">Show Advanced Mode</p>
      <p v-show="!changeMode">Show Basic Mode</p>
    </button>
    <div class="basic-mode" v-show="changeMode"></div>
    <div class="advanced-mode" v-show="!changeMode">
      <calc-button class="operation" label="√" />
      <calc-button class="operation" label="x²" />
      <calc-button class="operation" label="ln" />
      <calc-button class="operation" label="ϖ" />
      <calc-button class="operation" label="^" />
    </div>
    <div class="buttons">
      <div class="numbers-panel">
        <calc-button class="number" label="7" />
        <calc-button class="number" label="8" />
        <calc-button class="number" label="9" />
        <calc-button class="number" label="4" />
        <calc-button class="number" label="5" />
        <calc-button class="number" label="6" />
        <calc-button class="number" label="1"/>
        <calc-button class="number" label="2"/>
        <calc-button class="number" label="3" />
      </div>
      <calc-button class="operation" label="=" />
      <calc-button class="warning" label="C" />
      <calc-button class="operation" label="*" />
      <calc-button class="operation" label="/" />
      <calc-button class="operation" label="+" />
      <calc-button class="operation" label="-" />
      <calc-button class="warning" label="←" />
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
  .numbers-panel {
    display: grid;
    grid-template-columns: 40px 40px 40px;
    grid-gap: 4px;
  }
</style>
