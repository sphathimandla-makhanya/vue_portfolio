<template>
  <h1>Reviews</h1>
  <div class="container">
    <!-- <div class="row row-cols-1 row-cols-md-3 g-4">
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
  </div> -->
</div>
<div class="container">
<div class="row">
  <div v-for="review in $store.state.reviews" :key="review" class="col">
  <div class="col">{{ review.review }}</div>
  <!-- <div class="col-sm-4">col-sm-4</div> -->
  </div>
</div>
<div class="row">
  <div class="col-sm">col-sm</div>
  <div class="col-sm">col-sm</div>
  <div class="col-sm">col-sm</div>
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