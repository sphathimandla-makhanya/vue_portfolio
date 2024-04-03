<template>
  <NavbarComp/>
  <div class="template">
    <!-- <SpinnerComp/> -->
    <router-view/>
  </div>
  <FooterComp/>
</template>

<script>

import NavbarComp from '@/components/NavbarComp.vue'
// import  SpinnerComp from '@/components/SpinnerComp.vue'
import FooterComp from '@/components/FooterComp.vue'

export default {
  components: {
   NavbarComp,
  //  SpinnerComp,
   FooterComp
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

.template{

height: 100%;
/* display: flex;
justify-content: center;
align-items: center; */


/* background: #121212;  */
background: linear-gradient(
  125deg,
  #121212 25%,
  #1a1a1a 25%,
  #1a1a1a 50%,
  #121212 50%,
  #121212 75%,
  #1a1a1a 75%,
  #1a1a1a 100%
);
background-size: auto;

/* Animation */
animation: move 2s linear infinite;
}

@keyframes move {
0% {
  background-position: 0 0;
}
100% {
  background-position: 40px 40px;
}
}
</style>
