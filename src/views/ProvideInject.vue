<template>
  <ProvideInjectChild />
</template>

<script>
import ProvideInjectChild from "./ProvideInjectChild";

export default {
  components: {ProvideInjectChild},
  data() {
    return {
      item: ['A', 'B']
    }
  },
  provide() {
    return {
      itemLength: this.items.length
    }
  }
}
</script>

<style scoped>

</style>