<template>
  <div class="template">
    <NavbarComp/>
    <!-- <SpinnerComp/> -->
    <router-view/>
    <FooterComp/>
  </div>
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
  position: relative;
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
height: 100%;


/* Animation */
animation: move 40s linear infinite;
}

@keyframes move {
0% {
  background-position: 0 0;
}
100% {
  background-position: 800px 800px;
}
}


/* fonts */
h1{
  font-family: 'Playfair', serif;
  font-weight: 600;
  color: whitesmoke;
}

a img{
  height: 30px;
  width: 30px;
  margin: 3px;
  margin-bottom: 5px;
  border-radius: 3px;
}
</style>
