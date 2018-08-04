<template>
  <div class="results">
    <visor/>
    <button class="change-mode" v-on:click="changeMode = !changeMode">
      <p v-show="changeMode">Show Advanced Mode</p>
      <p v-show="!changeMode">Show Basic Mode</p>
    </button>
    <!-- Maybe you don't need this div, check later -->
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
        <calc-button class="number dot" label="." />
        <calc-button class="number zero" label="0" />
        <calc-button class="number one" label="1"/>
        <calc-button class="number two" label="2"/>
        <calc-button class="number three" label="3" />
        <calc-button class="number four" label="4" />
        <calc-button class="number five" label="5" />
        <calc-button class="number six" label="6" />
        <calc-button class="number seven" label="7" />
        <calc-button class="number eight" label="8" />
        <calc-button class="number nine" label="9" />
      </div>
      <div class="basic-operations-panel">
        <calc-button class="operation equals" label="=" />
        <calc-button class="warning clear" label="C" />
        <calc-button class="operation multiply" label="*" />
        <calc-button class="operation divide" label="/" />
        <calc-button class="operation sum" label="+" />
        <calc-button class="operation subtract" label="-" />
        <calc-button class="warning backspace" label="←" />
      </div>
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

  .zero {
    grid-column: 1 / span 2;
    grid-row: 4;
  }

  .one {
    grid-column: 1;
    grid-row: 3;
  }

  .two {
    grid-column: 2;
    grid-row: 3;
  }
  .three {
    grid-column: 3;
    grid-row: 3;
  }
  .four {
    grid-column: 1;
    grid-row: 2;
  }
  .five {
    grid-column: 2;
    grid-row: 2;
  }
  .six {
    grid-column: 3;
    grid-row: 2;
  }
  .seven {
    grid-column: 1;
    grid-row: 1;
  }
  .eight {
    grid-column: 2;
    grid-row: 1;
  }
  .nine {
    grid-column: 3;
    grid-row: 1;
  }
  .dot {
    grid-column: 3;
    grid-row: 4;
  }

  .basic-operations-panel {
    display: grid;
    grid-template-columns: 40px 40px;
    grid-gap: 4px;
  }

  .backspace {
    grid-column: 1;
    grid-row: 1;
  }

  .clear {
    grid-column: 2;
    grid-row: 1;
  }

  .equals {
    grid-column: 1 / span 2;
    grid-row: 4;
  }

  .multiply {
    grid-column: 1;
    grid-row: 2;
  }

  .divide {
    grid-column: 2;
    grid-row: 2;
  }

  .sum {
    grid-column: 1;
    grid-row: 3;
  }

  .subtract {
    grid-column: 2;
    grid-row: 3;
  }

</style>
