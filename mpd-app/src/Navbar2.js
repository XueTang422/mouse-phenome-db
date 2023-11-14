import React from 'react';
import './Navbar2.css';
import lightThemeLogo from './images/logo2.png';
import magnifyingGlass from './images/magnifying-glass.svg'

const Navbar2 = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="https://phenome.jax.org/">
          <img className="logo" src={lightThemeLogo} alt="NavbarLogo2"/>
        </a>
      </div>
      <ul className="navbar-menu">
        <li className="navbar-item"><a href="#">Get Started</a></li>
        {/* TO-DO: Modify href placeholder navigating to a specific url */}
        <li className="navbar-item">
          <a href="#">
            Explore<i class="arrow down"></i>
          </a>
        </li>
        <li className="navbar-item">
          <a href="#">
            Analyze<i class="arrow down"></i>
          </a>
        </li>
        <li className="navbar-item"><a href="#">Contribute</a></li>
        <li className="navbar-item"><a href="#">Download</a></li>
        <li className="navbar-item"><a href="#">About</a></li>
      </ul>
      <div className="navbar-search-signin">
        <div className="search-box">
          <img className="search-glass" src={magnifyingGlass} alt="magnifying glass"/>
          <input className="search-text" type="text" placeholder="Search" />
        </div>
        <button className="sign-in-button">Sign In</button>
      </div>
    </nav>
  );
};

export default Navbar2;