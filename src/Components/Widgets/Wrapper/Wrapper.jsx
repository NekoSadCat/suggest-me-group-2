import s from "./Wrapper.module.scss";
import { Card } from "../../index";
import { Link } from "react-router-dom";

const Wrapper = ({movie}) => {
  return (
    <div className={s.Wrapper}>
      {movie.slice(0,8).map((movie) => (
        <Link to={`/details/${movie._id}`} key={movie._id}>
           <Card data={movie} />
        </Link>  
      ))}
    </div>
  );
};

export default Wrapper;