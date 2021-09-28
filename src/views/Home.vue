<template>
  <div id="movieHome">
    <movieCard v-for="movie in moviesArray" :key="movie.id" :movie="movie"/>
  </div>
</template>

<script>
// @ is an alias to /src
import movieCard from '../components/movie-card-for-home.vue'
export default {
  components: {
    movieCard
  },
  props: [],
  computed: {
    moviesArray () {
      return this.$store.state.movies
    }
  },
  methods: {
    getMovies (id) {
      this.$store.dispatch('movies', id)
    }
  },
  created () {
    this.getMovies()
  }
}
</script>

<style>
#movieHome {
}
</style>
