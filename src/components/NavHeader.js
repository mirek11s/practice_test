import React from "react";
import le from '../img/header_sound_wave.gif'
import '../sass/main.scss'

const NavHeader = () => {
  return (
      <nav className="navbar">
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Team</a>
          </li>
          <li>
            <a href="#">Road Map</a>
          </li>
          <li>
            <a href="#">FAQ</a>
          </li>
          <li>
            <a href="#">
              <span>Use DAPP</span>
            </a>
          </li>
        </ul>
      </nav>
  );
};

export default NavHeader;
