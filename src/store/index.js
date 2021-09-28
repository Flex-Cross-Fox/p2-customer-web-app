import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from '../router/index'
const baseURL = 'http://localhost:3000'

Vue.use(Vuex)

export default new Vuex.Store({
  state: { // state
    movies: [],
    login: false,
    movieDetail: {},
    favoriteList: [],
    favoriteCondition: false
  },
  mutations: { // commit
    movies (state, payload) {
      state.movies = payload
    },
    assignLogin (state, payload) {
      state.login = payload
    },
    assignMovieDetail (state, payload) {
      state.movieDetail = payload
    },
    assignFavoriteList (state, payload) {
      state.favoriteList = payload
    }
  },
  actions: { // dispatch
    login (context, obj) {
      axios({
        method: 'POST',
        url: `${baseURL}/login`,
        data: obj
      })
        .then(({ data }) => {
          localStorage.setItem('token', data.token)
          context.commit('assignLogin', true)
          router.push({ name: 'Home' })
        })
        .catch((err) => console.log(err))
    },
    register (context, obj) {
      axios({
        method: 'post',
        url: `${baseURL}/register`,
        data: obj
      })
        .then(({ data }) => {
          router.push({ name: 'Login' })
        })
        .catch((err) => console.log(err))
    },
    movies (context) {
      axios({
        method: 'get',
        url: `${baseURL}/movies`
      })
        .then(({ data }) => {
          console.log(data)
          context.commit('movies', data)
        })
        .catch((err) => console.log(err))
    },
    detail (context, id) {
      axios({
        method: 'get',
        url: `${baseURL}/movies/${id}`,
        headers: { token: localStorage.getItem('token') }
      })
        .then(({ data }) => {
          console.log(data)
          context.commit('assignMovieDetail', data)
          router.push({ name: 'Detail' })
        })
        .catch((err) => console.log(err))
    },
    createFavorite (context, id) {
      console.log(id)
      axios({
        method: 'post',
        url: `${baseURL}/favorite/${id}`,
        headers: { token: localStorage.getItem('token') }
      })
        .then(({ data }) => {
          console.log(data)
        })
        .catch((err) => console.log(err))
    },
    showFavorite (context, id) {
      axios({
        method: 'get',
        url: `${baseURL}/favorite`,
        headers: { token: localStorage.getItem('token') }
      })
        .then(({ data }) => {
          console.log(data)
          context.commit('assignFavoriteList', data)
        })
        .catch((err) => console.log(err))
    },
    delete (context, id) {
      axios({
        method: 'delete',
        url: `${baseURL}/favorite/${id}`,
        headers: { token: localStorage.getItem('token') }
      })
        .then(({ data }) => {
          console.log(data)
          context.dispatch('showFavorite')
        })
        .catch((err) => console.log(err))
    }
  }
})
