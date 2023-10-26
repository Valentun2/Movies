import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const API_KEY = '7014ff3481c4736f473f368d478f8f78';

export async function searchMovies(value, page) {
  const resp = await axios.get(
    `/search/movie?page=1&query=${value}&api_key=${API_KEY}&page=${page}`
  );
  return resp.data;
}
