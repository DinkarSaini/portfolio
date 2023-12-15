// navbar.jsx
import React, { useState } from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className={`navbar ${showMenu ? 'responsive' : ''}`}>
      <div className="navbar-left">
        <Link to="/" className="dinkar">
          Dinkar
        </Link>
      </div>
      <div className={`navbar-right ${showMenu ? 'show' : ''}`} >
        <Link to="/home" onClick={toggleMenu}>
          Home
        </Link>
        <Link to="/skills" onClick={toggleMenu}>
          Skills
        </Link>
        <Link to="/resume" onClick={toggleMenu}>
          Resume
        </Link>
        <Link to="/about" onClick={toggleMenu}>
          About
        </Link>
      </div>
      <div className="menu-icon" onClick={toggleMenu}>
        <div className={`bar ${showMenu ? 'change' : ''}`}></div>
        <div className={`bar ${showMenu ? 'change' : ''}`}></div>
        <div className={`bar ${showMenu ? 'change' : ''}`}></div>
      </div>
    </nav>
  );
};

export default Navbar;
