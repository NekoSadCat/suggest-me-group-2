import s from "./Navbar.module.scss";
import right from "../../../assets/images/IconNavVector.svg"

const Navbar = () => {
  return (
    <div className={s.navbar}>
      <a href="/" className={s.link}>
        Movies
      </a>
      <a href="/" className={s.link}>
        TV Shows
      </a>
      <a href="/" className={s.link}>
        Suggest me
      </a>
      <img src={right} alt="NavVector"/>
    </div>
  )
}

export default Navbar;