import React from 'react';
import './Navbar1.css';
import lightThemeLogo from './images/logo1.png';
import magnifyingGlass from './images/magnifying-glass.svg' // import search glass
import { FaBars } from "react-icons/fa6";
import Sidebar from './Sidebar.js'
const Navbar1 = () => {
  return (
    <nav className="navbar">
      <div className='navbar-fabars-logo'>
        <div className="navbar-fabars">
          <FaBars className='fabars'  onClick={Sidebar}/>
        </div>

        <div className="navbar-logo">
          <a href="https://phenome.jax.org/">
            <img className="logo" src={lightThemeLogo} alt="NavbarLogo1"/>
          </a>
        </div>
      </div>


      <div className="navbar-search">
        <div className="search-box">
          <img className="search-glass" src={magnifyingGlass} alt="magnifying glass"/>
          <input className="search-text" type="text" placeholder="Search" />
        </div>
      </div>

      <div className='navbar-signin'>
        <button className="signin-button">Sign In</button>
      </div>
    </nav>
  );
};

export default Navbar1;