import s from "./FilmInfo.module.scss";
import Container from "../Container/Container";
import Rate from "../Rate/Rate";

const FilmInfo = ({film}) => {
  return (
    <Container>
      <div className={s.filmInfo}>
        <section className={s.filmInfo__picture}>
          <img src={film?.posterUrl} alt="Avengers Endgame" className={s.filmInfo__image} />
        </section>
        <section className={s.filmInfo__describe}>
          <h2 className={s.filmInfo__title}>
            {film?.tagline}
          </h2>

          <p className={s.filmInfo__description}>
            {film?.description}
          </p>

          <Rate rate={film.vote_average}/>

          <div className={s.filmInfo__info}>
            <h3 className={s.filmInfo__category}>
              Type
            </h3>

            <p className={s.filmInfo__text}>
              {film?.type}
            </p>
          </div>

          <div className={s.filmInfo__info}>
            <h3 className={s.filmInfo__category}>
              Release Date:
            </h3>
            <p className={s.filmInfo__text}>
              {film?.releaseDate}
            </p>
          </div>

          <div className={s.filmInfo__info}>
            <h3 className={s.filmInfo__category}>
              Run time
            </h3>
            <p className={s.filmInfo__text}>
              {film?.runtime}
            </p>
          </div>

          <div className={s.filmInfo__info}>
            <h3 className={s.filmInfo__category}>
              Genres
            </h3>
            <p className={s.filmInfo__text}>
              {film.genres && film.genres.map((genre) => genre.name).join(", ")}
            </p>
          </div>
        </section>
      </div>
    </Container>
  );
};

export default FilmInfo;
