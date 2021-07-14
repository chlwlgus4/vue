<template>
  <div>
    <label><input type="checkbox" v-model="checked" true-value="yes" false-value="no"/>{{checked}}</label>
  </div>
</template>
<script>
export default {
        name:'',
        components: {},
        data() {
            return {
              checked: true
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