<template>
    <div class="eachForm" id="login-form">
        <form @submit.prevent="loginForm">
            <div id="login">
                <div class="each-form">
                    <h1>Login</h1>
                </div>
                <div class="each-form">
                    <label>Email</label>
                    <input type="text" v-model="email">
                </div>
                <div class="each-form">
                    <label>Password</label>
                    <input type="password" v-model="password">
                </div>
                <div class="each-form">
                    <button type="submit">Login</button>
                </div>
            </div>
        </form>
    </div>
</template>

<script>

export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },
  components: {},
  methods: {
    loginForm () {
      this.$store.dispatch('login', { email: this.email, password: this.password })
    }
  },
  computed: {
    access_token () {
      console.log('dapat access token')
      return this.$store.state.access_token
    }
  }
}
</script>

<style>
*{
    margin: 0;
    padding: 0;
}

#app{
    font-size: 34px;
}

.each-form{
    display: flex;
    justify-content: center;
    margin: 30px;
}

button{
    font-size: 48px;
}

label{
    margin-right: 10px;
}

.eachForm{
    display: flex;
    justify-content: center;
    margin: 30px;
    border: 3px solid black;
    border-radius: 20px;
}

.eachForm input{
    height: 39px;
    font-size: 39px;
}
</style>
