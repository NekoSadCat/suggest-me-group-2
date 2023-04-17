import s from "./Header.module.scss";
import Logo from "../Logo/Logo";
import Navbar from "../Navbar/Navbar";

const Header = () => {
  return (
    <header className={s.header}>
      <div className={s.container}>
        <Logo />
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
