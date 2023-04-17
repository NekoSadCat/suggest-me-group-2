import React from "react";

import s from './navBar.module.scss';

import svgMaker from "../../svgMaker";

const NavBar = () => {
  return (
    <div className={s.navBar}>
      <a href="/">Movies</a>
      <a href="/">TV Shows</a>
      <a href="/">Suggest me <sub>{svgMaker("arrow", s.icon)}</sub> </a>
    </div>
  );
};

export default NavBar;
