<template>
  <div class="calculator-shell">
    <div>
      <visor/>
    </div>
    <div class="change-mode">
      <button v-on:click="changeMode = !changeMode">
        <p v-show="changeMode">Show Advanced Mode</p>
        <p v-show="!changeMode">Show Basic Mode</p>
      </button>
    </div>
    <div class="buttons" v-if="!changeMode">
      <button-panel panelType="advanced-operations" :buttonLabels="advancedOperations"/>
    </div>
    <div class="buttons">
      <button-panel panelType="numbers" :buttonLabels="numbers"/>
      <button-panel panelType="basic-operations" :buttonLabels="basicOperations"/>
    </div>
  </div>
</template>

<script>
  import Visor from "@/components/Visor"
  import CalcButton from "@/components/Button"
  import ButtonPanel from "@/components/ButtonPanel"

  export default {
    name: 'Main',
    data () {
      return {
        changeMode: true,
        numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, '.'],
        basicOperations: ["+", "-", "*", "/", "C" , "←", "="],
        advancedOperations: ["ln", "x²", "^", "ϖ", "√", "log"]
      }
    },
    methods: {
    },
    components: {
      Visor,
      CalcButton,
      ButtonPanel
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.buttons {
  display: flex;
  justify-content: center;
}

.calculator-shell {
  text-align: center;
  background-color: #ffc1e7;
  width: 25vw;
  margin: auto;
  padding: 12px;
  box-shadow: 0 4px 2px darken(#ffc1e7, 5%);
}

.change-mode {
  padding: 12px;
}
</style>
