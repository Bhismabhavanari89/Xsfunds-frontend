import React, { useState, useEffect, useRef } from 'react';
import './Header.css';
import logo from '../assets/logo.jpeg';
import { HashLink as Link } from 'react-router-hash-link';
import { useNavigate } from 'react-router-dom'; // Add this import

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const navigate = useNavigate(); // For programmatic navigation

  const handleMobileMenuToggle = () => {
    setIsMenuOpen((prev) => !prev);
  };

  // Close menu and handle navigation
  const handleLinkClick = (path) => {
    setIsMenuOpen(false);
    
    // If it's a full route (not hash), navigate to top
    if (path && !path.includes('#')) {
      navigate(path, { replace: true });
      window.scrollTo(0, 0); // Scroll to top for new pages
    }
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

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
          <Link 
            to="/stockvsfd" 
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('/stockvsfd');
            }}
          >
            Stock Vs Fd Calculator
          </Link>
          <Link 
            to="/faqs" 
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('/faqs');
            }}
          >
            Frequently Asked Questions
          </Link>
        </div>
        <button
          className="mobileMenuToggle"
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          onClick={handleMobileMenuToggle}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? (
            <span className="closeIcon" aria-hidden="true">&times;</span>
          ) : (
            <span className="hamburgerIcon" aria-hidden="true">&#9776;</span>
          )}
        </button>
      </nav>
      <div 
        ref={menuRef}
        id="mobile-menu" 
        className={`mobileMenu ${isMenuOpen ? 'active' : ''}`} 
        aria-hidden={!isMenuOpen}
      >
        <Link to="/#home" tabIndex={isMenuOpen ? 0 : -1}>Home</Link>
        <Link to="/#about" tabIndex={isMenuOpen ? 0 : -1}>About</Link>
        <Link to="/#contact" tabIndex={isMenuOpen ? 0 : -1}>Contact</Link>
        <a 
          href="/stockvsfd" 
          tabIndex={isMenuOpen ? 0 : -1}
          onClick={(e) => {
            e.preventDefault();
            handleLinkClick('/stockvsfd');
          }}
        >
          Stock Vs Fd Calculator
        </a>
        <a 
          href="/faqs" 
          tabIndex={isMenuOpen ? 0 : -1}
          onClick={(e) => {
            e.preventDefault();
            handleLinkClick('/faqs');
          }}
        >
          Frequently Asked Questions
        </a>
      </div>
    </header>
  );
}

export default Header;
