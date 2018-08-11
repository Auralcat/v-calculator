<template>
  <div class="calculator-shell">
    <div>
      <visor/>
    </div>
    <div class="upper-grid">
      <button-panel v-if="changeMode" panelType="advanced-operations" :buttonLabels="advancedOperations"/>
      <div class="change-state">
        <span class="operation-state-label">{{operationState}}</span>
        <toggle-button color="#9dffcb" v-model="changeMode" />
      </div>
    </div>
    <div class="lower-grid">
      <button-panel panelType="numbers" :buttonLabels="numbers"/>
      <button-panel panelType="basic-operations" :buttonLabels="basicOperations"/>
    </div>
  </div>
</template>

<script>
import Visor from '@/components/Visor'
import CalcButton from '@/components/Button'
import ButtonPanel from '@/components/ButtonPanel'
import ToggleButton from 'vue-js-toggle-button/src/Button'

export default {
  name: 'Main',
  data () {
    return {
      changeMode: true,
      numbers: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'],
      basicOperations: ['+', '-', '*', '/', 'C', '←', '='],
      advancedOperations: ['ln', 'x²', '^', 'π', '√', 'log']
    }
  },
  methods: {
    keyMonitor (event) {
      alert(`This is key ${String.fromCharCode(event.keyCode)}`)
    },
  },
  created () {
    /* Vue has no dominion over the body tag */
    document.addEventListener('keyup', this.keyMonitor)
  },
  destroyed () {
    document.removeEventListener('keyup', this.keyMonitor)
  },
  computed: {
    operationState () {
      if (this.changeMode) {
        return "Advanced"
      }
      return "Basic"
    }
  },
  components: {
    Visor,
    CalcButton,
    ButtonPanel,
    ToggleButton
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.upper-grid {
  display: grid;
  grid-gap: 2px;
  grid-template-columns: 1fr 1fr;
  margin-bottom: 20px;
}

.lower-grid {
  display: grid;
  grid-gap: 2px;
  grid-template-columns: 1fr 1fr;
}

.operation-state-label {
  display: block;
}

/* Prevent toggle button's click area from expanding */
.change-state {
  align-self: start;
  grid-column: 3;
  padding: 4px;
  text-align: center;
  width: 86px;
}

.calculator-shell {
  background-color: #ffc1e7;
  box-shadow: 0 4px 2px darken(#ffc1e7, 5%);
  display: inline-table;
  margin: auto;
  padding: 12px;
  text-align: center;
  width: 10vw;
}

</style>
