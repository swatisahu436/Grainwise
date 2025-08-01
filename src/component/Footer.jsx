import React, { useState } from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const Footer = ({ onNavClick }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = (key) => {
    if (onNavClick) {
      setMenuOpen(false); // optional if you have a collapsible footer in mobile
      onNavClick(key);
    }
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <div className="footer-logo">
            <h3>GrainWise</h3>
          </div>
          <p>
            Transforming brewery waste into sustainable, nutritious tortillas
            for a better future.
          </p>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li onClick={() => handleClick("products")}>Products</li>
            <li onClick={() => handleClick("sustainability")}>Sustainability</li>
            <li onClick={() => handleClick("caseStudies")}>Case Studies</li>
            <li onClick={() => handleClick("recipes")}>Recipes</li>
            <li onClick={() => handleClick("about")}>About Us</li>
            <li onClick={() => handleClick("collaboration")}>Collaboration</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contact Us</h4>
          <ul className="contact-list">
            <li><FaEnvelope /> info@grainwise.com</li>
            <li><FaPhone /> 07776665412</li>
            <li>
              <FaMapMarkerAlt /> 84 Courtenay Road, Maidstone ME15 6UN, Kent,
              United Kingdom
            </li>
          </ul>
        </div>
      </div>

      <hr />

      <div className="footer-bottom">
        <p>© 2025 GrainWise. All rights reserved. Making every grain count.</p>
      </div>
    </footer>
  );
};

export default Footer;
