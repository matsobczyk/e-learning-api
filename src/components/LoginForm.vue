<template>
  <div>
      <form class="loginForm">
          <label class="loginLabel">Enter Your code:</label>
          <input type="code" required v-model="code">
          <p>Code : {{ code }} </p>
      </form>
  </div>
</template>

<script>
export default {
    data() {
        return {
            code: ''
        }
    }
    
}
</script>

<style>
.loginForm {
    max-width: 420px;
    margin: 30px auto;
    background: white;
    text-align: left;
    padding: 40px;
    border-radius: 10px;
}
.loginLabel {
    color: #aaa;
    display: inline-block;
    margin: 25px 0 15px;
    font-size: 0.6em;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: bold;
}


</style>