<template>
  <nav>
    <div id="navbar">
      <div class="navbar-contain">
          <router-link class="navbar-a" to="/home">Home</router-link>
          <router-link class="navbar-a" to="/register">Register</router-link>
          <router-link class="navbar-a" to="/login">Login</router-link>
          <router-link class="navbar-a" to="/logout">Logout</router-link>
          <router-link class="navbar-a" to="/bookmark">Favorite</router-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  methods: {}
}
</script>

<style>
*{
    margin: 0;
    padding: 0;
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
