<template>
  <div> 
    <h1> Please login </h1>
    <form @submit="onSubmit">
      <label>Email</label>
        <input
        type='text'
        name='email'
        :value='email'
        placeholder='email'
        @input='handleChange'
        />
        <br />
      <label>Password</label>
        <input 
        type='text'
        name='password'
        :value="password"
        placeholder="password"
        @input='handleChange'
        />
        <br />
        <Button>Log In </Button>
    </form>


  </div>
</template>
<script>
import axios from 'axios'
const BASE_URL= 'http://localhost:3001/api'


export default {
  name: 'Login',

  data:() =>({
    user: {
      email: '',
      password: ''
    }
  }),
  props: {
    theUser: Object
  },
  methods: {
    handleChange(e){
      this.user[e.target.name] = e.target.value;
    },
    async onSubmit(e){
      e.preventDefault()
      let logger = this.user
      const res = await axios.post(`${BASE_URL}/auth/login`,logger)
      this.theUser = res.data
      this.$router.push(`/profile`)
    }
  }

}
</script>

<style scoped>
div{
  background-color:aqua;
  margin-bottom: 0;

}
label{
  font-size: 30px;
  padding: 20px;
  
  
}


</style>