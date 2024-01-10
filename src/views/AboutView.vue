<template>
  <div class="container">
    <h1>About</h1>
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
