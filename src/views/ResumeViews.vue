<template>
  <div v-if="$store.state.resume.length>0">
    <div class="resume">
      <!-- <h1>Education and Experience</h1> -->
      <!-- <div id="font" class="container d-md-flex d-sm-block align-items-center">
            <div v-for="resum in $store.state.resume" :key="resum" >
              <div class="row">
                <div class="col-sm-12">
                <h3 id="edu">{{ resum.heading }}</h3>
              <p>{{ resum.course }}</p> 
              <p>{{ resum.institution }}</p>
              <img :src="resum.img1" alt="">
                </div>
              <div class="col-sm-12">
                <h3>{{ resum.heading1 }}</h3>
                <img :src="resum.img2" alt="">
                <p>{{ resum.description1 }}</p> 
              </div>
              </div>
           </div>
    </div> -->

    <div class="container" id="edu">                      
    <div class="row text-center justify-content-center mb-3">
        <div class="col-xl-6 col-lg-8">
            <h1 class="font-weight-bold">Education</h1>
            <!-- <p class="text-muted">We’re very proud of the path we’ve taken. Explore the history that made us the company we are today.</p> -->
        </div>
    </div>

    <div class="row">
        <div class="col">
            <div class="timeline-steps aos-init aos-animate" data-aos="fade-up">
                <div class="timeline-step">
                    <div class="timeline-content" data-toggle="popover" data-trigger="hover" data-placement="top" title="" data-content="And here's some amazing content. It's very engaging. Right?" data-original-title="2003">
                        <div class="inner-circle"></div>
                        <p class="h6 mt-3 mb-1" id="yr">2024</p>
                        <p class="h6 text mb-0 mb-lg-0">Fullstack Web Development</p>
                        <p class="h6 text mb-0 mb-lg-0">at Life Choices Academy</p>
                    </div>
                </div>
                <div class="timeline-step">
                    <div class="timeline-content" data-toggle="popover" data-trigger="hover" data-placement="top" title="" data-content="And here's some amazing content. It's very engaging. Right?" data-original-title="2004">
                        <div class="inner-circle"></div>
                        <p class="h6 mt-3 mb-1" id="yr">2019</p>
                        <p class="h6 text mb-0 mb-lg-0">Bsc Geography and Hydrology</p>
                        <p class="h6 text mb-0 mb-lg-0">at University of Zululand</p>
                    </div>
                </div>
                <div class="timeline-step">
                    <div class="timeline-content" data-toggle="popover" data-trigger="hover" data-placement="top" title="" data-content="And here's some amazing content. It's very engaging. Right?" data-original-title="2005">
                        <div class="inner-circle"></div>
                        <p class="h6 mt-3 mb-1" id="yr">2015</p>
                        <p class="h6 text mb-0 mb-lg-0">National Senior Certificate</p>
                        <p class="h6 text mb-0 mb-lg-0">at Siphapheme High School</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<hr>
<div class="container" id="exp">                      
    <div class="row text-center justify-content-center mb-3">
        <div class="col-xl-6 col-lg-8">
            <h1 class="font-weight-bold">Experience</h1>
        </div>
    </div>

    <div class="row">
        <div class="col">
            <div class="timeline-steps aos-init aos-animate" data-aos="fade-up">
               <div class="timeline-step">
                    <div class="timeline-content" data-toggle="popover" data-trigger="hover" data-placement="top" title="" data-content="And here's some amazing content. It's very engaging. Right?" data-original-title="2004">
                        <div class="inner-circle"></div>
                        <p class="h6 mt-3 mb-1" id="yr">2024-Present</p>
                        <p class="h6 text mb-0 mb-lg-0">Intern</p>
                        <p class="h6 text mb-0 mb-lg-0">at Life Choices Studio</p>
                    </div>
                </div>  
                <div class="timeline-step">
                    <div class="timeline-content" data-toggle="popover" data-trigger="hover" data-placement="top" title="" data-content="And here's some amazing content. It's very engaging. Right?" data-original-title="2003">
                        <div class="inner-circle"></div>
                        <p class="h6 mt-3 mb-1" id="yr">2021-2023</p>
                        <p class="h6 text mb-0 mb-lg-0">Geographical Information Systems Intern</p>
                        <p class="h6 text mb-0 mb-lg-0">at National Geo-Spatial Information</p>
                        <p class="h6 text mb-0 mb-lg-0">Duties: Capturing, manipulation, analysis of data and research.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
      <hr><br>
      <h1>Skills</h1>
      <div class="container d-flex" id="skills">
        <div class="row row-cols-1 row row-cols-md-2 row-cols-lg-3 g-3 justify-content-center align-items-center">
        <div v-for="skill in $store.state.skills" :key="skill" >
            <div class="col-12">
          <div id="card" class="card">
            <img :src="skill.img" class="card-img-top" id="img-skill" alt="">
            <div class="card-body">
              <h5 class="card-title">{{ skill.name }}</h5>
              <!-- <p>{{ skill.description }}</p> -->
            </div>
          </div>
        </div>
          </div>
        </div>
      </div>
      <br>
    </div>
  </div>
  <div v-else>
    <SpinnerComp/>
  </div>
