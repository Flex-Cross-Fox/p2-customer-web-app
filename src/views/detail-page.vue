<template>
    <!-- <Moviecard  /> -->
  <div id="movie-card">
    <div class="card-title">
        <p>Title</p>
    </div>
    <div class="type-of-card">
        <p>{{ inputData.title }}</p>
    </div>

    <div class="card-title">
        <p>Synopsis</p>
    </div>
    <div class="type-of-card">
        <p>{{ inputData.synopsis }}</p>
    </div>

    <div class="card-title">
        <p>Trailer URL</p>
    </div>
    <div class="type-of-card">
        <p>{{ inputData.trailerUrl }}</p>
    </div>

    <div class="card-title">
        <p>image URL</p>
    </div>
    <div class="card-imgUrl">
        <img :src="inputData.imgUrl" :alt="inputData.title" style="width: 200px">
    </div>

    <div class="card-title">
        <p>Rating</p>
    </div>
    <div class="type-of-card">
        <p>{{ inputData.rating }}</p>
    </div>

    <div class="card-title">
        <p>Status</p>
    </div>
    <div class="type-of-card">
        <p>{{ inputData.status }}</p>
    </div>
  </div>
</template>

<script>

// import Moviecard from '../components/movie-card.vue'

export default {
  data () {
    return {
      movieDetailObj: []
    }
  },
  components: {
    // Moviecard
  },
  methods: {

  },
  computed: {
    inputData () {
      return this.$store.state.movieDetail
    }
  }
}
</script>

<style>
#movie-card {
  font-size: 34px;
  border: 1px solid black;
  border-radius: 35px;
  /* width: 50%; */
  justify-content: center;
}

.card-title {
  margin-top: 20px;
}

.type-of-card {
  margin-bottom: 20px;
}

</style>
