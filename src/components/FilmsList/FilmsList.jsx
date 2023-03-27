import s from "./FilmsList.module.scss";
import Film from "../Film/Film";
const FilmsList = ({movieList}) => (
  <div className={s.filmsList}>
    {movieList.slice(0, 8).map(({title, _id, posterUrl, rating}) => (
      <Film key={_id} title={title} id={_id} img={posterUrl} rate={rating.toFixed(1)}/>
    ))}
  </div>
);

export default FilmsList;
