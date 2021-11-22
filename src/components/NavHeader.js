import React from "react";
import le from '../img/header_sound_wave.gif'
import '../sass/main.scss'

const NavHeader = () => {
  return (
      <nav className="navbar">
        <a href="/" className="navbar__logo">LOGO</a>
        <div className="navbar__bars">
            <div className="navbar__menu">
                <a href="/" className="navbar__menu--links">Home</a>
                <a href="/" className="navbar__menu--links">Тест</a>
                <a href="/" className="navbar__menu--links">Test</a>
                <a href="/" className="navbar__menu--links">TT_22</a>
            </div>
        </div>
      </nav>
  );
};

export default NavHeader;
