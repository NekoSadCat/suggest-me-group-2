import s from "./Card.module.scss";
import { Mark } from "../..";


const Card = ({data}) => {

  return (
    <div className={s.Card}>
      <div className={s.image}>
      <img src={data.posterUrl} alt="" />
      </div>
        <div className={s.mark}>
          <Mark markNum={data.rating} />
        </div>
      <div className={s.filmName}>{data.title}
      </div>
    </div>
  );
};

export default Card;
