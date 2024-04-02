<template>
  <div class="proj">
    <h1>Projects</h1>
    <div v-if="$store.state.projects.length>0">
    <div class="container">
      <div class="row row-cols-1 row-cols-md-3 g-4">
        <div v-for="project in $store.state.projects" :key="project" class="col">
          <div class="card bg-dark">
            <img :src="project.img" class="card-img-top" alt="">
            <div class="card-body">
              <h5 class="card-title">{{ project.name }}</h5>
              <h5 class="card-title">{{ project.description }}</h5>
              <a :href="project.github" target="blank"><img id="icons-img" :src="project.githubLogo" alt=""></a>
              <a :href="project.vercel" target="blank"><img id="icons-img" :src="project.vercelLogo" alt=""></a>
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
.proj{
  background-color: cadetblue;
}
h1{
  font-weight: 600;
  color:black;
}

.card-body{
  color:aliceblue;
  font-family: 'Playfair', serif;
}

#icons-img{
  height: 20px;
  width: 30px;
  border-radius: 30%;
  margin: 2px;
}
#icons-img:hover{
  background-color: blue;
  border-radius: 30%;
  box-shadow: 0 4px 8px 0 rgba(255, 255, 255, 0.2), 0 6px 20px 0 rgba(18, 3, 103, 0.19);
}

@media screen and (max-width: 300px) {
  .card{
  width: 270px;
}
}

</style>