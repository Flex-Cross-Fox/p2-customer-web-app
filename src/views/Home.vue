<template>
<div>
  <div class="row">
    <movieCard class="col-4" v-for="movie in moviesArray" :key="movie.id" :movie="movie"/>
  </div>
  <Pagination/>
</div>
</template>

<script>
// @ is an alias to /src
import movieCard from '../components/movie-card-for-home.vue'
import Pagination from '../components/pagination.vue'
export default {
  components: {
    movieCard,
    Pagination
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
  // watch: {
  //   moviesArray
  // }
}
</script>

<style>
</style>
