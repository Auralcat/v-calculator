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
<style scoped>

</style>
