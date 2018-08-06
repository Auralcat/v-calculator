<template>
  <div :class="[panelType, 'panel'].join('-')">
    <calc-button v-for="buttonLabel in buttonLabels" v-bind:label="buttonLabel"></calc-button>
  </div>
</template>

<script>
  import CalcButton from "@/components/Button"
  export default {
    props: ['panelType', 'buttonLabels'],
    data () {
      return {

      }
    },
    components: {
      CalcButton
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
$panel-types: numbers basic-operations advanced-operations;

@each $type in $panel-types {
  .#{$type}-panel {
    display: grid;
    grid-gap: 4px;
    grid-template-columns: 40px 40px 40px;
    padding: 4px;
  }
}
</style>
