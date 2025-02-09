const API_KEY = process.env.VITE_APP_API_KEY;
const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRatedMovies: `/movie/top_rated?api_key=${API_KEY}&language-en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
  fetchTvShow: `tv/popular?api_key=${API_KEY}&language=en-US&page-1`,
};
export default requests;

// https://api.themoviedb.org/3/discover/movie?api_key=7c72676ea0ac1ff0c6873274ffa41410&with_genres=10749
// https://image.tmdb.org/t/p/original/xDGbZ0JJ3mYaGKy4Nzd9Kph6M9L.jpg
// "poster_path": "/xDGbZ0JJ3mYaGKy4Nzd9Kph6M9L.jpg",

// https://api.themoviedb.org/3/trending/all/week?api_key=7c72676ea0ac1ff0c6873274ffa41410&language=en-US
// 
// https://image.tmdb.org/t/p/original//rn8Sg6C8aWKRWdqY4hIpmOaiuqS.jpg