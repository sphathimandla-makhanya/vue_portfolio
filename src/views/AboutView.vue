<template>
  <div class="container">
    <h1>{{ $store.state.about.heading }}</h1>
    <p>{{ $store.state.about.description}}</p>
    <img id="image" :src="$store.state.about.img" alt="">
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

<style>
#image{
  height: 250px;
  width: 250px;
}
</style>