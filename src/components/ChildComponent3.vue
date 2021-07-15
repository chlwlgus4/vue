<template>
<h1>{{msg}}</h1>
</template>
<script>
export default {
        name:'',
        components: {},
        data() {
            return {
                msg: ''
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
        methods: {
          childFunc() {
            console.log('부모 컴포넌트에서 직접 발생시킨 이벤트')
          }
        }
}
</script>