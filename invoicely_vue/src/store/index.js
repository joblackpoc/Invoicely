import { createStore } from 'vuex'

export default createStore({
  state: {
    user: {
      username: ''
    },
    isAutheticated: false,
    token: ''
  },
  mutations: {
    initializeStore(state){
      if (localStorage.getItem('token')){
        state.token = localStorage.getItem('token')
        state.isAutheticated = true
      }else{
        state.token = ''
        state.isAutheticated = false
      }
    },
    setToken(state, token){
      state.token = token
      state.isAutheticated = true
    },
    removeToken(state){
      state.token = ''
      state.isAutheticated = false
    }
  },
  actions: {
  },
  modules: {
  }
})
