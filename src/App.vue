<template>
  <TestForm />
</template>

<script>
import TestForm from './components/TestForm.vue'
export default {
  name: 'App',
  components: { 
    TestForm
  }
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
body{
  margin: 0;
  background: #f4f1de;
}
</style>
