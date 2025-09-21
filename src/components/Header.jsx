import React, { useState } from 'react';
import './Header.css';
import logo from '../assets/logo.jpeg';
import { HashLink as Link } from 'react-router-hash-link';
function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header className="header">
      <nav className="nav">
        <Link to="/#home" className="logo">
          <img src={logo} alt="Company Logo" />
        </Link>
        <div className="navLinks">
          <Link to="/#home">Home</Link>
          <Link to="/#about">About</Link>
          <Link to="/#contact">Contact</Link>
          <Link to="/stockvsfd">Stock Vs Fd Calculator</Link>
        </div>
        <button
          className="mobileMenuToggle"
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          onClick={handleMobileMenuToggle}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? (
            <span className="closeIcon" aria-hidden="true">&times;</span> // Close icon ×
          ) : (
            <span className="hamburgerIcon" aria-hidden="true">&#9776;</span> // Hamburger icon ☰
          )}
        </button>
      </nav>
      <div id="mobile-menu" className={`mobileMenu ${isMenuOpen ? 'active' : ''}`} aria-hidden={!isMenuOpen}>
        <Link to="/#home" tabIndex={isMenuOpen ? 0 : -1}>Home</Link>
        <Link to="/#about" tabIndex={isMenuOpen ? 0 : -1}>About</Link>
        <Link to="/#contact" tabIndex={isMenuOpen ? 0 : -1}>Contact</Link>
        <Link to="/stockvsfd" tabIndex={isMenuOpen ? 0 : -1}>Stock Vs Fd Calculator</Link>
      </div>
    </header>
  );
}

export default Header;
