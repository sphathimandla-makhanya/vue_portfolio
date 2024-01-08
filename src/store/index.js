import { createStore } from 'vuex'
import axios from 'axios';

export default createStore({
  state: {
    about:[]
  },
  getters: {
  },
  mutations: {
    setAbout(state,data){
      state.about=data
    }
  },
  actions: {
    fetchData(context){
      axios.get('http://localhost:3000/about')
      .then(a => console.log(a.data);
      context.commit("setAbout", a.data))
    }
  },
  modules: {
  }
})
