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

<style scoped>
Button{
  margin-top: 50px;
  font-size: 16px;
  color:cornflowerblue;
  background-color: rgb(234, 255, 245);
  display: inline-block;
  border-radius: 1.4vh;
}
</style>

