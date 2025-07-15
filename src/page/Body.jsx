import React from "react";
import Choose from "../component/Choose";
import Contact from "../component/Contact";
import ProductPage from "../component/ProductPage";
import SustainabilityPage from "../component/SustainabilityPage";
import SpentGrain from "../component/SpentGrain";
import CaseStudy from "../component/CaseStudy";
import Taste from "../component/Taste";
import About from "../component/About";
import SupplyChain from "../component/SupplyChain";
const Body=()=>{
    return(
        <>
        <div className="body-container">
            <div className="body-text">
                <h1>Partner With Us: Taste<br/> the Future with <br/><span style={{color:'greenyellow'}}>GrainWise</span></h1>
                <p>Imagine a tortilla that's not just delicious, but also good for the planet. That's GrainWise. We harness the power of upcycled spent grain to create a sustainable and healthy ingredient solution for your business.</p>
                <div className="body-list">
                <ul>
                    <li>Sustainable</li>
                    <li>Healthy</li>
                    <li>Upcycled</li>
                </ul>
            </div>
            </div>
            <div className="body-img">
                <img src="tortilla-stack.jpg" />
            </div>
            
        </div>
        <Choose/>
        <Contact/>
        <ProductPage/>
     
        <SustainabilityPage/>
           <CaseStudy/>
           <Taste/>
           <About/>
           <SupplyChain/>
        <SpentGrain/>
        </>
    )
};
export default Body;