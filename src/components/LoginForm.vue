<template>
  <div>
      <form>
          <label>Enter Your code:</label>
          <input type="code" required v-model="code">
          <p>Code : {{ code }} </p>
      </form>
      <TestForm />
  </div>
</template>

<script>
import TestForm from '../components/TestForm.vue'
export default {
    components: { 
    TestForm,
},
    data() {
        return {
            code: ''
        }
    }
    
}
</script>

<style>
form {
    max-width: 420px;
    margin: 30px auto;
    background: white;
    text-align: left;
    padding: 40px;
    border-radius: 10px;
}
label {
    color: #aaa;
    display: inline-block;
    margin: 25px 0 15px;
    font-size: 0.6em;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: bold;
}
input{
    display: block;
    padding: 10px 6px;
    width: 100%;
    box-sizing:border-box;
    border:none;
    border-bottom: 1px solid #ddd;
    color: #555;
}

</style>