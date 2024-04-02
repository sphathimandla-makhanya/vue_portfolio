<template>
  <div v-if="$store.state.resume.length>0">
    <div class="resume">
      <h1>Resume</h1>
      <div id="font" class="container d-md-flex d-sm-block align-items-center">
            <div v-for="resum in $store.state.resume" :key="resum" >
              <div class="row">
                <div class="col-sm-12">
                <h3 id="edu">{{ resum.heading }}</h3>
              <p>{{ resum.description }}</p> 
              <p>{{ resum.currently }}</p>
              <img :src="resum.img1" alt="">
                </div>
              <div class="col-sm-12">
                <h3>{{ resum.heading1 }}</h3>
                <img :src="resum.img2" alt="">
                <p>{{ resum.description1 }}</p> 
              </div>
              </div>
           </div>
    </div>
      <hr><br>
    
      <div class="container d-flex">
        <div class="row row-cols-1 row-cols-md-4 g-3 justify-content-center align-items-center">
        <div v-for="skill in $store.state.skills" :key="skill" >
            <div class="col-12">
          <div id="card" class="card">
            <img :src="skill.img" class="card-img-top" alt="">
            <div class="card-body">
              <h5 class="card-title">{{ skill.name }}</h5>
              <!-- <p>{{ skill.description }}</p> -->
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
  background-color: #3d5861;
  font-family: 'Playfair', serif;
  color: #101011;
  font-size:105%;
}
h1{
  font-weight: 600;
}
h3{
  /* font-family: 'Rye', serif; */
  font-family: 'Playfair', serif;
}
#card{
  margin-left:10%;
  margin-right:10%;
  /* opacity:0.2; */
  background-color: cadetblue;
  /* background-color: rgb(0, 255, 242); */
  transition: 0.5s ease in out;
}
#card:hover{
  opacity:1;
  box-shadow: 10px 4px 4px 10px rgba( 0, 0, 0.2);
  transition: opacity 0.8s;
  transform: scale(1.05s);
}
</style>