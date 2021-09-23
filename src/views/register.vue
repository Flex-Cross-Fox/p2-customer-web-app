<template>
    <div class="eachForm" id="register-form">
        <Navbar/>
        <form>
            <div id="register">
                <div class="each-form">
                    <h1>Register</h1>
                </div>
                <div class="each-form">
                    <label>Name</label>
                    <input type="text">
                </div>
                <div class="each-form">
                    <label>Role</label>
                    <input type="text">
                </div>
                <div class="each-form">
                    <label>Email</label>
                    <input type="email">
                </div>
                <div class="each-form">
                    <label>Password</label>
                    <input type="password">
                </div>
                <div class="each-form">
                    <button type="submit">Register</button>
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