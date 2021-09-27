<template>
    <div class="eachForm" id="register-form">
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

export default {
  components: {}
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
