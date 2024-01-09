<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p>{{ $store.state.about.description}}</p>
  </div>
</template>
<script>
export default {
computed: {
  fetchData(){
    this.$store.dispatch('fetchData')
  }
},
mounted(){
  this.fetchData
}
}
</script>
