const API_BASE_URL = 'https://movie-w83k.onrender.com/tmdb/movie';
const API_KEY = '3b76611b97ee9546a88b0238260eed97';

async function fetchJson(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  } catch (error) {
    console.log(error);
    return null;
  }
}

async function getPopularMovies() {
  const url = `${API_BASE_URL}/popular?api_key=${API_KEY}&language=en-US&page=1`;
  const data = await fetchJson(url);
  return data?.results || [];
}

async function getMovies(limit = 8) {
  const url = `${API_BASE_URL}?limit=${limit}`;
  const data = await fetchJson(url);
  return data || [];
}

async function getMovieDetails(id) {
  const url = `${API_BASE_URL}/${id}?api_key=${API_KEY}`;
  const data = await fetchJson(url);
  return data || {};
}

export { getPopularMovies, getMovies, getMovieDetails };
