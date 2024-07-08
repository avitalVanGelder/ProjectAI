import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.scss';

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className={`navbar ${isOpen ? 'open' : ''}`}>
      <div className="navbar-logo">
        <Link to="/" onClick={closeMenu}>Garbage Classifier</Link>
      </div>
      <div className="navbar-links">
        <ul>
          <li>
            <Link to="/home" onClick={closeMenu}>Home</Link>
          </li>
          <li>
            <Link to="/parent" onClick={closeMenu}>Classify</Link>
          </li>
          <li>
            <Link to="/about" onClick={closeMenu}>About</Link>
          </li>
          <li>
            <Link to="/contact" onClick={closeMenu}>Contact</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-toggle" onClick={toggleMenu}>
        <div className={`bar ${isOpen ? 'open' : ''}`}></div>
        <div className={`bar ${isOpen ? 'open' : ''}`}></div>
        <div className={`bar ${isOpen ? 'open' : ''}`}></div>
      </div>
    </nav>
  );
};

export default NavBar;


