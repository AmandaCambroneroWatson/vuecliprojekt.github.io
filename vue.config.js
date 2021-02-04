module.exports = {
  
  pwa: {
    manifestOptions: {
      background_color: 'black'
    },
    name: 'My Movie Search App',
    themeColor: '#2B7D7D',
    workboxOptions: {
      runtimeCaching: [
        {
          handler: 'NetworkFirst',
          options: {
            networkTimeoutSeconds: 5
          },
          urlPattern: 'https://api.themoviedb.org/3/movie/popular?api_key=fa508fdda8772006644c68416cce99e6&language=en-US&page=1'
        },
        {
          handler: 'NetworkFirst',
          options: {
            networkTimeoutSeconds: 5
          },
          urlPattern: 'https://api.themoviedb.org/3/movie/upcoming?api_key=fa508fdda8772006644c68416cce99e6&language=en-US&page=1'
        },
        {
          handler: 'NetworkFirst',
          options: {
            networkTimeoutSeconds: 5
          },
          urlPattern: 'https://api.themoviedb.org/3/search/movie?api_key=fa508fdda8772006644c68416cce99e6&page=1&query= + search'
        },
         
      ]
    }
  }
}