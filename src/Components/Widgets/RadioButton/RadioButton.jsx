import s from "./RadioButton.module.scss";
import { useState, useEffect } from "react";
import { Wrapper } from "../../index";

const genres = ["Any", "Action", "Horror", "Drama", "Comedy"];
export const Ganre = () => {
  const [selected, setSelected] = useState(genres[0]);
  const [selectedId, setSelectedId] = useState([]);
  const [movies, setMovies] = useState([]);
  const [allGenres, setGenres] = useState([]);
  
  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const response = await fetch(
          "https://movie-w83k.onrender.com/movie/genres"
        );
        const data = await response.json();
        data.unshift({ _id: "0", name: "Any" }); 
        setGenres(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchGenres();
  }, []);


  useEffect(() => {
    const fetchMovies = async () => {
      try {
        let url = `https://movie-w83k.onrender.com/movie/random/${selectedId}?limit=8`;
        if (selected === "Any") {
          url = "https://movie-w83k.onrender.com/movie/page/1";
        }
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
    <div className={s.ganreBlock}>
    <div className={s.genre}>
      {allGenres.slice(0, 8).map((genre, i) => (
        <button
          key={i}
          className={selected === genre.name ? s.active : ""}
          onClick={() => {
            setSelected(genre.name);
            setSelectedId(genre._id);
          }}
        >
          {genre.name}
        </button>
      ))}
    </div>
      <h2 className={s.header}>
        {selected} <span>({movies.length})</span>
      </h2>
      <Wrapper movie={movies} />
    </div>
  );
};

export default Ganre;
