import React,{useState} from 'react';
import './Navbar1.css';
import lightThemeLogo from './images/logo1.png';
import magnifyingGlass from './images/magnifying-glass.svg' // import search glass
import { FaBars } from "react-icons/fa6";
import Sidebar from "./Sidebar"
import { SidebarData } from "./SidebarData";
const Navbar1 = () => {

  const [sidebar, setSidebar]=useState(false)

  const showSidebar =()=> setSidebar(!sidebar)


  return (
    <>
    <nav className="navbar-dark">
      <div className='navbar-fabars-logo'>
        <div className="navbar-fabars">
          <FaBars className='fabars'  onClick={showSidebar}/>
        </div>

        <div className="navbar-logo">
          <a href="https://phenome.jax.org/">
            <img className="logo" src={lightThemeLogo} alt="NavbarLogo1"/>
          </a>
        </div>
      </div>


      <div className="navbar-dark-search">
        <div className="dark-search-box">
          <img className="search-glass" src={magnifyingGlass} alt="magnifying glass"/>
          <input className="search-text" type="text" placeholder="Search" />
        </div>
      </div>

      <div className='navbar-signin'>
        <button className="signin-button">Sign In</button>
      </div>
    </nav>

    <nav className={sidebar? "sidebar active": "sidebar"} >
      <ul>
      { SidebarData.map((item, index) => <Sidebar key={index} item={item} status={sidebar}/>) }
      </ul>

    </nav>

    </>
  );
};

export default Navbar1;