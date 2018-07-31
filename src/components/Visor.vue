<template>
  <div>
    <input class="input" name="" type="text" readonly value="" v-model="currentDisplay"/>
  </div>
</template>

<script>
import store from "@/store"

export default {
  data () {
    return {
      currentDisplay: store.current
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
