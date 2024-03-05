<template>
  <div v-if="$store.state.resume.length>0">
    <div class="resume">
      <h1>Resume</h1>
      <div class="container">
        <div class="row-col">
            <div v-for="resum in $store.state.resume" :key="resum" >
              <div class="row">
                <div class="col-sm-12 col-md-6">
                <h3>{{ resum.heading }}</h3>
              <p>{{ resum.description }}</p> 
              <p>{{ resum.currently }}</p>
              <img :src="resum.img1" alt="">
              </div>
              <div class="col">
                <h3>{{ resum.heading1 }}</h3>
                <p>{{ resum.description1 }}</p> 
                <img :src="resum.img2" alt="">
              </div>
              </div>
            </div>
      </div>
    </div>
      <hr><br>
    
      <div class="container d-flex">
        <div class="row row-cols-1 row-cols-md-4 g-3">
        <div v-for="skill in $store.state.skills" :key="skill" >
            <div class="col-12">
          <div id="card" class="card h-100">
            <img :src="skill.img" class="card-img-top" alt="">
            <div class="card-body">
              <h5 class="card-title">{{ skill.name }}</h5>
              <p>{{ skill.description }}</p>
            </div>
          </div>
        </div>
          </div>
        </div>
      </div><hr>
      <br>
    </div>
  </div>
  <div v-else>
    <SpinnerComp/>
  </div>
</template>

<script>
import SpinnerComp from '@/components/SpinnerComp.vue'
export default {
  components:{
    SpinnerComp
  },
computed: {
  resumeData(){
    this.$store.dispatch('resumeData')
  },
  skillsData(){
    this.$store.dispatch('skillsData')
  },
},
mounted(){
  this.resumeData
  this.skillsData
}
}
</script>

<style scoped>
.resume{
  background-color: cadetblue;
}
h3{
  font-family: 'Rye', serif;
}
#card{
  background-color: rgb(0, 255, 242);
  box-shadow: 0 4px 8px 0 rgba( 0, 0, 0.2), 0 10px 30px 0 rgba(0, 0, 0, 0.19);
}

@media screen and (max-width: 300px) {
  #card{
  width: 270px;
}
}
</style>