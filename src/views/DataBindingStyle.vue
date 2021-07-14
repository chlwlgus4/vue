<template>
  <div v-bind:style="styleObject">인라인 스타일 바인딩</div>
</template>
<script>
export default {
        name:'',
        components: {},
        data() {
            return {
              styleObject: {
                color: 'red',
                fontSize: '13px'
              }
            };
        },
        beforeCreate() {},
        created() {},
        beforeMount() {},
        mounted(){},
        beforeUpdate() {},
        updated() {},
        beforeUnmount(){},
        unmounted(){},
        methods: {}
}
</script>