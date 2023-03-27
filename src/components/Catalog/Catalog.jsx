import Categories from "../Categories/Categories";
import Container from "../Container/Container";

import s from "./Catalog.module.scss"
import {useEffect, useState} from "react";
import FilmsList from "../FilmsList/FilmsList";

const Catalog = () => {
  const genresList = ["Any", "Action", "Horror", "Drama", "Comedy"];

  const [category, setCategory] = useState("any");
  const [movieList, setMovieList] = useState([]);
  const [selectedId, setSelectedId] = useState(genresList[0]._id);
  const [genres, setGenres] = useState([]);

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
        if (category === "any") {
          setSelectedId(0)
          url = "https://movie-w83k.onrender.com/movie/page/1";
        }
        const response = await fetch(url);
        const data = await response.json();
        setMovieList(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchMovies();
  }, [selectedId, category]);

  console.log(` - ${category} - ${selectedId}`)
  return (
    <section className={s.catalog} id="movieCatalog">
      <Container>
        <Categories category={category} setCategory={setCategory} setSelectedId={setSelectedId} genres={genres}/>
        <h2 className={s.catalog__title}>
          Any <sub>({movieList.length})</sub>
        </h2>
      <FilmsList movieList={movieList}/>
      </Container>
    </section>
  )
};

export default Catalog;