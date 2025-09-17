<template>
  <!-- event.preventDefault 대신 vue 에서 제공해주는 기능 -->
  <!-- 디렉티브의 이벤트 모디파이어 -->
  <!-- 이벤트에 대한 동작을 제어 -->
  <form action="" @submit.prevent="submitForm">
    <div>
      <label for="userId">ID:</label>
      <input id="userId" type="text" v-model="username">
    </div>
    <div>
      <label for="password">PW:</label>
      <input id="password" type="password" v-model="password">
    </div>
    <button type="submit">로그인</button>
  </form>
</template>

<script>
import axios from 'axios';
import {ref} from "vue";

export default {
  setup() {
    var username = ref('');
    var password = ref('');

    var submitForm = () => {
      axios.post('https://jsonplaceholder.typicode.com/users', {
        username: username.value,
        password: password.value
      }).then(response => {
        console.log(response)
      })
    }

    return {
      username,
      password,
      submitForm
    }
  }
  // data() {
  //   return {
  //     username: '',
  //     password: ''
  //   }
  // },
  // methods: {
  //   submitForm(/*event*/) {
  //     // form 기본 기능인 submit 되었을때 새로고침 방지
  //     // event.preventDefault();
  //     console.log('submitted')
  //     console.log(`username: ${this.username}`)
  //     console.log(`password: ${this.password}`)
  //
  //     // https://jsonplaceholder.typicode.com/
  //     const data = {
  //       username: this.username,
  //       password: this.password
  //     };
  //     axios.post('https://jsonplaceholder.typicode.com/users', data).then(response => {
  //       console.log(response)
  //     })
  //   }
  // }
}
</script>

<style scoped>

</style>