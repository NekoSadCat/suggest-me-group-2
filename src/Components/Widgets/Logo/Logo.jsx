import s from "./Logo.module.scss";
import logo from "../../../assets/images/Icon.svg";
// import sprite from "../../../assets/images/sprite.svg";
// import svgMaker from "../../../svgMaker";

const Logo = () => {
  return (
    <div className={s.logo}>
      {/* {svgMaker("icon-home3", s.icon)}
      {svgMaker("icon-star-empty", s.icon)} */}

      <img src={logo} alt="logo" />
    </div>
  );
};

export default Logo;
