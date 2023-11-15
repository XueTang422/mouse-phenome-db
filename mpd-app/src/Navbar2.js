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
            <a href="#">Explore<i class="arrow down"></i></a>
            <div className="dropdown-content">
                <div className="dropdown-section">
                    <a href="#">Centers</a>
                    <a href="#">Investigators</a>
                    <a href="#">Measures</a>
                    <div className="non-clickable-item">Ontologies</div>
                        <div className="submenu">
                            <a href="#">Vertebrate Trait (VT)</a>
                            <a href="#">Adult Mouse Anatomy (MA)</a>
                            <a href="#">Mammalian Phenotype (MP)</a>
                        </div>
                    <div className="non-clickable-item">Panels & Populations</div>
                        <div className="submenu">
                            <a href="#">Collaborative Cross (CC)</a>
                            <a href="#">Diversity Outbred (DO)</a>
                            <a href="#">F1 Hybrid Panels</a>
                            <a href="#">Inbred Strains</a>
                            <a href="#">Recombinant Inbred Strains</a>
                        </div>
                    <a href="#">See All</a>
                </div>
                <div className="dropdown-section">
                    <a href="#">Procedures & Protocols</a>
                    <a href="#">Publications</a>
                    <a href="#">QTL Archive</a>
                    <a href="#">Studies</a>
                    <a href="#">Strains</a>
                </div>
            </div>
        </li>
        <li className="navbar-item"><a href="#">Analyze<i class="arrow down"></i></a>
            <div className="dropdown-content">
                <div className="dropdown-section">
                    <div className="non-clickable-item">Measures</div>
                        <div className="submenu">
                            <a href="#">Compare Metadata</a>
                            <a href="#">Compare Curves</a>
                            <a href="#">Side-by-Side Curves</a>
                            <a href="#">Ratios & Differences</a>
                            <a href="#">Scatterplots & Correlations</a>
                        </div>
                <div className="dropdown-section">
                    <div className="non-clickable-item">Strains</div>
                        <div className="submenu">
                            <a href="#">Find Strains by Criteria Fit</a>
                            <a href="#">Strain Means Table</a>
                        </div>
                    </div>
                        <a href="#">GxL Replicability</a>
                        <a href="#">GWAS Meta-Analysis</a>
                        <a href="#">MUSter Genotype Search</a>
                </div>
            </div>
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