import './Footer.css'
import React, { useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
function Footer() {
  return (
    <footer>
      <div className="legal-links">
        <div className="legal-link">
          <Link to="/tandc">Terms And Conditions</Link>
        </div>
        <div className="legal-link">
          <Link to="/privacy-policy">Privacy Policy</Link>
        </div>
        <div className="legal-link">
          <Link to="/blogs">Blogs HomePage</Link>
        </div>
        <div className="legal-link">
          <Link to="/blog">Blog</Link>
        </div>
      </div>
      <p>Xs Funds © 2025 - Not a registered SEBI advisor. Investments involve risk. Please review terms carefully.</p>
      <p><b>Disclaimer:</b> The investment risk in the portfolio is borne by the investor</p>
    </footer>
  );
}

export default Footer;
