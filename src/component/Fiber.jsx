import React from "react";

const Fiber = () => {
  return (
    <div className="fiber-container">
      <h1>Fiber: The GrainWise Way</h1>
      <p>
        When you think about healthy eating, fiber might not be the first nutrient that comes to mind. Yet, it’s one of the most crucial components of a balanced diet.
      </p>

      <section className="fiber-box">
        <h2>What is Fiber?</h2>
        <div className="fiber-types">
          <div>
            <h3>Soluble Fiber</h3>
            <p>
              This type dissolves in water to form a gel-like substance. It’s known for slowing digestion, which helps regulate blood sugar levels and can contribute to lowering cholesterol.
            </p>
          </div>
          <div>
            <h3>Insoluble Fiber</h3>
            <p>
              This fiber adds bulk to your stool, promoting regular bowel movements and helping to prevent constipation.
            </p>
          </div>
        </div>
      </section>

      <section className="fiber-gap">
        <h2>The Fiber Gap: Are You Getting Enough?</h2>
        <div className="fiber-stats">
          <div><strong>25g</strong><p>WHO recommended daily intake</p></div>
          <div><strong>16g</strong><p>Average US consumption</p></div>
          <div><strong>18g</strong><p>Average European consumption</p></div>
        </div>
      </section>

      <section className="fiber-benefits">
        <h2>GrainWise Tortillas: Your High-Fiber Solution</h2>
        <div className="benefits-grid">
          <div>
            <h3>💚 Naturally High Fiber</h3>
            <p>Our tortillas contain significantly more fiber than traditional wheat flour tortillas.</p>
          </div>
          <div>
            <h3>🥗 Versatile in Every Meal</h3>
            <p>Perfect for breakfast burritos, lunch wraps, or dinner quesadillas.</p>
          </div>
          <div>
            <h3>🌱 Sustainability & Health</h3>
            <p>Nourish your body while championing a more sustainable food system.</p>
          </div>
        </div>
      </section>

      <section className="fiber-tips">
        <h2>Easy Tips for Adding Fiber with GrainWise</h2>
        <ul>
          <li>
            <strong>1. Start Your Day the GrainWise Way</strong>
            <p>Use GrainWise tortillas as the base for your breakfast taco, a quick and healthy breakfast wrap, or even a savory morning scramble.</p>
          </li>
          <li>
            <strong>2. Upgrade Your Lunch</strong>
            <p>Swap out traditional bread for a GrainWise tortilla in your sandwiches and wraps for an immediate fiber boost.</p>
          </li>
          <li>
            <strong>3. Get Creative with Dinners</strong>
            <p>From flavorful enchiladas to crispy tortilla chips for dipping, GrainWise tortillas can enhance the fiber content of countless dishes.</p>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Fiber;
