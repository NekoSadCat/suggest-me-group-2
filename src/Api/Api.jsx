export const getPopularMovies = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=3b76611b97ee9546a88b0238260eed97&language=en-US&page=1`
    );
    const data = await response.json();
    return data.results;
};

export const getMovies = async () => {
    const response = await fetch(
      `https://movie-w83k.onrender.com/movie/page/1`
    );
    const data = await response.json();
    return data;
};


export const getMovieDetails = async (id) => {
  const response = await fetch(
    `https://movie-w83k.onrender.com/movie/details/${id}`
  );
  const data = await response.json();
  return data;
};
