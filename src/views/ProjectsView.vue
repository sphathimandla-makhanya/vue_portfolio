<template>
  <div v-if="$store.state.projects.length>0">
    <div class="container">
      <div class="row row-cols-1 row-cols-md-3 g-4">
        <div v-for="project in $store.state.projects" :key="project" class="col">
          <!-- <h1 class="">{{ project.heading }}</h1> -->
          <div class="card ">
            <img :src="project.img" class="card-img-top" alt="">
            <div class="card-body">
              <h5 class="card-title">{{ project.name }}</h5>
              <a :href="project.github" class="btn btn-primary m-1" target="blank"><img :src="project.githubLogo" style="height: 20px; width: 50px;" alt=""></a>
              <a :href="project.vercel" class="btn btn-primary m-1" target="blank"><img :src="project.vercelLogo" style="height: 20px; width: 50px;" alt=""></a>
            </div>
          </div>
        </div>
    </div>
    </div><hr><br>
  </div>
    <div v-else class="text-align-center">
      <SpinnerComp/>
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

<!-- <style scoped>
  img{
    height: 250px;
    width: 350px;
  }
</style> -->