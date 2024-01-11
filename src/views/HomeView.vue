<template>

    <div class="container-fluid">
      <img alt="Vue logo" src="../assets/logo.png">
      <HelloWorld msg="Welcome to Your Vue.js App"/>
      <p>Testing</p>
    </div>
    <div>
      
     <div class='typing'>
       <span>Welcome</span>
       <span>to</span>
       <span>the</span>
       <span>of</span>
       <span>S'phathimandla</span>
       
      </div>
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

<style scoped>
@keyframes jump {  
  25% {
    transform: translateY(z0);
  }
  
  50% {
    transform: translateY(-0.5em);
  }
  
  75% {
    transform: translateY(50);
  }
}

.typing {
  display: inline-flex;
  height: 1rem;
  width: min-content;
  align-items: flex-end;
}

.typing span {
/*   width: 0.5em;
  height: 0.5em; */
/*   background: #333; */
  border-radius: 50%;
  margin: 0 0.1em;
  animation: jump 3000ms infinite;
}

.typing span:nth-child(2) {
  animation-delay: 250ms;
}

.typing span:nth-child(3) {
  animation-delay: 500ms;
}

.typing span:nth-child(4) {
  animation-delay: 750ms;
}
.container-fluid {
  /* Basic dimensions and centering */
  /* width: 100%; */
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  /* Dark mode colors and gradient */
  background: #121212; /* Fallback for browsers that don't support gradients */
  background: linear-gradient(
    135deg,
    #121212 25%,
    #1a1a1a 25%,
    #1a1a1a 50%,
    #121212 50%,
    #121212 75%,
    #1a1a1a 75%,
    #1a1a1a
  );
  background-size: auto;

  /* Animation */
  animation: move 4s linear infinite;
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