</template>

<script>
import SpinnerComp from '@/components/SpinnerComp.vue'
export default {
  components:{
    SpinnerComp
  },
computed: {
  resumeData(){
    this.$store.dispatch('resumeData')
  },
  skillsData(){
    this.$store.dispatch('skillsData')
  },
},
mounted(){
  this.resumeData
  this.skillsData
}
}
</script>

<style scoped>
.resume{
  /* background-color: #3d5861; */
  font-family: "Nanum Myeongjo", serif;  color:whitesmoke;
  font-size:105%;
}
h3{
  /* font-family: 'Rye', serif; */
  font-family: 'Playfair', serif;
}
#card{
  /* margin-left:25%; */
  /* margin-right:10%; */
  margin: auto auto auto auto;
  width: 120px;
  height: 15%;
  background-color: #3b82f6;
  transition: 0.5s ease in out;
  justify-content: center;
  align-items: center;
}

/* images */
#img-skill{
  height: 80%;
  width: 80%;
}

.card-title{
  font-size: 100%;
}

#card:hover{
  opacity:1;
  box-shadow: 0 4px 15px 0 rgb(255, 255, 255);
  transition: opacity 0.8s;
  transform: scale(1.05s);
}

/* timeline */
body{margin-top:20px;}
.timeline-steps {
    display: flex;
    justify-content: center;
    flex-wrap: wrap
}

.timeline-steps .timeline-step {
    align-items: center;
    display: flex;
    flex-direction: column;
    position: relative;
    margin: 1rem
}

@media (min-width:768px) {
    .timeline-steps .timeline-step:not(:last-child):after {
        content: "";
        display: block;
        border-top: .25rem dotted #3b82f6;
        width: 3.46rem;
        position: absolute;
        left: 7.5rem;
        top: .3125rem
    }
    .timeline-steps .timeline-step:not(:first-child):before {
        content: "";
        display: block;
        border-top: .25rem dotted #3b82f6;
        width: 3.8125rem;
        position: absolute;
        right: 7.5rem;
        top: .3125rem
    }
}

.timeline-steps .timeline-content {
    width: 10rem;
    text-align: center
}

.timeline-steps .timeline-content .inner-circle {
    border-radius: 1.5rem;
    height: 1rem;
    width: 1rem;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background-color: #3b82f6
}

.timeline-steps .timeline-content .inner-circle:before {
    content: "";
    background-color: #3b82f6;
    display: inline-block;
    height: 3rem;
    width: 3rem;
    min-width: 3rem;
    border-radius: 6.25rem;
    opacity: .5
}

#yr{
  font-weight: bold;
}

/* animation */
@keyframes slideInFromLeft {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
}

#edu {
  animation: slideInFromLeft 1.2s ease forwards;
}
@keyframes slideInFromRight {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
}

#exp {
  animation: slideInFromRight 1.2s ease forwards;
}

#skills{
  justify-content: center;
  align-items: center;
}

@media screen and (max-width:768px) {
  #card{
  /* margin-left:37%;
  margin-right:10%; */
    margin: auto auto auto auto;
  width: 120px;
  height: 15%;
  background-color: #3b82f6;
  transition: 0.5s ease in out;
  justify-content: center;
  align-items: center;
}
#skills{
  justify-content: center;
  align-items: center;
}
}
</style>