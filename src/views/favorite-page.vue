<template>
    <div>
        <Moviecard v-for="card in favoriteList" :key="card.id" :card="card" />
    </div>
</template>

<script>

import Moviecard from '../components/favorite-card.vue'

export default {
  components: {
    Moviecard
  },
  computed: {
    favoriteList () {
      return this.$store.state.favoriteList
    }
  },
  methods: {
    getFavorite () {
      this.$store.dispatch('showFavorite')
    }
  },
  created () {
    this.getFavorite()
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
