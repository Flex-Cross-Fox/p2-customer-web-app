<template>
  <div id="app">
    <!-- <nav>
      <div id="navbar">
        <div class="navbar-contain">
          <router-link v-if="currentlyPage" class="navbar-a" to="/about">Home</router-link>
          <router-link class="navbar-a" to="/register">Register</router-link>
          <router-link class="navbar-a" to="/login">Login</router-link>
          <router-link class="navbar-a" to="/logout">Logout</router-link>
          <router-link class="navbar-a" to="/bookmark">Favorite</router-link>
        </div>
      </div>
    </nav> -->
    <Navbar/>
    <router-view/>
  </div>
</template>

<script>
import Navbar from './components/navbar.vue'
export default {
  data () {
    return {}
  },
  components: {
    Navbar
  },
  methods: {

  }
}
</script>

<style>
*{
    margin: 0;
    padding: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

/* #navbar {
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
} */
</style>
