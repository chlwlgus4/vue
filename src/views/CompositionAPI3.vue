<template>
  <div>
    <h2>Calculator</h2>
    <div>
      <input type="text" v-model="state.num1" />
      <span> + </span>
      <input type="text" v-model="state.num2" />
      <span> = </span>
      <span>{{state.result}}</span>
    </div>
  </div>
</template>
<script>
import {reactive, toRefs, computed} from 'vue';

function plusCalculator() {
  let state = reactive({
    num1: 0,
    num2: 0,
    result: computed(() => parseInt(state.num1) + parseInt(state.num2))
  });
  return toRefs(state);
}

export default {
        name:'calculator',
        setup() {
          let {num1, num2, result} =plusCalculator(); //외부 function
          return {
            num1, num2, result
          }
        },
}
</script>