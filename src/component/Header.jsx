import React, { useState } from "react";

const Header = ({ onNavClick }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const handleClick = (key) => {
    setMenuOpen(false); // close menu after click (for mobile)
    onNavClick(key);
  };

  return (
    <header className="head-container">
      <div className="logo">
        <h4>GrainWise</h4>
      </div>

      <div className="menu-toggle" onClick={toggleMenu}>
        &#9776;
      </div>

      <nav className={`head-list ${menuOpen ? "open" : ""}`}>
        <ul>
          <li onClick={() => handleClick("home")}>Home</li>
          <li onClick={() => handleClick("products")}>Products</li>
          <li onClick={() => handleClick("sustainability")}>Sustainability</li>
          <li onClick={() => handleClick("caseStudies")}>Case Studies</li>
          <li onClick={() => handleClick("endorsements")}>Endorsements</li>
          <li onClick={() => handleClick("recipes")}>Recipes</li>
          <li onClick={() => handleClick("about")}>About Us</li>
          <li onClick={() => handleClick("collaboration")}>Collaboration</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
