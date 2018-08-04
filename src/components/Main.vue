<template>
  <div class="results">
    <visor/>
    <button class="change-mode" v-on:click="changeMode = !changeMode">
      <p v-show="changeMode">Show Advanced Mode</p>
      <p v-show="!changeMode">Show Basic Mode</p>
    </button>
    <!-- Maybe you don't need this div, check later -->
    <div class="basic-mode" v-show="changeMode"></div>
    <div class="buttons">
      <div class="advanced-operations-panel" v-show="!changeMode">
        <calc-button class="operation squareroot" label="√" />
        <calc-button class="operation square" label="x²" />
        <calc-button class="operation natural-logarithm" label="ln" />
        <calc-button class="operation pi" label="ϖ" />
        <calc-button class="operation exponentiate" label="^" />
      </div>
    </div>
    <div class="buttons">
      <div class="numbers-panel">
        <calc-button class="number dot" label="." />
        <calc-button class="number zero" label="0" />
        <calc-button class="number one" label="1" />
        <calc-button class="number two" label="2" />
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
<style scoped lang="scss">
  $panel-types: numbers basic-operations advanced-operations;
  $buttons: (
    /* Numbers */
    (name: zero,  col: 1 / span 2, row: 4),
    (name: dot,   col: 3,          row: 4),
    (name: one,   col: 1,          row: 3),
    (name: two,   col: 2,          row: 3),
    (name: three, col: 3,          row: 3),
    (name: four,  col: 1,          row: 2),
    (name: five,  col: 2,          row: 2),
    (name: six,   col: 3,          row: 2),
    (name: seven, col: 1,          row: 1),
    (name: eight, col: 2,          row: 1),
    (name: nine,  col: 3,          row: 1),
    /* Basic operations */
    (name: backspace, col: 1,          row: 1),
    (name: clear,     col: 2,          row: 1),
    (name: equals,    col: 1 / span 2, row: 4),
    (name: multiply,  col: 1,          row: 2),
    (name: divide,    col: 2,          row: 2),
    (name: sum,       col: 1,          row: 3),
    (name: subtract,  col: 2,          row: 3),
    /* Advanced operations */
    (name: squareroot, col: 1, row: 1),
    (name: pi, col: 2, row: 1),
    (name: square, col: 3, row: 1),
    (name: natural-logarithm, col: 1, row: 2),
    (name: logarithm, col: 2, row: 2),
    (name: exponentiate, col: 3, row: 2),
  );

  .buttons {
    display: flex;
    justify-content: center;
  }

  @each $type in $panel-types {
    .#{$type}-panel {
      display: grid;
      grid-gap: 4px;
      grid-template-columns: 40px 40px 40px;
      padding: 4px;
    }
  }

  @each $button in $buttons {
    .#{map-get($button, name)} {
      grid-column: map-get($button, col);
      grid-row: map-get($button, row);
    }
  }

</style>
