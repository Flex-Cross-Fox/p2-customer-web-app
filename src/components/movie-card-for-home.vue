<template>
    <!-- <div id="MovieTable"> -->
    <table id="table-Movie">
        <tr>
            <th>Movie</th>
            <th>Image</th>
            <th>Rating</th>
            <th>Status</th>
            <th>Action</th>
        </tr>
        <!-- <tr v-for="movie in movies" :key="movie.id" >
            <td>{{ movie.title }}</td>
            <td>{{ movie.imgUrl }}</td>
            <td>{{ movie.rating }}</td>
            <td>{{ movie.status }}</td>
            <td><a href="#" @click="ShoweditMovie(movie.id)">Edit</a> || <a href="#" @click="deleteMovie(movie.id)">Delete</a> || <a href="#" @click="inactiveMovie(movie.id)">Inactive</a></td>
        </tr> -->
    </table>
    <!-- </div> -->
</template>

<script>
export default {

}
</script>

<style>
table, th, td {
  border: 1px solid black;
}
</style>
