import styles from "./Wrapper.module.scss";
import { Card } from "../../index";
import { Link } from "react-router-dom";

const Wrapper = ({ movie }) => {
  const topEightMovies = movie.slice(0, 8);

  return (
      <div className={styles.wrapper}>
        {topEightMovies.map((currentMovie) => (
            <Link to={`/details/${currentMovie._id}`} key={currentMovie._id}>
              <Card data={currentMovie} />
            </Link>
        ))}
      </div>
  );
};

export default Wrapper;
