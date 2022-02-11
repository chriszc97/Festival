<template>
  <div>
    <h4> Go ahead and Update the post</h4>
      <form >
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
        <Button
        @click="handleSubmit(post.id)"
        >Update</Button>
      </form>
  </div>
</template>

<script>
// import axios from 'axios'
// const BASE_URL= 'http://localhost:3001/api'

export default{
  name: 'UpdatePost',

  props: ['post'],

  data: () =>({
    uPost:{}
  }),
  methods:{
    handleChange(e){
      e.preventDefault()
      this.post[e.target.name] = e.target.value;
    },
    async handleSubmit(id){
      this.$emit('handleSubmit',id)
    }
  }
}

</script>

