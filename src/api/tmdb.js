import axios from 'axios';

const API_KEY = "4919451b6a70c32e62139503487e4e29";
const BASE_URL = "https://api.themoviedb.org/3";

export const fetchPopular = (page = 1) =>
  axios.get(`${BASE_URL}/movie/popular`, {
    params: { api_key: API_KEY, page }
  });
  
export const searchMovies = (query) =>
  axios.get(`${BASE_URL}/search/movie`, { params: { api_key: API_KEY, query } });

export const fetchMovieDetails = (id) =>
  axios.get(`${BASE_URL}/movie/${id}`, {
    params: { api_key: API_KEY }
  });