<template>
  <div :class="[panelType, 'panel'].join('-')">
    <calc-button v-for="buttonLabel in buttonLabels" v-bind:label="buttonLabel"></calc-button>
  </div>
</template>

<script>
import CalcButton from '@/components/Button'
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
$panel-types: (
  (name: numbers, cols: 3),
  (name: basic-operations, cols: 2),
  (name: advanced-operations, cols: 3)
);

@each $type in $panel-types {
  $cols-list: null;
  @for $i from 1 through map-get($type, cols) {
     $cols-list: join($cols-list, 40px);
  }

  .#{map-get($type, name)}-panel {
    display: grid;
    grid-gap: 4px;
    grid-template-columns: $cols-list;
    padding: 4px;
  }
}
</style>
