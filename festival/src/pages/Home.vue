<template>
  <div class='home'>
    <Nav />
    <h1>First name: {{user[0].firstName}}</h1>
    <h1>Last name: {{user[0].lastName}}</h1>
    <h1>Email: {{user[0].email}}</h1>

    <UploadPost />
    <PostCard :post='post' :key='post.id' v-for='post in posts' @deletePost="deletePost" @handleSubmit='handleSubmit' />

  </div>
</template>

<script> 
import axios from 'axios'
import PostCard from '../components/PostCard.vue'
import UploadPost from '../components/UploadPost.vue'
const BASE_URL = 'http://localhost:3001/api'
import Nav from '../components/Nav.vue'
export default {
  name: 'Home',
  components: {
    PostCard,
    UploadPost,
    Nav
  },
  data:() =>({
    posts:{},
    user:{}
  }),
  mounted(){
    this.getPosts(),
    this.getUser()

  },
  methods:{
    async getPosts(){
      const result = await axios.get(`${BASE_URL}/post`)
      this.posts = result.data
    },
    async deletePost(id){
      const result = await axios.delete(`${BASE_URL}/post/${id}`)
      console.log(result)
    },
      async handleSubmit(id){
      let post = this.post
      await axios.put(`${BASE_URL}/post/${id}`, post)
    },
     async getUser(){
      const result = await axios.get(`${BASE_URL}/user`)
      this.user = result.data
    }
  }

}
</script>

<style scoped>
.home{
  background-image: url('https://i.imgur.com/UTwZ5RD.jpg');
  background-position: center bottom;
  background-repeat: no-repeat;
  background-size: cover;
}
h1{
  text-decoration: bold;
  color:rgb(158, 28, 175)
}


</style>