<template>
  <div>
    <p> {{ message }} </p>
    <!--  <button v-on:click="showAlert"></button>-->
    <button @click="showAlert">얼럿띄우기</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: 'hi'
    }
  },
  methods: {
    showAlert() {
      alert(this.message)
    }
  },
}
</script>

<style scoped>

</style>