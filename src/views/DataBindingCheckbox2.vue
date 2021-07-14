<template>
  <div>
    <label><input type="checkbox" value="서울" v-model="checked" true-value="yes" false-value="no"/>서울</label>
    <label><input type="checkbox" value="부산" v-model="checked" true-value="yes" false-value="no"/>부산</label>
    <label><input type="checkbox" value="제주" v-model="checked" true-value="yes" false-value="no"/>제주</label>
    <br/>
    <span>체크 한 지역: {{checked}}</span>
  </div>
</template>
<script>
export default {
        name:'',
        components: {},
        data() {
            return {
              checked: []
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