import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const API_KEY = '7014ff3481c4736f473f368d478f8f78';

export async function getMovies() {
  const resp = await axios.get(`trending/movie/day?api_key=${API_KEY}`);
  return resp.data;
}
