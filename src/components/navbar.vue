<template>
<nav class="navbar navbar-light bg-light">
  <div class="container-fluid">
    <div>
      <router-link v-if="loginCondition" class="navbar-a" to="/home">Home</router-link>
      <router-link v-if="!loginCondition" class="navbar-a" to="/register">Register</router-link>
      <router-link v-if="!loginCondition" class="navbar-a" to="/login">Login</router-link>
      <a v-if="loginCondition" class="navbar-a" @click.prevent="logout">Logout</a>
      <a v-if="loginCondition" class="navbar-a" @click.prevent="showFavoriteList">Favorite</a>
    </div>
    <form @submit.prevent="searchTitle" v-if="loginCondition" class="d-flex">
      <select v-model="typeOfSearch">
        <option disabled value="">Please select one</option>
        <option>Title</option>
        <option>Year</option>
      </select>
      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" v-model="search_Of">
      <button class="btn btn-outline-success" type="submit">Search</button>
    </form>
  </div>
</nav>
  <!-- <nav>
    <div id="navbar">
      <div class="navbar-contain">
          <router-link v-if="loginCondition" class="navbar-a" to="/home">Home</router-link>
          <router-link v-if="!loginCondition" class="navbar-a" to="/register">Register</router-link>
          <router-link v-if="!loginCondition" class="navbar-a" to="/login">Login</router-link>
          <a v-if="loginCondition" class="navbar-a" @click.prevent="logout">Logout</a>
          <a v-if="loginCondition" class="navbar-a" @click.prevent="showFavoriteList">Favorite</a>
      </div>
    </div>
  </nav> -->
</template>

<script>
export default {
  data () {
    return {
      search_Of: '',
      typeOfSearch: ''
    }
  },
  methods: {
    logout () {
      console.log('masuk')
      localStorage.removeItem('token')
      this.$store.commit('assignLogin', false)
      // router.push({ name: 'Login' })
      this.$router.push({ name: 'Login' })
    },
    login () {
      if (localStorage.getItem('token')) {
        this.$store.commit('assignLogin', true)
      } else {
        this.$store.commit('assignLogin', false)
      }
    },
    showFavoriteList () {
      this.$store.dispatch('showFavorite')
      // router.push({ name: 'Bookmark' })
      this.$router.push({ name: 'Bookmark' })
    },
    searchTitle () {
      if (this.typeOfSearch === 'Title') {
        if (!this.search_Of) {
          alert('please! fill the search form with Title !!')
        } else {
          this.$store.dispatch('searchTitle', this.search_Of)
        }
      } else if (this.typeOfSearch === 'Year') {
        if (!this.search_Of) {
          alert('please! fill the search form with Year !!')
        } else {
          this.$store.dispatch('searchDate', this.search_Of)
        }
      } else {
        alert('please! Choose one of the select !!')
      }
    }
  },
  created () {
    this.login()
  },
  computed: {
    loginCondition () {
      return this.$store.state.login
    }
    // ,
    // favoriteCondition () {
    //   return this.$store.state.favoriteCondition
    // }
  }
}
</script>

<style>
*{
    margin: 0;
    padding: 0;
}

.navbar-input {

}

#navbar {
  display: flex;
  background-color: palegoldenrod;
}

.navbar-contain{
  float: left;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 27px;
}

.navbar a{
  margin: 15px;
  float: left;
}

.navbar-a{
  margin-left: 20px;
  text-decoration: none;
}
</style>
