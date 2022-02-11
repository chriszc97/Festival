<template>
  <div>
    <div class="post" >   
      <h2>{{post.title}} </h2> 
      <p>{{post.content}} </p>
      <img :src='post.img' alt="" />
      <h4>Likes: {{post.likes}}</h4>
      <Button>Update</Button>
      <Button>Delete</Button>    
    </div>
  </div>
</template>

<script> 
import axios from 'axios'
export default {
  name: 'PostCard',
  props: ['post'],
  methods: {
    async deletePost(){
    
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

}


img{
  /* max-width: 400px;
  max-height: 480px; */
  margin: auto;
  /* border-bottom: 1px solid rgba(255, 255, 255, 0.2); */
  padding:  0;
}

</style>




