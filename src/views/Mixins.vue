<template>
<div></div>
</template>

<script>
import ApiMixin from '../api';
export default {
  mixins: [ApiMixin],
  data() {
    return {
      productList: []
    };
  },
  async mounted() {
    this.productList = await this.$callAPI('https://b63bfbfc-6119-4819-a767-68fddec72cab.mock.pstmn.io/list', 'get');
    console.log(this.productList)
  }
}
</script>

<style scoped>

</style>