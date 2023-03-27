import Container from "../Container/Container";

import s from "./FilmCover.module.scss"

const FilmCover = ({film}) => {
  return (
    <div className={s.filmCover}>
      <Container>
        <section className={s.filmCover__image}>
          <img src={film.backdrop} alt="poster" className={s.filmCover__poster}/>
          <div className={s.filmCover__info}>
            <span className={s.filmCover__action}>
              Action
            </span>

            <h1 className={s.filmCover__title}>
              {film.title}
            </h1>
          </div>
        </section>
      </Container>
    </div>
  );
};

export default FilmCover;
