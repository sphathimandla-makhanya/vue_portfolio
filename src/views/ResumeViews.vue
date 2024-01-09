<template>
  <h1>Resume</h1>
  <div class="container text-center">
    <div class="row">
      <div class="col">
        <p>{{ $store.state.resume.description1 }}</p> 
        <img :src="$store.state.resume.img1" alt="">
      </div>
    <div class="col">
      <p>{{ $store.state.resume.description1 }}</p> 
    </div>
  </div>
</div>
</template>

<script>
export default {
computed: {
  resumeData(){
    this.$store.dispatch('resumeData')
  }
},
mounted(){
  this.resumeData
}
}
</script>

<style>

</style>