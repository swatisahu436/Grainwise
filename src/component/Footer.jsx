import React from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
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
            <li>Products</li>
            <li>Sustainability</li>
            <li>Case Studies</li>
            <li>Recipes</li>
            <li>About Us</li>
            <li>Collaboration</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contact Us</h4>
          <ul className="contact-list">
            <li>
              <FaEnvelope /> info@grainwise.com
            </li>
            <li>
              <FaPhone /> 07776665412
            </li>
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
