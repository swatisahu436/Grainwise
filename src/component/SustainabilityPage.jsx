import React from "react";
import { CiHeart } from "react-icons/ci";
import { FaRecycle } from "react-icons/fa";
import { LuChefHat } from "react-icons/lu";
import { BsPersonFill } from "react-icons/bs";
import { FaCanadianMapleLeaf } from "react-icons/fa";
const SustainabilityPage = () => {
  return (
    <div className="sustainability-page">
    <div className="sustainability">
      <header className="hero">
        <h1>GrainWise – Where Every Grain Makes a Difference</h1>
        <p>
          Imagine a world where food is both delicious and sustainable. At GrainWise, we’re making that a<br/> reality because we know every grain
          counts.
        </p>
        <img src="/mainbg.jpg" alt="Vegetables" />
      </header>

      <section className="goals">
        <div className="goal-card">
          <span><BsPersonFill style={{ color: "green", fontSize: "5.8rem"}} /></span>
          <p>To help feed our growing population</p>
        </div>
        <div className="goal-card">
          <span><FaCanadianMapleLeaf style={{ color: "green", fontSize: "5.8rem"}} /></span>
          <p>To consume less and protect our planet</p>
        </div>
        <div className="goal-card">
          <span> < FaRecycle style={{ color: "green", fontSize: "5.8rem"  }}/></span>
          <p>To preserve farmland and foster more nature</p>
        </div>
        <div className="goal-card">
          <span><LuChefHat style={{ color: "green", fontSize: "5.9rem" }} /></span>
          <p>And to make food taste truly exceptional</p>
        </div>
      </section>

      <section className="journey">
        <h2>From Grain to Tortilla: Our Sustainable Journey</h2>
        <div className="journey-steps">
          <div className="step-card">
            <div className="step-number">1</div>
            <h3>Brewery</h3>
            <img src="/brewery.jpg" alt="Brewery" />
            <p>
              Starts with high quality grains. Brewing process extracts sugars
              for beer. Spent Grain is the nutritious byproduct.
            </p>
          </div>
          <div className="step-card">
            <div className="step-number">2</div>
            <h3>GrainWise Processing</h3>
            <img src="/spent.jpg" alt="Processing" />
            <p>
              We collect the spent grain and transform it into a unique, high
              fiber, high protein flour.
            </p>
          </div>
          <div className="step-card">
            <div className="step-number">3</div>
            <h3>GrainWise Tortillas</h3>
            <img src="/tortilla.jpg" alt="Tortillas" />
            <p>
              Our specialized flour is used to craft delicious and sustainable
              tortillas. Ready for your table, contributing to a healthier
              planet.
            </p>
          </div>
        </div>
      </section>

      <section className="impact">
        <h2>Our Environmental Impact</h2>
        <div className="impact-cards">
          <div className="impact-card">
            <h3>The Problem We’re Solving</h3>
            <ul>
              <li>30% of all food produced never makes it to our plates</li>
              <li>70% of deforestation and biodiversity loss linked to agriculture</li>
              <li>25% of global greenhouse gas emissions from food & agriculture</li>
              <li>Half of habitable land is used for farming</li>
            </ul>
          </div>
          <div className="impact-card">
            <h3>Our Solution</h3>
            <ul>
              <li>For every 1kg of flour replaced, we save 2m² of land</li>
              <li>Conserves water and reduces CO₂ emissions</li>
              <li>Prevents ecological damage from fertilizers and pesticides</li>
              <li>Transforms 40 million tons of annual brewery waste into valuable food</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
    </div>
  );
};

export default SustainabilityPage;
