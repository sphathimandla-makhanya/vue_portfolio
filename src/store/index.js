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
      axios.get('http://localhost:3000/about')
      .then((a) => {console.log(a.data[0]),
      context.commit("setAbout", a.data[0])})
    },
    resumeData(context){
      axios.get('https://sphathimandla-makhanya.github.io/vueJson/')
      .then((cv) => {console.log(cv.data.resume),
      context.commit("setResume", cv.data.resume)})
    },
    skillsData(context){
      axios.get('https://sphathimandla-makhanya.github.io/vueJson/')
      .then((skill) => {console.log(skill.data.skills),
      context.commit("setSkills", skill.data.skills)})
    },
   
    projectsData(context){
      axios.get('https://sphathimandla-makhanya.github.io/vueJson/')
      .then((proj) => {console.log(proj.data.projects),
      context.commit("setProject", proj.data.projects)})
    },
    reviewsData(context){
      axios.get('http://localhost:3000/reviews')
      .then((testimonial) => {console.log(testimonial.data),
      context.commit("setReviews", testimonial.data)})
    }
  },
  modules: {
  }
})
