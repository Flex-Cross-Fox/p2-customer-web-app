<template>
    <div class="movie-card" style="width: 18rem;">

      <div class="card-title">
          <p>Title</p>
      </div>
      <div class="type-of-card">
          <p>{{ movie.title }}</p>
      </div>

      <div class="card-title">
          <p>image URL</p>
      </div>
      <div class="card-imgUrl">
          <img :src="movie.imgUrl" :alt="movie.title" style="width: 100px">
      </div>

      <div class="card-title">
          <p>Rating</p>
      </div>
      <div class="type-of-card">
          <p>{{ movie.rating }}</p>
      </div>

      <div class="card-title">
          <p>Status</p>
      </div>
      <div class="type-of-card">
          <p>{{ movie.status }}</p>
      </div>

      <div class="card-title">
          <p>Action</p>
      </div>
      <div class="type-of-card">
          <a href="#" @click="favorite(movie.id)">Favorite</a> || <a href="#" @click="detail(movie.id)">Detail</a>
      </div>

    </div>
  <!-- </div> -->
</template>

<script>
export default {
  methods: {
    detail (id) {
      this.$store.dispatch('detail', id)
    },
    favorite (id) {
      this.$store.dispatch('createFavorite', id)
    }
  },
  computed: {
    moviesArray () {
      console.log(this.$store.state.movies)
      return this.$store.state.movies
    }
  },
  props: ['movie']
}
</script>

<style>
label{
  height: 34px;
}

.movie-card input{
    height: 39px;
    font-size: 39px;
}

.movie-card{
  font-size: 34px;
  margin: 50px 0;
  border: 3px solid black;
  border-radius: 25px;
  width: auto;
  display: block;
  margin-left: auto;
  margin-right: auto
}

a {
    text-decoration: none;
}
/* table, th, td {
  border: 1px solid black;
}

td {
  padding: 5px;
} */
</style>
