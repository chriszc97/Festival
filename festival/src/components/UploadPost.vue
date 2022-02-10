<template>
  <div>
    <h3> Upload a post </h3>
    <form>
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
export default{
  name: 'UploadPost',

  data: () =>({
    post: {
      title: ' ',
      content: ' ',
      img: ' '
    }
  }),
  methods:{
      handleChange(e) {
      this.post[e.target.name] = e.target.value;
  }
  }
}
</script>

<style scoped>

</style>
