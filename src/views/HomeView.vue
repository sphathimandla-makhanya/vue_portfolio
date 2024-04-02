<template>
    <div class="container-fluid d-flex">
      <div class="row">
        <div class="col">
          <div class='typing zoom-in'>
            <span>S'phathimandla</span>
            <span>Makhanya</span>
          </div>
        </div>
        <div>
          <p>Aspiring Fullstack Web Developer</p>
        </div>
        <div class="col">
          <img  src="https://i.ibb.co/9gH3D1p/Sphathimandla.jpg" alt="">
        </div>
        <div>
          <button @click="downloadResume">Download Resume</button>
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
@media screen and (min-width: 300px){
  img{
  height: 250px;
  width: 270px;
  border-radius: 30%;
}
}
@media screen and (min-width: 500px){
  img{
  height: 400px;
  width: 500px;
  border-radius: 30%;
}
}
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

p{
  font-size: 28px;
  color:whitesmoke;
}

.typing span{
  color: aliceblue;
  font-size: 50px;
  font-weight: 600;
  /* font-family: "Rye", serif; */
  font-family: 'Playfair', serif;
}

@media screen and (min-width: 300px) {
  .typing span{
    font-size: 15px;
  }
  p{
  font-size: 18px;
  color: aquamarine;
}
}
@media screen and (min-width: 500px) {
  .typing span{
    font-size: 35px;
  }
}
@media screen and (min-width: 700px) {
  .typing span{
    font-size: 50px;
  }
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
