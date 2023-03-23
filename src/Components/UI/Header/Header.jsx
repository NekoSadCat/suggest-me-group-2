import React from "react";
import { Logo, NavBar } from "../..";

import s from "./Header.module.scss";

export const Header = () => {
  return (
      <header className={s.header}>
        <div className={s.container}>
          <div className={s.header__logo}>
            <Logo></Logo>
          </div>
          <div className={s.header__navBar}>
            <NavBar></NavBar>
          </div>
        </div>
      </header>
  );
};

export default Header;
