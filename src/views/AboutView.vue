<template>
  <div class="about">
    <div class="container" id="container-about">
        <h1>{{ $store.state.about.heading }}</h1>
        <div class="container mt-5" id="brief">
          <p>I possess a diverse skill set as both an aspiring web developer and in Geographic Information Systems (GIS). Completed a rigorous six-month web development bootcamp, mastering modern technologies to design and develop user-friendly and interactive web applications. Additionally, I have two years of hands-on experience in GIS, with expertise in the full data life cycle. Proficient in database  management. Ready to leverage this unique combination of skills to drive innovation in any project or team.</p>
        </div>
        <div class="card-container mt-5">
          <div class="card mb-3 border-white" style="max-width: 559px; height:250px;">
            <div class="row g-0">
              <div class="col-md-4">
                <img src="../assets/B&W.jpg" class="img-fluid rounded-start" alt="...">
                <h5 class="card-title text-decoration-underline">Details</h5>
                <p class="pt-group-item ">Gender: Male</p>
              </div>
              <div class="col-md-8">
                <div class="card-body text-wrap mb-5">
                  <p class="list-group-item ">Address: Langa, Cape Town</p>
                  <p class="list-group-item ">Nationality: African</p>
                  <p class="list-group-item ">Languages: English, IsiZulu and IsiXhosa</p>
                  <p class="list-group-item list-group-item-dark">Driver's license: C1/10</p>
                  <p class="list-group-item list-group-item-dark">Date of Birth: 08/10/97</p>
                  <p class="list-group-item list-group-item-dark">Strong communication and interpersonal skills</p>
                  <p class="list-group-item ">MS Office (Excel, Power point, Word, Outlook, Visio)</p> 
                </div>
              </div>
              <div>
                <a href="https://github.com/sphathimandla-makhanya" target="blank"><img src="https://i.ibb.co/FYRncsr/github-2.png" alt=""></a>
                <a href="https://www.linkedin.com/in/s-phathimandla-makhanya-0b80391aa/" target="blank"><img src="https://i.ibb.co/Z26L16V/linkedin.png" alt=""></a>
              </div>
              <div>
                <a class="animated-btn" target="blank" href="https://drive.google.com/file/d/1hKaEkU3c-TFMwkhCraXWhCCGDJY2-jF-/view?usp=sharing" download>Download CV</a>
              </div>
            </div>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    fetchData(){
      this.$store.dispatch('fetchData')
    }
  },
  mounted(){
    this.fetchData
  }
}
</script>

<style scoped>
p{
  margin: 0;
}
.card{
  background: transparent;
}
.about{
  background-color: transparent;
  height: 100vh;
}

#container-about{
  font-family: "Nanum Myeongjo", serif;
  color: whitesmoke;
  color: white;
  font-size: 105%;
  justify-content: center;
  align-items: center;
}

.card-container {
  display: flex;
  justify-content: center;
}

.list-group-item{
  background: transparent;
  color: white;
  margin: 0;
}

/* Slide in animation */
@keyframes slideInFromBottom {
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0);
  }
}

.card {
  animation: slideInFromBottom 3s ease forwards;
}

@keyframes zoomIn {
  from {
    transform: scale(0);
  }
  to {
    transform: scale(1);
  }
}

#brief {
  animation: zoomIn 3s ease forwards;
  max-width: 70%; 
  margin: auto; 
}

/* media queries */
@media screen and (max-width:992px) {
  .about{
  background-color: transparent;
  height: 125vh;
}
img{
  margin-bottom: 10px;
}
}
@media screen and (max-width:768px) {
  .about{
  background-color: transparent;
  height: 220vh;
}
img{
  margin-bottom: 10px;

}
}



</style>
