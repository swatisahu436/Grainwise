import React from "react";
import { LiaCertificateSolid } from "react-icons/lia";
const  Taste = () => {
  return (
    <div className="endorsement-container">
      <h2 className="endorsement-title">Taste Approved by Culinary Specialists</h2>
      <p className="endorsement-subtitle">
        At GrainWise, we're incredibly proud of the positive reception our upcycled tortillas have<br/> received
        from culinary professionals.
      </p>

      <div className="endorsement-card">
        <div className="endorsement-header">
          <div className="endorsement-avatar" >
        
            <img src="/chief.jpg"></img>
            <h3 className="chef-name">Chef Saravanan Palanipadichami</h3>
            <p className="chef-title">A Culinary Visionary</p>
          </div>
        </div>

        <div className="endorsement-content">
          <div className="endorsement-left">
            <h4>Professional Background</h4>
            <p>
              Chef Saravanan Palanipadichami is a distinguished culinary professional with
              over a decade of international experience in leading five-star hotels and a
              passion for redefining the art of food. Beyond his impressive executive chef
              roles, Chef Saravanan is a celebrated culinary consultant, known for his
              expertise in food photography, innovative food promotions, and deep
              understanding of manufacturing and R&D processes within the food industry.
            </p>
            <ul>
              <li><LiaCertificateSolid style={{color: "green", fontSize: "4rem"}}/> Certified internal auditor for ISO 22000</li>
              <li><LiaCertificateSolid style={{color: "green", fontSize: "4rem"}}/> FSSAI master trainer</li>
              <li><LiaCertificateSolid style={{color: "green", fontSize: "4rem"}}/> Senior member of WACS, IFCA, and SICA</li>
            </ul>
          </div>

          <div className="endorsement-right">
            <h4>Chef Saravanan's Endorsement</h4>
            <p>
              “As a chef constantly exploring new ingredients and sustainable practices, I’m
              always on the lookout for products that genuinely innovate and deliver on
              taste. The GrainWise tortillas instantly stood out.
            </p>
            <p>
              What truly excites me about GrainWise is their visionary approach to upcycling.
              The idea of transforming brewers' spent grain – a valuable resource often
              overlooked – into such a versatile and delicious ingredient is simply brilliant.
            </p>
            <p>
              From a culinary perspective, these tortillas possess a unique character. They
              bring a delightful, subtle richness and a robust texture that holds up
              beautifully in various applications. They’re not just a sustainable choice;
              they’re a superior ingredient that adds depth and interest to any dish.”
            </p>
            <p className="chef-sign">
              – Chef Saravanan Palanipadichami <br />
              <span>Culinary Consultant & Executive Chef</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Taste;
