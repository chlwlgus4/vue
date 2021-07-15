<template>
  <child-component @send-message="sendMessage" ref="child_component"/>
</template>

<script>
import ChildComponent from "./ChildComponent";

export default {
  components: {
    ChildComponent
  },
  methods() {
    this.$refs.child_component.$refs.btn.click();
  }
}
</script>

<style scoped>

</style>