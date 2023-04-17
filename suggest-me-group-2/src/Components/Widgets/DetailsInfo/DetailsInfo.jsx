import s from "./DetailInfo.module.scss";
import { Mark } from "../../index";

const DetailsInfo = ({data}) => {
  return (
    <div className={s.detailInfo}>
      <div className={s.left}>
        <img src={data.posterUrl} alt="" />
      </div>
      <div className={s.right}>
        <div className={s.qoute}>{data.tagline}</div>
        <div className={s.desc}>{data.description}</div>
        <Mark markNum={data.rating} />
        <div className={s.smallInfo}>
          <span className={s.infoType}>Type</span>
          <span className={s.infoTypeResult}>{data.type}</span>
        </div>
        <div className={s.smallInfo}>
          <span className={s.infoType}>Release Date:</span>
          <span className={s.infoTypeResult}>{data.releaseDate}</span>
        </div>
        <div className={s.smallInfo}>
          <span className={s.infoType}>Run time</span>
          <span className={s.infoTypeResult}>{data.runtime}</span>
        </div>
        <div className={s.smallInfo}>
          <span className={s.infoType}>Genres</span>
          <span className={s.infoTypeResult}>
            {data.genres && data.genres.map((genre) => genre.name).join(", ")}
          </span>
        </div>
      </div>
    </div>
  );
};

export default DetailsInfo;
