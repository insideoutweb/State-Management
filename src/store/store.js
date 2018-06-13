  import Vue from 'vue';
  import Vuex from 'vuex';
// constant value
  Vue.use(Vuex);
  const state = {
    count : 0
  };
  console.log(state);
  export default  new Vuex.Store({
    state : {
      title : 'Our Title',
    },
    mutations: {
      ADD_LINK: (state, link) => {
        state.links.push(link);
      },
      REMOVE_LINK: (state, link) => {     
        state.links.splice(link, 1);
      }
    },
    actions: {
      removeLink: (context, link) => {    
        context.commit("REMOVE_LINK", link);
      }
    }
  });