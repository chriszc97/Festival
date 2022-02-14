<template>
  <nav class='nav'>
    <router-link class='link' to='/profile'>Home</router-link>
    <router-link class='link' to='/home'>Profile</router-link>
    <router-link class='link' to='/login'>Log Out</router-link>
  </nav>
</template>

<script>
export default{
  name: 'Nav'
}
</script>

<style scoped>
  .nav{
    display: flex;
    font-size:30px;
    justify-content: space-evenly;
    gap: 10px;
    background-color: rgba(199, 201, 108, 0.822)
    

  }
  .link{
    color:rgb(83, 27, 83);
    border: 2px solid rebeccapurple;
    text-decoration: none;
    
  }
</style>
