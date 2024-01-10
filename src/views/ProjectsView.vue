<template>
  <h1>Projects</h1>
  <div class="container">
    <div class="row row-cols-1 row-cols-md-3 g-4">
      <div v-for="project in $store.state.projects" :key="project" class="col">
        <div class="card">
          <img :src="project.img" class="card-img-top" alt="">
          <div class="card-body">
            <h5 class="card-title">{{ project.name }}</h5>
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
    projectsData(){
      this.$store.dispatch('projectsData')
    }
  },
  mounted(){
    this.projectsData
  }
}
</script>

<style>

</style>