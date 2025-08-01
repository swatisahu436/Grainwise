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
import Fiber from "../component/Fiber";
import RecipeSuggestions from "../component/RecipeSuggestions";
import Footer from "../component/Footer";
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
     RecipeSuggestions:useRef(null),
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
      <>
      <div className="body-container" ref={refs.home}>
        <div className="body-text">
        <h1>
        Taste the Future with <br /><span style={{ color: "green" }}>GrainWise</span>
        </h1>
        <p>
          Imagine a tortilla that's not just delicious, but also good for the planet. That's GrainWise. We harness the power of upcycled spent grain to create a sustainable and healthy ingredient solution for your business.
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
        </div>
        
        </div>
        <Choose />
        <Contact />
        </>
      <div ref={refs.products}><ProductPage /></div>
      <div ref={refs.sustainability}><SustainabilityPage /></div>
      <div ref={refs.caseStudies}><CaseStudy /></div>
      <div ref={refs.endorsements}><Taste /></div>
      <div ref={refs.recipes}><RecipeSuggestions/></div>
      <div ref={refs.about}><About /></div>
      <div ref={refs.collaboration}><SupplyChain /></div>
      <Fiber/>
      <SpentGrain />
      <Footer onNavClick={scrollToSection}></Footer>
    </>
  );
};
export default Body;