import styles from "./Ganre.module.scss";
import { useState, useEffect } from "react";

import { Wrapper } from "../../index";

const Genre = () => {
  const [selected, setSelected] = useState("Any");
  const [selectedId, setSelectedId] = useState([]);
  const [movies, setMovies] = useState([]);
  const [genreList, setGenreList] = useState([]);

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const response = await fetch(
            "https://movie-w83k.onrender.com/movie/genres"
        );
        const data = await response.json();
        const genres = data.map((genre) => ({ _id: genre._id, name: genre.name }));
        genres.unshift({ _id: "0", name: "Any" });
        setGenreList(genres);
      } catch (error) {
        console.error(error);
      }
    };
    fetchGenres();
  }, []);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const url =
            selected === "Any"
                ? "https://movie-w83k.onrender.com/movie/page/1"
                : `https://movie-w83k.onrender.com/movie/random/${selectedId}?limit=8`;
        const response = await fetch(url);
        const data = await response.json();
        setMovies(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchMovies();
  }, [selected]);

  return (
      <div className={styles.genreBlock}>
        <div className={styles.genre}>
          {genreList.slice(0, 8).map((genre) => (
              <button
                  key={genre._id}
                  className={selected === genre.name ? styles.active : ""}
                  onClick={() => {
                    setSelected(genre.name);
                    setSelectedId(genre._id);
                  }}
              >
                {genre.name}
              </button>
          ))}
        </div>
        <h2 className={styles.header}>
          {selected} <span>({movies.length})</span>
        </h2>
        <Wrapper movie={movies} />
      </div>
  );
};

export default Genre;
