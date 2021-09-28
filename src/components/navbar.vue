<template>
  <nav>
    <div id="navbar">
      <div class="navbar-contain">
          <router-link v-if="loginCondition" class="navbar-a" to="/home">Home</router-link>
          <router-link v-if="!loginCondition" class="navbar-a" to="/register">Register</router-link>
          <router-link v-if="!loginCondition" class="navbar-a" to="/login">Login</router-link>
          <a v-if="loginCondition" class="navbar-a" @click.prevent="logout">Logout</a>
          <a v-if="loginCondition" class="navbar-a" @click.prevent="showFavoriteList">Favorite</a>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
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
        this.$store.dispatch('assignLogin', false)
      }
    },
    showFavoriteList () {
      this.$store.dispatch('showFavorite')
      // router.push({ name: 'Bookmark' })
      this.$router.push({ name: 'Bookmark' })
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
