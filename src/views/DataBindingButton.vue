<template>
  <div>
    <input type="text" v-model="textValue" />
    <button type="button" v-bind:disabled="textValue==''">Click</button>
  </div>
</template>
<script>
export default {
        name:'',
        components: {},
        data() {
            return {
              textValue: ''
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