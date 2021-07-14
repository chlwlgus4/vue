<template>
<div>
  <button type="button" @click="increaseCounter">Add 1</button>
  <button type="button" @click="one(), two()">Click</button>
  <p>The counter is : {{counter}}</p>
</div>
</template>
<script>
export default {
        name:'',
        components: {},
        data() {
            return {
                counter: 0
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
          increaseCounter() {
            this.counter = this.counter + 1;
          },
          one() {
            alert('One');
          },
          two() {
            alert('Two')
          }
        }
}
</script>