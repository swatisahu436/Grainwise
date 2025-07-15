import React, { useState } from "react";
import { Link } from "react-router-dom";
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="head-container">
      <div className="logo">
        <h4>GrainWise</h4>
      </div>

      {/* Hamburger Button for Mobile */}
      <div className="menu-toggle" onClick={toggleMenu}>
        &#9776;
      </div>

      {/* Navigation Menu */}
      <nav className={`head-list ${menuOpen ? "open" : ""}`}>
        <ul>
          <li>Home</li>
          <li>Products</li>
          <li>Sustainability</li>
          <li>Case Studies</li>
          <li>Endorsements</li>
          <li>Recipes</li>
          <li>About Us</li>
          <li>Collaboration</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
