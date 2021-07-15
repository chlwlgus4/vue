<template>
  <div>
    <PageTitle title="부모 컴포넌트에서 자식 컴포넌트로 데이터 전달"/>
    <PageTitle/>
  </div>
</template>
<script>
import PageTitle from "./PageTitle";

export default {
  name: '',
  components: {PageTitle},
  data() {
    return {
      sampleData: ''
    };
  },
  beforeCreate() {
  },
  created() {
  },
  beforeMount() {
  },
  mounted() {
  },
  beforeUpdate() {
  },
  updated() {
  },
  beforeUnmount() {
  },
  unmounted() {
  },
  methods: {}
}
</script>