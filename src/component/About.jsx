import React from 'react';

const About = () => {
  return (
   <div className="about">
     <div className="about-container">
      <h1>
        About <span className="highlight">GrainWise</span>: Crafting a Better Tortilla, From Maidstone to Your Table
      </h1>
      <p className="subheading">
        At GrainWise, we're not just making tortillas.we're on a mission to redefine what a staple food can be.
      </p>

      <div className="about-content">
        <div className="about-box story-box">
          <h2>Our Story</h2>
          <p>
            Based right here in Maidstone, Kent, England, our company, Essel Innovation and Development Services Limited,
            is pioneering a delicious revolution: creating sustainable, nutritious, and incredibly flavorful tortillas
            from upcycled brewers’ spent grain.
          </p>
          <br/>
          <p>
            Founded with a deep commitment to sustainability and circular innovation, GrainWise is driven by a simple
            yet revolutionary idea: every upcycled grain means less land use, less food waste, and more valuable
            nutrition and amazing flavor brought back into our food system. We believe that food can – and should – do
            good, for both people and the planet.
          </p>
          <br/>
          <p>
            We’re proud to be part of the vibrant food innovation scene in the UK, building partnerships with those who
            share our vision for a truly circular food economy.
          </p>
        </div>

        <div className="about-box mission-box">
          <div className="section">
            <h3> Our Mission</h3>
            <p>
              Our mission at GrainWise is clear: by upcycling brewers’ spent grain, we give this valuable resource a
              second chance, transforming it into the high-quality, delicious foundation for our tortillas. We're
              dedicated to making these innovative, sustainable tortillas available for individuals and food companies
              across the UK and beyond.
            </p>
          </div>
          <div className="section">
            <h3> Our Promise</h3>
            <p>
              When you choose GrainWise tortillas, you’re choosing to create nutritious and delicious food. Our unique
              process, utilizing upcycled spent grain, naturally elevates the protein, dietary fiber, aroma, and
              distinctive color of your products. We promise tortillas that don’t just taste good, but actively do good.
            </p>
          </div>
        </div>
      </div>
    </div>
   </div>
  );
};

export default About;
