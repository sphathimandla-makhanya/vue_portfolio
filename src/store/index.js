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
      axios.get('http://localhost:3000/resume')
      .then((cv) => {console.log(cv.data),
      context.commit("setResume", cv.data)})
    },
    skillsData(context){
      axios.get('http://localhost:3000/skills')
      .then((skill) => {console.log(skill.data),
      context.commit("setSkills", skill.data)})
    },
   
    projectsData(context){
      axios.get('http://localhost:3000/projects')
      .then((proj) => {console.log(proj.data),
      context.commit("setProject", proj.data)})
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
