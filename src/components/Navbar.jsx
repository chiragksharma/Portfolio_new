import React from 'react';
import './Navbar.css'; // Make sure to create appropriate CSS for styling
import { Link } from 'react-router-dom';


const Navbar = () => {

  return (

    <nav className="navbar z-50">
      <div className="navbar-links">
        <Link to="/about-me" className="navbar-link">About</Link>
        <Link to="/projects" className="navbar-link">Projects</Link>
      </div>
      <div className="navbar-logo">
      <a href="/" className="navbar-link">
          <img src="/logo_1.png" alt="Logo" className="navbar-logo-image " />
        </a>
      </div>
      <div className="navbar-links">
        <Link to="/blog-home" className="navbar-link">Blogs</Link>
        <Link to="/contact" className="navbar-link">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
