<template>
  <div>
    <h1>Home Page</h1>
    <PostCard :post='post' :key='post.id' v-for='post in posts' />

  </div>
</template>

<script> 
import axios from 'axios'
import PostCard from '../components/PostCard.vue'
const BASE_URL = 'http://localhost:3001/api'

export default {
  name: 'Home',
  components: {
    PostCard
  },
  data:() =>({
    posts:{}

  }),
  mounted(){
    this.getPosts()

  },
  methods:{
    async getPosts(){
      const result = await axios.get(`${BASE_URL}/post`)
      this.posts = result.data
    }

  }

}
</script>

<style scoped>

</style>