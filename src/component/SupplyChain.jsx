import React from 'react';


const SupplyChain = () => {
  return (
    <div className="supply">
    <div className="supplychain-container">
      <h1>
        Our Collaborative Supply Chain: Brewing Excellence, <br /> Sustainable Innovation
      </h1>
      <p className="subheading">
        Welcome to a partnership that transforms brewing byproducts into delicious, sustainable food.
      </p>

      <div className="supplychain-box">
        <div className="brewery-heading">
          <h2>Goacher's Brewery Partnership</h2>
          <p className="brewery-subtext">
            Kent's oldest microbrewery, a family-owned institution with over 40 years of crafting award-winning ales
          </p>
        </div>

        <div className="supplychain-content">
          <div className="supplychain-left">
            <img src="/brewery.jpg" alt="Brewery Partner" className="brewery-img" />
            <p>
              We are proud to work with Goacher’s Brewery, Kent’s oldest microbrewery, a family-owned institution with
              over 40 years of crafting award-winning ales.
            </p>
            <p>
              Goacher’s commitment to quality is evident in their careful selection of the finest, locally sourced
              ingredients and their adherence to traditional brewing methods. This dedication ensures their beers are
              exceptional, and it also means their spent grains are of the highest caliber.
            </p>
            <p>
              We responsibly source these spent grains from Goacher’s, recognizing that the craftsmanship of our
              suppliers is directly reflected in the aroma, quality, and nutritional value of this valuable byproduct.
              These grains, once part of a brewing masterpiece, now become the foundation for our innovative GrainWise
              Tortillas.
            </p>
          </div>

          <div className="supplychain-right">
            <div className="info-box">
              <h3>The Circular Economy in Action</h3>
              <ul>
                <li>
                  <strong>🌿 Local Sourcing:</strong> By partnering with a local brewery, we minimize transportation
                  emissions and support our local economy.
                </li>
                <li>
                  <strong>♻️ Waste Reduction:</strong> We support the rich brewing heritage of Goacher’s and champion a
                  circular economy by turning byproducts into food.
                </li>
                <li>
                  <strong>🔗 Learn More:</strong> Discover more by visiting their official website.{' '}
                    Goacher’s Brewery
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default SupplyChain;
