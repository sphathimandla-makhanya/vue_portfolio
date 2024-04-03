<template>
  <div class="proj">
    <h1>Projects</h1>
    <div v-if="$store.state.projects.length>0">
    <div class="container">
      <div class="row row-cols-1 row-cols-md-3 g-4">
        <div v-for="project in $store.state.projects" :key="project" class="col">
          <div class="card">
            <div class="card2">
              <img :src="project.img" class="card-img-top" alt="">
              <div class="card-body">
                <h5 class="card-title">{{ project.name }}</h5>
                <h6 class="card-title">{{ project.description }}</h6>
                <a :href="project.github" target="blank"><img id="icons-img" :src="project.githubLogo" alt=""></a>
                <a :href="project.vercel" target="blank"><img id="icons-img" :src="project.vercelLogo" alt=""></a>
              </div>
            </div>
          </div>
        </div>
    </div>
    </div><hr><br>
  </div>
    <div v-else class="text-align-center">
      <SpinnerComp/>
    </div>
  </div>
</template>

<script>
import  SpinnerComp from '@/components/SpinnerComp.vue'
export default {
  components:{
    SpinnerComp
  },
  computed: {
    projectsData(){
      this.$store.dispatch('projectsData')
    }
  },
  mounted(){
    this.projectsData
  },
  
}
</script>

<style scoped>
/* .proj{
  background-color: cadetblue;
} */

h1{
  font-weight: 600;
  color: whitesmoke;
}

.card-body{
  color: whitesmoke;
  font-family: 'Playfair', serif;
}

#icons-img{
  height: 20px;
  width: 30px;
  border-radius: 20px;
  margin: 2px;
}

#icons-img:hover{
  background-color: blue;
  border-radius: 30px;
  box-shadow: 0 4px 8px 0 rgba(255, 255, 255, 0.2), 0 6px 20px 0 rgba(18, 3, 103, 0.19);
}

@media screen and (max-width: 300px) {
  .card{
  width: 270px;
}
}

.card {
 background-image: linear-gradient(163deg, #00ff75 0%, #3700ff 100%);
 border-radius: 10px;
 transition: all 0.3s;
}

.card2 {
 background-color: #1a1a1a;
 border-radius:10px;
 transition: all 0.2s;
}

.card2:hover {
 transform: scale(0.97);
 border-radius: 10px;
}

.card:hover {
 box-shadow: 0px 0px 30px 1px rgba(0, 255, 117, 0.30);
}

</style>