<template>
  <div v-if="$store.state.reviews.length>0">
    <div class="test">
      <div class="container">
      <h1 id="reviewHead">Peer Reviews</h1>
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 g-4 ">
        <div v-for="review in $store.state.reviews" :key="review" class="col">
          <div class="move">
            <div class="card m-3">
              <div class="card bg-black">
                <img class="images" :src="review.img" />
                <div class="card__content">
                  <p class="card__title">{{ review.person }}</p>
                  <p class="card__description">{{ review.review }}</p>
                </div>
              </div>
          </div>
          </div>
        </div>
    </div>
  </div><br><br><br>
    </div>
  </div>
  <div v-else>
    <SpinnerComp/>
  </div>
</template>

<script>
import SpinnerComp from '@/components/SpinnerComp.vue';
export default {
  components: {
    SpinnerComp
  },
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

<style scoped>
.move{
  /* margin: auto auto auto auto; */
  justify-content: center;
  align-items: center;
}
.card {
  /* position: relative; */
  margin: auto auto auto auto;
  width: 300px;
  height: 270px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  perspective: 1000px;
  box-shadow: 0 0 0 5px #ffffff80;
  transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

@media screen and (max-width: 992px) {
.card {
  /* position: relative; */
  width: 270px;
  height: 270px;
  justify-content: center;
  align-items: center;
}
.test{
  height: fit-content;
}
}

.images{
  width: 240px;
  height: 195px;
}
.card svg {
  width: 48px;
  fill: #333;
  transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.card:hover {
  /* transform: scale(1.05); */
  box-shadow: 0 8px 16px rgba(255, 255, 255, 0.2);
}

.card__content {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 20px;
  box-sizing: border-box;
  background-color: hsl(0, 44%, 8%);
  /* background-color: grey; */
  transform: rotateX(-90deg);
  transform-origin: bottom;
  transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  font-family: "Nanum Myeongjo", serif;
}

.card:hover .card__content {
  transform: rotateX(0deg);
}

.card__title {
  margin: 0;
  font-size: 24px;
  color:whitesmoke;
  /* font-weight: 700; */
}

.card:hover svg {
  scale: 0;
}

.card__description {
  margin: 8px 0 0;
  font-size: 14px;
  color:white;
  line-height: 1.5;
}
</style>