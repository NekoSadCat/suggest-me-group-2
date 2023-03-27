import FilmCover from "../../components/FilmCover/FilmCover";
import FilmInfo from "../../components/FilmInfo/FilmInfo";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {getMovieDetails} from "../../data/apiRequest";

import s from "./Details.module.scss";

const Details = () => {
  const [movie, setMovie] = useState({genres: []});
  const params = useParams();

  useEffect(() => {
    const fetchMovieDetails = async () => {
      const data = await getMovieDetails(params.id);
      setMovie(data);
    };
    fetchMovieDetails();
  }, [params.id]);

  return (
    <main className={s.details}>
      <FilmCover film={movie}/>
      <FilmInfo film={movie}/>
    </main>
  );
};

export default Details;
