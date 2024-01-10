<template>
  <h1>Resume</h1>
  <div class="container">
    <div class="row-col">
      <div class="col">
        <div v-for="resum in $store.state.resume" :key="resum">
          <p>{{ resum.description }}</p> 
          <img :src="resum.img1" alt="">
          <div class="col">
            <p>{{ resum.description1 }}</p> 
            <img :src="resum.img2" alt="">
          </div>
        </div>
      </div>
  </div>
  <hr>

  <div v-for="resum in $store.state.resume" :key="resum" class="col">
    <div class="row row-cols-1 row-cols-md-4 g-4">
      <div class="col">
    <div class="card h-100">
      <img :src="resum.img" class="card-img-top" alt="">
      <div class="card-body">
        <h5 class="card-title">{{ resum.name }}</h5>
      </div>
    </div>
  </div>
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