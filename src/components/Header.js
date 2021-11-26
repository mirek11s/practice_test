import logo from "../img/Artberry_logo_cut.png";

import "../sass/main.scss";
import NavHeader from "./NavHeader";

const Header = () => {
  return (
    <header className="header">
        
      <NavHeader />

      <div className="header__logo-box">
        <img src={logo} alt="Logo" className="header__logo" />
      </div>

      <div className="header__text-box">
        <h1 className="heading-primary">
          <span className="heading-primary--main">With music</span>
          <span className="heading-primary--sub">is where life begins</span>
        </h1>

        <a href="/" className="btn btn--animated">
          Learn more
        </a>
      </div>
    </header>
  );
};

export default Header;
