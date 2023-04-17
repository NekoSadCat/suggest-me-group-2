import React from 'react';
import {Logo, NavBar} from '../../Components';


import s from'./header.module.scss';

export const Header = () => {
  return (
    <header className={s.header}>
            <div className={s.header__logo}>
                <Logo />
            </div>
            <div className={s.header__navBar}>
                <NavBar />
            </div>
    </header>
  )
}

export default Header;