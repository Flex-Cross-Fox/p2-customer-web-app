<template>
  <div class="movie-card" style="width: 18rem;">
    <div class="card-title">
        <p>Title</p>
    </div>
    <div class="type-of-card">
        <p>{{ card.Movie.title }}</p>
    </div>

    <div class="card-title">
        <p>image URL</p>
    </div>
    <div class="card-imgUrl">
        <img :src="card.Movie.imgUrl" :alt="card.Movie.title" style="width: 100px">
    </div>

    <div class="card-title">
        <p>Rating</p>
    </div>
    <div class="type-of-card">
        <p>{{ card.Movie.rating }}</p>
    </div>

    <div class="card-title">
        <p>Status</p>
    </div>
    <div class="type-of-card">
        <p>{{ card.Movie.status }}</p>
    </div>

    <div class="card-title">
        <p>Action</p>
    </div>
    <div class="type-of-card">
        <a href="#" @click="deleteFavorite(card.Movie.id)">Delete</a> || <a href="#" @click="detail(card.Movie.id)">Detail</a>
    </div>
  </div>
</template>

<script>
export default {
  props: ['card'],
  methods: {
    deleteFavorite (id) {
      this.$store.dispatch('delete', id)
    },
    detail (id) {
      this.$store.dispatch('detail', id)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

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
</style>
