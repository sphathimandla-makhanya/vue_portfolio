<template>
    <div class="container-fluid">
     <div class = "container">
  <h1>S'phathimandla Makhanya</h1>
  <h1>Aspiring Web Developer</h1>
  <div class="media">
    <a href="https://github.com/sphathimandla-makhanya" target="blank"><img src="https://i.ibb.co/FYRncsr/github-2.png" alt=""></a>
    <a href="https://www.linkedin.com/in/s-phathimandla-makhanya-0b80391aa/" target="blank"><img src="https://i.ibb.co/Z26L16V/linkedin.png" alt=""></a>
  </div>
</div>
    </div>
</template>

<script>
export default {
}
</script>

<style scoped>

body{
  background: #FBD4C5;
}

.container{
  width: 100%;
  text-align: center;
  margin-top: 10.5%;
  background-image: url('https://i.ibb.co/ZWZGh0m/B-W-removebg-preview.png');
  background-repeat: no-repeat;
  background-size: center;
  background-position: left;
  height: 100vh;
}


.container h1:nth-child(1) {
  opacity: 0;
  /* font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; */
  font-family: 'Playfair', serif;
  margin: auto 20% auto auto;
  background: linear-gradient(to right,white, grey, white);
  font-weight: 400;
  font-size: 100px;  
  width: 680px;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  overflow: hidden;
  animation: shring-animation 2.2s steps(40,end) 2s forwards, blink 0.5s step-end infinite alternate;
}

.container h1:nth-child(2) {
  color: #387ADF;
  font-family: 'Fira Code', monospace;
  font-weight: 800;
  font-size: 20px;
  margin: auto auto auto auto;
  text-align: left;
  white-space: nowrap;
  overflow: hidden;
  width: 250px;
  animation: type 2s steps(40,end) forwards;
}
@keyframes shring-animation {
  0% {
    background-position: 0 0;
    opacity: 0;
    width: 0;
  }
  1% {
    background-position: 0 0;
    opacity: 1;

  }
  50% {
    background-position: 150px 0;
    opacity: 1;
  }
  100% {
    background-position: 400px 0;
    opacity: 1;
  }
}

@keyframes type {
  0% {
    width: 0;
  }
  1%, 99%{
    border-right: 1px solid orange;
  }
  100%{
    border-right: none;
  }
}

@keyframes blink {
  50% {
    border-color: transparent;
  }
}


/* media icons */
.media{
  margin-top: 2%;
}

.container-fluid {
  
}

/* media icons */
.media{
  margin-top: 5%;
}

/* media queries 768px */
@media screen and (max-width: 768px) {
.container h1:nth-child(1) {
  opacity: 0;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  /* font-family: 'Playfair', serif; */
  margin: 23% auto auto auto;
  background: linear-gradient(to right,white, grey, white);
  font-weight: 800;
  font-size: 32.5px  ;
  width: 250px;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  overflow: hidden;
  animation: shring-animation 2.2s steps(40,end) 2s forwards, blink 0.5s step-end infinite alternate;
}

.container h1:nth-child(2) {
  color: #387ADF;
  font-family: 'Fira Code', monospace;
  font-weight: 800;
  font-size: 19px;
  margin: auto auto auto auto;
  text-align: left;
  white-space: nowrap;
  overflow: hidden;
  width: 252px;
  animation: type 2s steps(40,end) forwards;
}

/* media icons */
.media{
  margin-top: 5%;
}
}

</style>
