import s from "./DetailsPoster.module.scss";

const DetailsPoster = ({ data }) => {
  const { backdrop, genres, title } = data;

  return (
      <div className={s.detailsPoster}>
        <div className={s.poster}>
          <img src={backdrop} alt={title} />

          <div className={s.info}>
            {genres && genres.length > 0 && (
                <span className={s.movieType}>{genres[0].name}</span>
            )}
            <h2 className={s.movieName}>{title}</h2>
          </div>
        </div>
      </div>
  );
};

export default DetailsPoster;
