import s from "./Categories.module.scss";
import Container from "../Container/Container";

const Categories = ({category, setCategory, setSelectedId, genres}) => {
  const isCategorySelected = (value) => category === value;
  const handleCategoryClick = (e) => {
    setCategory(e.currentTarget.value);
    setSelectedId(e.currentTarget.name);

    console.log(e.currentTarget);
    console.log();
  }
  console.log(genres);
  return (
    <Container>
      <ul className={s.category}>
        {genres.slice(0, 8).map(({_id, name}) => (
          <li key={_id}>
            <label htmlFor={name.toLowerCase()} id={_id} className={category === name.toLowerCase() ? s.category__active : s.category__option}>
              {name}
              <input
                type="radio"
                id={name.toLowerCase()}
                name={_id}
                className={s.category__mark}
                value={name.toLowerCase()}
                checked={isCategorySelected(name.toLowerCase())}
                onChange={handleCategoryClick}
              />
            </label>
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default Categories;