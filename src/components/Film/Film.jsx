import s from "./Film.module.scss";
import Rate from "../Rate/Rate";

import {Link} from "react-router-dom";


const Film = ({id, title, rate, img}) => (
  <Link className={s.film} to={`/details/${id}`}>
    <div className={s.film__rate}>
      <Rate rate={rate} />
    </div>
    <img
      className={s.film__image}
      src={img}
      alt="poster"
    />
    <h3 className={s.film__title}>{title}</h3>
  </Link>
);

export default Film;
