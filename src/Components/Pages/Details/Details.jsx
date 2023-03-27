import s from "./Details.module.scss";
import { DetailsPoster, DetailsInfo } from "../../index";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getMovieDetails } from "../../../apiConfig/apiRequest";

const Details = () => {
  const [movieDetails, setMovieDetails] = useState({genres: []});
  const params = useParams();

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const movieData = await getMovieDetails(params.id);
        setMovieDetails(movieData);
      } catch (error) {
        console.error(error);
      }
    };
    fetchMovieDetails();
  }, [params.id]);

  return (
      <div className={s.details}>
        <DetailsPoster data={movieDetails} />
        <DetailsInfo data={movieDetails} />
      </div>
  );
};

export default Details;
