import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const API_KEY = '7014ff3481c4736f473f368d478f8f78';

export async function searchMovieForId(id) {
  const resp = await axios.get(`movie/${id}?api_key=${API_KEY}`);
  return resp.data;
}
