<template>
    <div>
        <Moviecard/>
    </div>
</template>

<script>

import Moviecard from '../components/movie-card.vue'

export default {
  components: {
    Moviecard
  }
}
</script>

<style>
.movie-card{
  font-size: 34px;
}

label{
  height: 34px;
}

.movie-card input{
    height: 39px;
    font-size: 39px;
}
</style>
