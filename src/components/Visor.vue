<template>
  <div>
    <input class="input" name="" type="text" readonly value="" v-model="current"/>
  </div>
</template>

<script>
import { current } from "@/logic"

export default {
  data () {
    return {
      current
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
