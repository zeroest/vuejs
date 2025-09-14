<template>
<!--  <AppHeader v-bind:appTitle="headerMessage" v-on:change="changeTitle"></AppHeader>-->
  <AppHeader :appTitle="headerMessage" @change="changeTitle"></AppHeader>
  <MyComponent></MyComponent>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import MyComponent from './components/MyComponent.vue'
import AppHeader from "./components/AppHeader.vue";

export default {
  name: 'App',
  components: {
    HelloWorld,
    MyComponent,
    AppHeader
  },
  data() {
    return {
      headerMessage: '앱헤더 컴포넌트'
    }
  },
  methods: {
    changeTitle() {
      this.headerMessage = '변경된 앱헤더 컴포넌트'
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
