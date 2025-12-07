import React, { useState, useEffect, useRef, useCallback } from 'react';
import './Header.css';
import logo from '../assets/logo.jpeg';
import { HashLink as Link } from 'react-router-hash-link';
import { useNavigate } from 'react-router-dom';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const navigate = useNavigate();

  // FIXED: Remove isMenuOpen from deps - use functional update
  const handleMobileMenuToggle = useCallback((e) => {
    e.stopPropagation();
    setIsMenuOpen(prev => !prev);
  }, []); // Empty deps - functional update doesn't need state

  const handleLinkClick = useCallback((path) => {
    setIsMenuOpen(false);
    
    if (path && !path.includes('#')) {
      navigate(path, { replace: true });
      window.scrollTo(0, 0);
    }
  }, [navigate]);

  // FIXED: Click outside handler
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && 
          !menuRef.current.contains(event.target) && 
          !event.target.closest('.mobileMenuToggle')) {
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
        {/* FIXED: Toggle button - always clickable */}
        <button
          className="mobileMenuToggle"
          onClick={handleMobileMenuToggle}
          style={{
            zIndex: 9999,
            position: 'relative',
            pointerEvents: 'auto'
          }}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMenuOpen}
          type="button"
        >
          {isMenuOpen ? (
            <span 
              className="closeIcon" 
              style={{ pointerEvents: 'none' }}
              aria-hidden="true"
            >
              ×
            </span>
          ) : (
            <span 
              className="hamburgerIcon" 
              style={{ pointerEvents: 'none' }}
              aria-hidden="true"
            >
              ☰
            </span>
          )}
        </button>
      </nav>
      {/* FIXED: Remove aria-hidden & use inert polyfill approach */}
      <div 
        ref={menuRef}
        id="mobile-menu" 
        className={`mobileMenu ${isMenuOpen ? 'active' : ''}`}
        role="menu"
        aria-labelledby="mobile-menu-toggle"
        tabIndex={isMenuOpen ? 0 : -1}
        style={{ 
          zIndex: 9998,
          ...(isMenuOpen ? {} : { display: 'none' }) // Hide when closed
        }}
      >
        <Link 
          to="/#home" 
          role="menuitem"
          tabIndex={isMenuOpen ? 0 : -1}
          onClick={() => handleLinkClick('/#home')}
        >
          Home
        </Link>
        <Link 
          to="/#about" 
          role="menuitem"
          tabIndex={isMenuOpen ? 0 : -1}
          onClick={() => handleLinkClick('/#about')}
        >
          About
        </Link>
        <Link 
          to="/#contact" 
          role="menuitem"
          tabIndex={isMenuOpen ? 0 : -1}
          onClick={() => handleLinkClick('/#contact')}
        >
          Contact
        </Link>
        <a 
          href="/stockvsfd" 
          role="menuitem"
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
          role="menuitem"
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
