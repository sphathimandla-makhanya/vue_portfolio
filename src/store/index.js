import { createStore } from 'vuex'
import axios from 'axios';

export default createStore({
  state: {
    about:[],
    resume:[],
    skills:[],
    reviews:[],
    projects:[]
  },
  getters: {
  },
  mutations: {
    setAbout(state,data){
      state.about=data
    },
    setResume(state,data){
      state.resume=data
    },
    setSkills(state,data){
      state.skills=data
    },
    
    setProject(state,data){
      state.projects=data
    },
    setReviews(state,data){
      state.reviews=data
    }
  },
  actions: {
    fetchData(context){
      try{
        axios.get('https://sphathimandla-makhanya.github.io/vueJson/')
        .then((a) => {console.log(a.data.about[0]),
        context.commit("setAbout", a.data.about[0])})
      }
      catch(error){
        console.error("error", error);
      }
    },
    resumeData(context){
      try{
        axios.get('https://sphathimandla-makhanya.github.io/vueJson/')
        .then((cv) => {console.log(cv.data.resume),
        context.commit("setResume", cv.data.resume)})
      }
      catch(error){
        console.error("error", error);
      }
    },
    skillsData(context){
      try{
        axios.get('https://sphathimandla-makhanya.github.io/vueJson/')
        .then((skill) => {console.log(skill.data.skills),
        context.commit("setSkills", skill.data.skills)})
      }
      catch(error){
        console.error("error", error);
      }
    },
   
    projectsData(context){
      try{
        axios.get('https://sphathimandla-makhanya.github.io/vueJson/')
        .then((proj) => {console.log(proj.data.projects),
        context.commit("setProject", proj.data.projects)})
      }
      catch(error){
        console.error("error", error);
      }
    },
    reviewsData(context){
      try{
        axios.get('https://sphathimandla-makhanya.github.io/vueJson/')
        .then((testimonial) => {console.log(testimonial.data.reviews),
        context.commit("setReviews", testimonial.data.reviews)})
      }
      catch(error){
        console.error("error", error);
      }
    },
  },
  modules: {
  }
})
