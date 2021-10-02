<template>
  <!-- <div class="row">
    <div class="col-4"> -->

        <nav aria-label="Page navigation example">
        <ul class="pagination">
          <li class="page-item"><a class="page-link" @click.prevent="Previous" href="#">Previous</a></li>
          <li v-for="page in pagination" :key="page.id" class="page-item"><a class="page-link" href="#" @click.prevent="toThisPage(page)">{{ page }}</a></li>
          <li class="page-item"><a class="page-link" @click.prevent="next" href="#">Next</a></li>
        </ul>
      </nav>
    <!-- </div>

  </div> -->
</template>

<script>
export default {
  methods: {
    amountPage () {
      this.$store.dispatch('moviesPage')
      this.$store.dispatch('movies')
    },
    next () {
      console.log('next ke berikut')
      this.$store.dispatch('next', this.currentlyPage)
      this.$store.dispatch('toThisPage', this.currentlyPage)
    },
    Previous () {
      console.log('previous ke tadi')
      this.$store.dispatch('Previous', this.currentlyPage)
      this.$store.dispatch('toThisPage', this.currentlyPage)
    },
    toThisPage (page) {
      console.log(page)
      this.$store.dispatch('toThisPage', page)
    }
  },
  computed: {
    pagination () {
      return this.$store.state.page
    },
    currentlyPage () {
      return this.$store.state.currentlyPage
    }
  },
  created () {
    this.amountPage()
  }
}
</script>

<style>

</style>
