<template>
  <div>
    <h3> Upload a post </h3>
    <form @submit="handleSubmit">
      <label>title</label>
      <input 
          type='text'
          name="title"
          :value="title"
          placeholder="title"
          @input="handleChange"
        />
        <label>content</label>
        <input
          type="text"
          name="content"
          :value="content"
          placeholder="content"
          @input="handleChange"
        />

        <label>add a photo </label>
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
      await axios.post(`${BASE_URL}/post/`, post);
    }
  }


}
</script>

<style scoped>

</style>
