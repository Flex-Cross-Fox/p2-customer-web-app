<template>
<div>
    <Moviecard/>
</div>
</template>

<script>
import axios from 'axios'
import Moviecard from '../components/movie-card.vue'

export default {
  data () {
    return {
      movieDetailObj: []
    }
  },
  components: {
    Moviecard
  },
  methods: {
    backToHome () {
      this.$router.push({ name: '' })
    },
    getData () {
      axios({
        mehtod: 'get',
        url: 'http://localhost:3000/movies'
      })
        .then(({ data }) => {
          console.log(data)
          this.movieDetailObj = data
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }
}
</script>

<style>
</style>
