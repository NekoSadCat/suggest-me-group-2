import s from "./Card.module.scss";
import { Mark } from "../..";

const Card = ({ data }) => {

    const { posterUrl, rating, title } = data;

    return (
        <div className={s.card}>
            <div className={s.image}>

                <img src={posterUrl} alt={title} />


                <Mark markNum={rating} />
            </div>


            <div className={s.title}>{title}</div>
        </div>
    );
};

export default Card;
