<template>
<h1>Full Name : {{fullName}}</h1>
</template>
<script>
export default {
        name:'',
        components: {},
        data() {
            return {
              firstName: 'Seugwon',
              lastName: 'Go'
            };
        },
        computed: {
          fullName() {
            return `${this.firstName} ${this.lastName}`
          }
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