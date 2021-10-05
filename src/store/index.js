import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from '../router/index'
const baseURL = 'http://localhost:3000'
// const baseURL = 'https://git.heroku.com/phase2-c2.git'

Vue.use(Vuex)

export default new Vuex.Store({
  state: { // state
    movies: [],
    login: false,
    movieDetail: {},
    favoriteList: [],
    favoriteCondition: false,
    totalMovie: [],
    currentlyPage: 1,
    page: 1,
    QrCode: 'https://api.qrserver.com/v1/create-qr-code/?size=200x200&data='
  },
  mutations: { // commit
    movies (state, payload) {
      state.movies = payload
    },
    AssignQrCode (state, payload) {
      state.QrCode = 'https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=' + payload
    },
    assignLogin (state, payload) {
      state.login = payload
    },
    assignMovieDetail (state, payload) {
      state.movieDetail = payload
    },
    assignFavoriteList (state, payload) {
      state.favoriteList = payload
    },
    pagination (state, payload) {
      state.page = payload
    },
    currently (state, payload) {
      state.currentlyPage = payload
    },
    next (state, payload) {
      if (state.page > payload) {
        state.currentlyPage = payload + 1
      } else {
        state.currentlyPage = payload
      }
    },
    Previous (state, Previous) {
      if (Previous === 1) {
        state.currentlyPage = 1
      } else {
        state.currentlyPage -= 1
      }
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
          context.commit('movies', data)
        })
        .catch((err) => console.log(err))
    },
    moviesPage (context) {
      axios({
        method: 'get',
        url: `${baseURL}/movies/pag`
      })
        .then(({ data }) => {
          data = Math.ceil(data.length / 9)
          context.commit('pagination', data)
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
          context.commit('AssignQrCode', data.id)
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
    },
    toThisPage (context, id) {
      axios({
        method: 'get',
        url: `${baseURL}/movies/?page=${id}`,
        headers: { token: localStorage.getItem('token') }
      })
        .then(({ data }) => {
          console.log(data)
          context.commit('movies', data)
          context.commit('currently', id)
        })
        .catch((err) => console.log(err))
    },
    next (context, page) {
      context.commit('next', page)
    },
    Previous (context, page) {
      context.commit('Previous', page)
    },
    searchTitle (context, title) {
      console.log(title)
      axios({
        method: 'get',
        url: `${baseURL}/movies/?title=${title}`,
        headers: { token: localStorage.getItem('token') }
      })
        .then(({ data }) => {
          // console.log(data)
          // context.commit('pagination', Math.ceil(data.length / 9))
          context.commit('movies', data)
        })
        .catch((err) => console.log(err))
    },
    searchDate (context, start) {
      axios({
        method: 'get',
        url: `${baseURL}/movies/?start=${start}`
      })
        .then(({ data }) => {
          console.log(data)
          context.commit('movies', data)
        })
        .catch((err) => console.log(err))
    }
  }
})
