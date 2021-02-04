<template>
  <section>
    <div>
      <b-form @submit.prevent="searchResults(search)">
        <b-form-input
          class="border-black"
          v-model="search"
          placeholder="Search for movies.."
        ></b-form-input>
      </b-form>
    </div>
   
        <span class="thespinner" v-if="isLoading">
            
  <div class="text-center">
  <b-spinner variant="light" label="Text Centered"></b-spinner>
</div>
       </span>

        <span v-else>
            <h1 class="h1 ml-3 mt-5 mb-4 text-white"> Top Results</h1>
        </span>


<div class="container-box">
    <div v-for="result in results" :key="result.id">
      <img
        v-bind:src="'http://image.tmdb.org/t/p/w500/' + result.poster_path"
        width="180px"
      />
      <p>{{ result.title }}</p>
       <span class="rating" v-if="result.vote_average >= 7" style="color: #2B7D7D">Rating: {{
            result.vote_average
          }}</span>
          <span class="rating" v-else style="color:2B607D">Rating: {{ result.vote_average }}</span>
    </div>
    </div>

    
  </section>
</template>
<script>


import axios from "axios";
const apiKey = "fa508fdda8772006644c68416cce99e6";

export default {
  name: "search",
  data() {
    return {
      search: "",
      results: "",
      isLoading:true
      
    };
  },

   
  methods: {
    searchResults(search) {
      
      axios
        .get(
          `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&page=1&query=` +
            search
        )
        .then((response) => {
          
          this.results = response.data.results;
           this.isLoading = false
        });
      console.log(this.results);
    },
  },
};
</script>
<style>

.container-box {
  display: inline-flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 15px;
  margin: 50px;
  padding: 20px;
}

span.thespinner{
  padding: 50px;
  
}

</style>