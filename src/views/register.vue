<template>
    <div class="eachForm" id="register-form">
        <form @submit.prevent="registerForm">
            <div id="register">
                <div class="each-form">
                    <h1>Register</h1>
                </div>
                <div class="each-form">
                    <label>Name</label>
                    <input type="text" v-model="username">
                </div>
                <div class="each-form">
                    <label>Role</label>
                    <input type="text" v-model="role">
                </div>
                <div class="each-form">
                    <label>Email</label>
                    <input type="email" v-model="email">
                </div>
                <div class="each-form">
                    <label>Password</label>
                    <input type="password" v-model="password">
                </div>
                <div class="each-form">
                    <button type="submit">Register</button>
                </div>
            </div>
        </form>
    </div>
</template>

<script>

export default {
  components: {},
  data () {
    return {
      username: '',
      role: '',
      email: '',
      password: ''
    }
  },
  methods: {
    registerForm () {
      this.$store.dispatch('register', { username: this.username, role: this.role, email: this.email, password: this.password })
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
