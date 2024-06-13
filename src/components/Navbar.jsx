import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar z-50">
      <div className="navbar-section">
        <div className="navbar-links ">
          <Link to="/about-me" className="navbar-link">About</Link>
          <Link to="/projects" className="navbar-link">Projects</Link>
        </div>
      </div>
      <div className="navbar-logo">
        <a href="/" className="navbar-link">
          <img src="/logo_1.png" alt="Logo" className="navbar-logo-image" />
        </a>
      </div>
      <div className="navbar-section ">
        <div className="navbar-links">
          <Link to="/blog-home" className="navbar-link">Blogs</Link>
          <Link to="/contact" className="navbar-link">Contact</Link>
        </div>
      </div>
      <div className="menu-toggle" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className={`navbar-links mobile-version ${menuOpen ? 'active' : ''}`}>
        <Link to="/about-me" className="navbar-link">About</Link>
        <Link to="/projects" className="navbar-link">Projects</Link>
        <Link to="/blog-home" className="navbar-link">Blogs</Link>
        <Link to="/contact" className="navbar-link">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
