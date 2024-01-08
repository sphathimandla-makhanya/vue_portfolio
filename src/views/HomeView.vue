<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <p>Testing</p>
  </div>
</template>

<script>
// @ is an alias to /src
import NavbarComp from '@/components/NavbarComp.vue'

export default {
  name: 'HomeView',
  components: {
   NavbarComp
  }
}
</script>
