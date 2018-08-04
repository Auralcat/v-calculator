<template>
  <div class="results">
    <visor/>
    <button class="change-mode" v-on:click="changeMode = !changeMode">
      <p v-show="changeMode">Show Advanced Mode</p>
      <p v-show="!changeMode">Show Basic Mode</p>
    </button>
    <div class="basic-mode" v-show="changeMode"></div>
    <div class="advanced-mode" v-show="!changeMode">
      <calc-button label="√" class="operation" />
      <calc-button label="x²" class="operation" />
      <calc-button label="ln" class="operation" />
      <calc-button label="ϖ" class="operation" />
      <calc-button label="^" class="operation" />
    </div>
    <div class="buttons">
      <div class="numbers-panel">
        <calc-button label="7" class="number" />
        <calc-button label="8" class="number" />
        <calc-button label="9" class="number" />
        <calc-button label="4" class="number" />
        <calc-button label="5" class="number" />
        <calc-button label="6" class="number" />
        <calc-button class="number" label="1"/>
        <calc-button class="number" label="2"/>
        <calc-button label="3" class="number" />
      </div>
      <calc-button label="=" class="operation" />
      <calc-button label="C" class="warning" />
      <calc-button label="*" class="operation" />
      <calc-button label="/" class="operation" />
      <calc-button label="+" class="operation" />
      <calc-button label="-" class="operation" />
      <calc-button label="←" class="warning" />
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
