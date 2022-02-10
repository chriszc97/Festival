<template>
  <nav class='nav'>
    <router-link class='link' to='/home'>Home</router-link>
    <router-link class='link' to='/profile'>Profile</router-link>
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
  }
</style>
