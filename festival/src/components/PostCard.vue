<template>
  <div>
    <div class="post" >   
      <h2>{{post.title}} </h2> 
      <p>{{post.content}} </p>
      <img :src='post.img' alt="" />
      <h4>Likes: {{post.likes}}</h4>
    </div>
  </div>
</template>

<script> 
export default {
  name: 'PostCard',
  props: ['post'],
}
</script>


<style >
h2{
  margin: 10px;
  font-size: 30px;
  padding: 0;
  color: rgb(1, 10, 9);
}


img{
  /* max-width: 400px;
  max-height: 480px; */
  margin: auto;
  /* border-bottom: 1px solid rgba(255, 255, 255, 0.2); */
  padding:  0;
}

</style>




