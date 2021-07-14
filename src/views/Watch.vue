<template>
  <div>
    <h1>Full Name : {{ fullName }}</h1>
    <button type="button" @click="changeName">변경</button>
  </div>
</template>
<script>
export default {
  name: '',
  components: {},
  data() {
    return {
      firstName: 'Seungwon',
      lastName: 'Go',
      fullName: ''
    };
  },
  watch: {
    firstName() {
      return this.fullName = `${this.firstName} ${this.lastName}`
    },
    lastName() {
      return this.fullName = `${this.firstName} ${this.lastName}`
    }
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
  methods: {
    changeName() {
      this.firstName = 'Eunsol'
    }
  }
}
</script>