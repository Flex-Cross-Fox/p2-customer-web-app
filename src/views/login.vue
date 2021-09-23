<template>
    <div class="eachForm" id="login-form">
        <Navabar/>
        <form>
            <div id="login">
                <div class="each-form">
                    <h1>Login</h1>
                </div>
                <div class="each-form">
                    <label>Email</label>
                    <input type="text">
                </div>
                <div class="each-form">
                    <label>Password</label>
                    <input type="password">
                </div>
                <div class="each-form">
                    <button type="submit">Login</button>
                </div>
            </div>
        </form>
    </div>
</template>

<script>

import Navbar from '../components/navbar.vue'

export default {
    components: {
        Navbar 
    }
}
</script>

<style>

</style>