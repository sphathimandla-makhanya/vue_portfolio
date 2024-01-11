<template>
    <div class="container-fluid">
      <div class='typing'>
        <span>Welcome</span>
        <span>to</span>
        <span></span>
        <span>of</span>
        <span>S'phathimandla</span>
       </div>
    </div>
</template>

<script>


export default {
  }
</script>

<style scoped>
@keyframes jump {  
  25% {
    transform: translateY(0);
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

.typing span{
  color: aliceblue;
  font-size: xx-large;
  font-family: "Rye", serif;
}

.typing span {
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

  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  
  /* background: #121212;  */
  background: linear-gradient(
    125deg,
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
