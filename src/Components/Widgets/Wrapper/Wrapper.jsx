import s from "./Wrapper.module.scss";
import { Card } from "../../index";
import { Link } from "react-router-dom";
import { getMovies } from "../../../apiConfig/apiRequest";


import { useEffect, useState } from "react";

const Wrapper = () => {

  const [movie, setMovie] = useState([]);


  useEffect(() => {
    const fetchPopularMovies = async () => {

      const data = await getMovies();

      setMovie(data);
    };
    fetchPopularMovies();
  }, []);

  return (
      <div className={s.Wrapper}>

        {movie.map((movie) => (

            <Link to={`/details/${movie._id}`} key={movie._id}>
              <Card data={movie} />
            </Link>
        ))}
      </div>
  );
};

export default Wrapper;
