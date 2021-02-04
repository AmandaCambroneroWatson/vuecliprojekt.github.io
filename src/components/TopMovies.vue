<template>
<div id="home">
    <h1 class="h1 ml-3 mt-5 mb-4 text-white">Top movies</h1>
    <div>
      <main class="container-box">
        <div v-for="(result, index) in results" :key="index">
          <img
            v-bind:src="'http://image.tmdb.org/t/p/w500/' + result.poster_path"
            width="180px"
          />
          <p>{{ result.title }}</p>
          <span class="rating" v-if="result.vote_average >= 7" style="color: green"> Rating: {{
            result.vote_average
          }}</span>
          <span class="rating" v-else> Rating: {{ result.vote_average }}</span>
        </div>
      </main>
      </div>
      </div>
</template>

<script>
import axios from "axios";
const apiKey = "fa508fdda8772006644c68416cce99e6";
export default {
  

  data() {
    return {
     results:""
    };
  },
    mounted() {
    axios.all(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`)
      .then((response) => {
        this.results = response.data.results;
      });
    console.log(this.results);
  },
 
};
</script>


<style>

</style>
