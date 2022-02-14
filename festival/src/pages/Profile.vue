<template>
<div>
  <Nav />
  <h1>Welcome Home {{user[0].firstName}}</h1>
  <HomePost :post='post' :key='post.id' v-for='post in posts'/>  
  </div> 
</template>

<script>
import  axios from 'axios'
const BASE_URL = 'http://localhost:3001/api'
import HomePost from '../components/HomePost.vue'
import Nav from '../components/Nav.vue'


export default{
  name: 'Profile',
  components: {
    HomePost,
    Nav
    
  },
  data: ()=> ({
    user:{},
    posts:{}
  }),
  props: {
    theUser: Object
  },
  mounted(){
    this.getUser(),
    this.myPosts()

  },
  methods:{
    async getUser(){
      const result = await axios.get(`${BASE_URL}/user`)
      this.user = result.data
    },
    async myPosts(){
      const result = await axios.get(`${BASE_URL}/post`)
      this.posts = result.data
    }
  }
}
</script>
<style scoped>

div{
  justify-content: center;
  align-content: center;
  /* display: grid; */
  
}
</style>
