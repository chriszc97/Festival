<template>
  <div class="container">
    <div class="post" >   
      <h2>{{post.title}} </h2> 
      <p>{{post.content}} </p>
      <img :src='post.img' alt="" />
      <h4>Likes: {{post.likes}}</h4>
      <Button
      @click="toggle"
      >Update</Button>
      <Button
      @click="deletePost(post.id)"
      >Delete</Button>
      <label v-if='update'>
      <UpdatePost :post='post' @handleSubmit='handleSubmit' />
      </label>
    </div>
  </div>
</template>

<script> 
import axios from 'axios'
const BASE_URL= 'http://localhost:3001/api'
import UpdatePost from './UpdatePost.vue'

export default {
  name: 'PostCard',
  props: ['post'],
  components: {
    UpdatePost
  },
  data: () =>({
    update: false
  }),
  
  methods: {
    deletePost(id){
      this.$emit('deletePost', id)
      },
      async handleSubmit(id){
      let post = this.post
      await axios.put(`${BASE_URL}/post/${id}`, post)
    },
    toggle(e){
      e.preventDefault()
      if(this.update === false){
        this.update =true
      }
      else{
        this.update = false
      }

    }
    }
  }

</script>


<style >
h2{
  margin: 10px;
  font-size: 30px;
  padding: 0;
  color: rgb(1, 10, 9);
}
.post{
  background-color: aquamarine;
  max-width: 400px;
  max-height: 480px;
  justify-content: center;

}


img{
  max-width: 400px;
  max-height: 480px;
}
.container{
  /* text-align: center; */
  /* display: grid; */
  column-gap: 30px;
  gap: 20px 20px;
  justify-self: center;
  margin-left: 68vh
}



</style>




