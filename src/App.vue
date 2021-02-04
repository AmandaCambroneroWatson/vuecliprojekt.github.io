<template>
<body>
   
  
   <div id="app">
    <div id="nav">
      <div class="home">
    <img alt="Movie Search App(MSA)" src="./assets/msa.logo.png" width="130px">
    <hello-myapp msg="Welcome To MSA"/><h3 class="h3 ml-3 mt-5 mb-4 text-white">Movie Search App(MSA)</h3></div>
    
      <router-link to="/">Home</router-link> |
      <router-link to="/search">Search</router-link>
    </div>
    <router-view/>
  </div>
  
   
</body>

</template>

<script>

import HelloMyapp from './components/HelloMyapp.vue'
export default {
  name: 'Home',
  components: {
    HelloMyapp
   
  },
  
}
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400&display=swap");
* {
  color: #ffffff;
}
body {
  font-family: "Noto Sans KR", sans-serif;
}
#app {
  background-color: rgb(20, 20, 20);
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: #2c3e50;
  min-height: 100vh;
}

#nav {
  text-align: center;
  padding: 20px;
  position: relative;
  z-index: 99;
  background-color: black;
}

#nav a {
  font-weight: bold;
  color: #2B7D7D;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.router-link-exact-active {
  color: white !important;
}

img.alt{
  color:white
}
</style>

 

 
