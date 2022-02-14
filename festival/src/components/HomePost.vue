<template>
  <div class="container">
    <div class="post" >   
      <h2>{{post.title}} </h2> 
      <p>{{post.content}} </p>
      <img :src='post.img' alt="" />
      <h4>Likes: {{post.likes}}</h4>
      <!-- <h4 :comment='comment' :key='comment.id' v-for='comment in post'>Comments: {{post.Comments.body}}</h4> -->
    </div>
  </div>
</template>

<script> 


export default {
  name: 'HomePost',
  props: ['post'],
  components: {
  }

}
  </script>

  <style scoped>
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
  max-width: 400px;
  max-height: 480px;
  /* margin: auto; */
  /* border-bottom: 1px solid rgba(255, 255, 255, 0.2); */
  padding:  0;
}
.container{
  text-align: center;
  
}

  </style>
  