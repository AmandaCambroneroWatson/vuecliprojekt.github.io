<template>
  <div class="home">
    <h1 class="h1 ml-3 mt-5 mb-4 text-white">Popular movies</h1>
    <div>
      <main class="container-box">
        <div v-for="result in results" :key="result.id">
          <img
            v-bind:src="'http://image.tmdb.org/t/p/w500/' + result.poster_path"
            width="180px"
          />
          <p>{{ result.title }}</p>
          <span class="rating" v-if="result.vote_average >= 7" style="color: #2B7D7D"> Rating: {{
            result.vote_average
          }}</span>
          <span class="rating" v-else> Rating: {{ result.vote_average }}</span>
        </div>
      </main>

      <h1 class="h1 ml-3 mt-5 mb-4 text-white">Upcoming Movies</h1>

      <section class="container-box">
        <div v-for="result in results" :key="result.id">
          <img
            class="image-card"
            v-bind:src="'http://image.tmdb.org/t/p/w500/' + result.poster_path"
            width="180px"
          />
          <p>{{ result.title }}</p>
          <span class="rating" v-if="result.vote_average >= 7" style="color: #2B7D7D"> Rating : {{
            result.vote_average
          }}</span>
          <span class="rating" style="color:2B607D" v-else>Rating :{{ result.vote_average }}</span>
         
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import axios from "axios";
const apiKey = "fa508fdda8772006644c68416cce99e6";
export default {
  data() {
    return {
      results: null,
    };
  },

  mounted() {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`
      )
      .then((response) => {
        this.results = response.data.results;
      });
    console.log(this.results);
  },

  created() {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&language=en-US&page=1`
      )
      .then((response) => {
        this.results = response.data.results;
      });
    console.log(this.results);
  },
};
</script>

<style>
.container-box {
  display: inline-flex;
  flex-wrap: wrap;
  align-items: center;
  margin: 50px;
  padding: 20px;
}
span.rating {
  border-radius: 3px;
  font-weight: bold;
  padding: 0.25rem 0.5rem;
  background-color: #22254b;
  
}
</style>