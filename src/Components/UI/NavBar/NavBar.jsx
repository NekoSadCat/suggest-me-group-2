import s from "./NavBar.module.scss";

import svgMaker from "../../../svgMaker";

const NavBar = () => {
  return (
    <div className={s.navBar}>
      <a href="/">Movies</a>
      <a href="/">TV Shows</a>
      <a href="/">
        Suggest me <span>{svgMaker("arrow", s.icon)}</span>{" "}
      </a>
    </div>
  );
};

export default NavBar;


