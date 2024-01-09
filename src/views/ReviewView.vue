<template>
  <h1>Reviews</h1>
  <div class="container">
    <div class="row row-cols-1 row-cols-md-3 g-4">
      <div v-for="review in $store.state.reviews" :key="review" class="col">
        <div class="card">
          <img src="" class="card-img-top" alt="">
          <div class="card-body">
            <h5 class="card-title">{{ review.person }}</h5>
            <p class="card-text">{{ review.review }}</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
  </div>
  </div>
</template>

<script>
export default {
computed: {
  reviewsData(){
    this.$store.dispatch('reviewsData')
  }
},
mounted(){
  this.reviewsData
}
}
</script>

<style>

</style>