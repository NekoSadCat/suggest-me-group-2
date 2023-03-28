import s from "./Details.module.scss";
import { DetailsPoster, DetailsInfo } from "../../index";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getMovieDetails } from "../../../Api/Api";

const Details = () => {
  const [movie, setMovie] = useState({genres: []});
  const params = useParams();

  useEffect(() => {
    const fetchMovieDetails = async () => {
      const data = await getMovieDetails(params.id);
      setMovie(data);
      console.log(data.data.rating)
    };
    fetchMovieDetails();
  }, [params.id]);

  return (
    <div className={s.details}>
      <DetailsPoster data={movie} />
      <DetailsInfo data={movie} />
    </div>
  );
};

export default Details;