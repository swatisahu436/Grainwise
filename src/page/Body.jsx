import React, { useRef } from "react";
import Choose from "../component/Choose";
import Contact from "../component/Contact";
import ProductPage from "../component/ProductPage";
import SustainabilityPage from "../component/SustainabilityPage";
import SpentGrain from "../component/SpentGrain";
import CaseStudy from "../component/CaseStudy";
import Taste from "../component/Taste";
import About from "../component/About";
import SupplyChain from "../component/SupplyChain";
import Header from "../component/Header";
const Body = () => {
  const refs = {
    home: useRef(null),
    products: useRef(null),
    sustainability: useRef(null),
    caseStudies: useRef(null),
    endorsements: useRef(null),
    recipes: useRef(null),
    about: useRef(null),
    collaboration: useRef(null),
  };

  const scrollToSection = (key) => {
    const element = refs[key]?.current;
    if (element) {
      const headerOffset = 80; // Adjust based on your header height
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <Header onNavClick={scrollToSection} />
      <div className="body-container" ref={refs.home}><div className="body-text">
          <h1>
            Partner With Us: Taste<br /> the Future with <br /><span style={{ color: "greenyellow" }}>GrainWise</span>
          </h1>
          <p>
            Imagine a tortilla that's not just delicious, but also good for the planet. That's GrainWise...
          </p>
          <div className="body-list">
            <ul>
              <li>Sustainable</li>
              <li>Healthy</li>
              <li>Upcycled</li>
            </ul>
          </div>
        </div>
        <div className="body-img">
          <img src="tortilla-stack.jpg" alt="Tortilla Stack" />
        </div></div>
      <div ref={refs.products}><ProductPage /></div>
      <div ref={refs.sustainability}><SustainabilityPage /></div>
      <div ref={refs.caseStudies}><CaseStudy /></div>
      <div ref={refs.endorsements}><Taste /></div>
      <div ref={refs.about}><About /></div>
      <div ref={refs.collaboration}><SupplyChain /></div>
      <div ref={refs.recipes}><SpentGrain /></div>
    </>
  );
};
export default Body;