<template>
  <div class="center">
    <div class="bar">
       <h2>Test Platform</h2>
    </div>
      <form class="box">
          <h1>Login</h1>
          <input type="text" required v-model="info.code" placeholder="code" onfocus="this.placeholder = ''" onblur="this.placeholder = 'code'" />
          <input type="text" required v-model="info.name" placeholder="name and surname" onfocus="this.placeholder = ''" onblur="this.placeholder = 'name and surname'" />
          <input type="text" required v-model="info.index" placeholder="index" onfocus="this.placeholder = ''" onblur="this.placeholder = 'index'" />
          <input type="submit" @click.stop.prevent="submit()" value="submit">
      </form>
  </div>

</template>

<script>
export default {
    data() {
        return {
            info: {
            code: '',
            index: '',
            name: ''
            }
        }
    },
    methods:{
        submit: function(){
        setTimeout(() => {this.submitForm(); }, 500)
        
      },
      submitForm: function(){
          this.$router.push({name: 'Test', params: {info: this.info}})
      }

    }
    
}
</script>

<style>
h2{
    font-family: sans-serif;
    font-weight: 500;
    margin: 40px;
}
.box{
    font-family: sans-serif;
    width: 350px;
    padding: 40px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    background: #9fbbaf;
        border-radius: 24px;

}
.box h1{
    color: #F4F1DE;
    text-transform: uppercase;
    font-weight: 500;
    margin-bottom: 40px;
}
.box input[type = "text"]{
    font-size: 16px;
    border: 0;
    background: none;
    display: block;
    margin: 20px auto;
    text-align: center;
    border: 2px solid #F4F1DE;
    padding: 14px 10px;
    width: 200px;
    outline: none;
    color: #F4F1DE;
    border-radius: 24px;
    transition: 0.25s;
}
.box input[type = "text"]:focus{
    width: 240px;
    border-color: #3D405B;
}
.box input[type = "submit"]{
    margin-top: 200px;
    background-color: #F4F1DE;
    border: 0;
    display: block;
    margin: 20px auto;
    margin-top: 40px;
    text-align: center;
    border: 2px solid #F4F1DE;
    padding: 14px 40px;
    outline: none;
    color: #9fbbaf;
    border-radius: 24px;
    transition: 0.25s;
}
.box input[type = "submit"]:focus{
    width: 220px;
    background-color: #3D405B;
}
</style>