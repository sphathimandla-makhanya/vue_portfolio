<template>
  <div class="sticky-top">
  <nav class="navbar navbar-expand-lg bg-body-tertiary nav ">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">SM</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav fs-5">
        <li class="nav-item">
          <router-link to="/home" class="nav-link" href="home">Home</router-link>
           
        </li>
        <li class="nav-item">
          <router-link to="/about" class="nav-link" href="about">About</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/resume" class="nav-link" href="resume">Resume</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/projects" class="nav-link" href="projects">Projects</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/review" class="nav-link" href="review">Reviews</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/contact" class="nav-link" href="contact">Contacts</router-link>
        </li>
      </ul>
    </div>
  </div>
</nav>
</div>
</template>

<script>
export default {

}
</script>

<style scoped>
.nav{
  background-color: rgb(109, 109, 109);
}
.nav-link{
  color: aliceblue;
  font-family: 'Playfair', serif;
}

</style>