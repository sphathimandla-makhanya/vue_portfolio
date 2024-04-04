<template>
    <div class="container-fluid">
     <div class = "container">
  <h1>S'phathimandla Makhanya</h1>
  <h1>Fullstack web developer</h1>
  <div class="media">
    <a href="https://github.com/sphathimandla-makhanya" target="blank"><img src="https://i.ibb.co/jZPNNZn/img-icons8.png" alt=""></a>
    <a href="https://www.linkedin.com/in/s-phathimandla-makhanya-0b80391aa/" target="blank"><img src="https://i.ibb.co/KmB7tDr/img-icons8.png" alt=""></a>
  </div>
</div>
    </div>
</template>

<script>


export default {
  methods: {
    downloadResume() {
      const resumePath = '../assets/SM_CV.pdf';
      window.open(resumePath, '_blank');
    }
  }
}
</script>

<style scoped>

body{
  background: #FBD4C5;
}

.container{
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  margin-top: 13.5%;
  background-image: url('https://i.ibb.co/ZWZGh0m/B-W-removebg-preview.png');
  background-repeat: no-repeat;
  background-size: center;
  background-position-x: left;
  height: 80vh;
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
  color: #355c7d;
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
a img:hover{
  width: 30px;
  margin: 3px;
  border-radius: 3px;
  background-color: rgb(51, 144, 28);
  border-color: blue;
}
a img{
  height: 25px;
  width: 25px;
  margin: 3px;
  border-radius: 3px;
}

/* Background */
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




/* media icons */
.media{
  margin-top: 5%;
}



/* media queries 576px */
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
  color: #355c7d;
  font-family: 'Fira Code', monospace;
  font-weight: 800;
  font-size: 20px;
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
