export const getMovieDetails = async (id) => {
  const response = await fetch(
    `https://movie-w83k.onrender.com/movie/details/${id}`
  );
  const data = await response.json();
  return data;
};