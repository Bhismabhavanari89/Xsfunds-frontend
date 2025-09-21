import './Footer.css'
import React, { useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
function Footer() {
  return (
    <footer>
      <div className="legal-links">
        <a href="/tandc" data-discover="true" className="legal-link">
          Terms And Conditions
        </a>
        <a href="/privacy-policy" data-discover="true" className="legal-link">
          Privacy Policy
        </a>
      </div>
      <p>Xs Funds © 2025 - Not a registered SEBI advisor. Investments involve risk. Please review terms carefully.</p>
      <p><b>Disclaimer:</b> The investment risk in the portfolio is borne by the investor</p>
    </footer>
  );
}

export default Footer;
