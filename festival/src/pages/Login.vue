<template>
  <div> 
    <h1> PLease login </h1>
    <form @submit="onSubmit">
      <label>Email</label>
        <input
        type='text'
        name='email'
        :value='email'
        placeholder='email'
        @input='handleChange'
        />
      <label>Password</label>
        <input 
        type='text'
        name='password'
        :value="password"
        placeholder="password"
        @input='handleChange'
        />
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
  methods: {
    handleChange(e){
      this.user[e.target.name] = e.target.value;
    },
    async onSubmit(e){
      e.preventDefault()
      const res = await axios.post(`${BASE_URL}/auth/login`)
      this.user = res.data

      //call a get user by id and have userId in params
      //that way in profile i can get user by id to that param


    }
  }

}
</script>
