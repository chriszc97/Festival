<template>
  <div>
    <h3> Upload a Post </h3>
    <form @submit="handleSubmit">
      <label>Title</label>
      <input 
          type='text'
          name="title"
          :value="title"
          placeholder="title"
          @input="handleChange"
        />
        <label>Content</label>
        <input
          type="text"
          name="content"
          :value="content"
          placeholder="content"
          @input="handleChange"
        />
        <label>Add a photo </label>
        <input
          type="text"
          name="img"
          :value="img"
          placeholder="img"
          @input="handleChange"
        />
        <Button> Upload</Button>
    </form>

  </div>
</template>


<script>
import axios from 'axios'
const BASE_URL= 'http://localhost:3001/api'

export default{
  name: 'UploadPost',

  data: () =>({
    post: {
      title: ' ',
      content: ' ',
      img: ' ',
      likes: 0,
      userId: null
    }
  }),
  methods:{
      handleChange(e) {
      this.post[e.target.name] = e.target.value;
  },
  async handleSubmit(e) {
      e.preventDefault();
      let post = this.post
      await axios.post(`${BASE_URL}/post/`, post)
      this.$router.go()

    }
  }
}
</script>

<style scoped>
::placeholder{
  color:rgb(182, 114, 228);
  font-size: 0.8em;
  text-align: center;
}
Button{
  margin-top: 50px;
  font-size: 20px;
  color:rgb(88, 73, 173);
  background-color: rgb(234, 255, 245);
  display: inline-block;
  border-radius: 1.4vh;
}
Button:hover{
    background-color: transparent;
    box-shadow: none;
}
h3{
  font-size: 28px;
  font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif
}
label{
  font-size: 30px;
  padding: 20px;
}

</style>
