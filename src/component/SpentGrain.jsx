import React from "react";
import { FaLeaf, FaCheckCircle } from "react-icons/fa";

const SpentGrain = () => {
  return (
    <div className="spentgrain-page">
      <section className="intro">
        <h1>
          The Secret Ingredient Behind GrainWise Tortillas:<br/> Brewer's Spent Grain
        </h1>
        <p>
          You might not have heard of it, but one of the most exciting ingredients shaping
          the future<br/>of sustainable food is also the star of our GrainWise tortillas:
          Brewer's Spent Grain (BSG).
        </p>
      </section>

      <section className="magic-section">
        <div className="magic-text">
          <h2>What is this "Spent Grain" Magic?</h2>
          <p>
            Every time a brewer crafts a batch of beer, they unlock the goodness
            from grains like barley, extracting their sugars. What’s left behind
            isn’t waste; it’s a treasure trove of nutrition: the “spent grain”.
          </p>
          <p>
            While its sugars have been extracted for beer production, this grain
            retains incredible nutritional value — packed with fiber, protein,
            and essential nutrients that would otherwise go to waste.
          </p>
          <ul>
            <li><FaCheckCircle /> 40 million tons produced annually worldwide</li>
            <li><FaCheckCircle /> Rich in fiber, protein, and essential nutrients</li>
            <li><FaCheckCircle /> One of the largest side streams in the food industry</li>
          </ul>
        </div>
        <div className="magic-image">
          <img src="/spent.jpg" alt="Spent Grain" />
        </div>
      </section>

        <div className="brewery-container">
      <h2 className="title">From Brewery to Your Table</h2>
      <div className="brewery-content">
        <img src="/brewery.jpg" alt="Brewing Process" className="brewery-image" />
        <div className="journey-text">
          <h3>The Brewing Journey</h3>
          <ul>
            <li><span className="step-number">1</span> Brewers start with high-quality grains like barley</li>
            <li><span className="step-number">2</span> The brewing process extracts sugars for beer production</li>
            <li><span className="step-number">3</span> Nutrient-rich spent grain remains as a valuable byproduct</li>
            <li><span className="step-number">4</span> GrainWise transforms this into delicious, sustainable tortillas</li>
          </ul>
        </div>
      </div>
    </div>

      <section className="future-section">
        <h2>Why BSG is the Future of Food</h2>
        <div className="future-cards">
          <div className="future-card">
            <FaLeaf />
            <h4>Waste Reduction</h4>
            <p>Transforms brewery waste into valuable food ingredients</p>
          </div>
          <div className="future-card">
            <FaLeaf />
            <h4>Nutritional Power</h4>
            <p>High in fiber, protein, and essential nutrients</p>
          </div>
          <div className="future-card">
            <FaLeaf />
            <h4>Environmental Impact</h4>
            <p>Reduces land use and carbon emissions</p>
          </div>
          <div className="future-card">
            <FaLeaf />
            <h4>Unique Flavor</h4>
            <p>Adds distinctive taste and texture to food products</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SpentGrain;
