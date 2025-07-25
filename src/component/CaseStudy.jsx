import React from "react";


const CaseStudy = () => {
  return (
    <section className="case-study">
      <h1>Our GrainWise Case Studies</h1>
      <p>
        See how our partners use GrainWise tortillas to create sustainable,
        innovative, and delicious products!
      </p>

      <div className="case-card">
        <div className="case-head">
          <h2>Gourmet Gurus & Wimbledon Cricket Club</h2>
          <h4>Shaping a Better World, One Tortilla at a Time</h4>
        </div>
        <div className="case-content">
          <div className="case-left">
            <img src="/sweets.jpg" alt="Gourmet Wrap" />
            <div className="section">
              <h3>The Challenge</h3>
              <p>
                Major events like those at Wimbledon generate significant food
                demand, and with it, a responsibility to minimize environmental
                impact. Gourmet Gurus aimed to introduce innovative, nutritious,
                and sustainable options that would resonate with health-conscious
                attendees.
              </p>
            </div>

            <div className="section">
              <h3>The GrainWise Solution</h3>
              <ul>
                <li><strong>Exceptional Flavor & Texture:</strong> Added a gourmet touch to wraps, quesadillas, and other popular dishes.</li>
                <li><strong>Enhanced Nutrition:</strong> Naturally packed with fiber and protein, appealing to athletes and health-aware spectators.</li>
                <li><strong>Environmental Impact:</strong> Actively participated in a circular economy, reducing food waste and carbon footprint.</li>
              </ul>
            </div>
          </div>

          <div className="case-right">
            <h3>The Impact</h3>
            <p>
              The partnership demonstrates that sustainability doesn’t mean
              compromising on quality or taste. Attendees now enjoy delicious,
              high-quality food, knowing that every bite contributes to:
            </p>
            <ul>
              <li>Reduced Food Waste: Giving valuable spent grain a second life</li>
              <li>Lower Environmental Footprint: Conserving resources and reducing emissions</li>
              <li>A Healthier Offering: Providing nutritious options for a discerning audience</li>
            </ul>
          </div>
        </div>
      </div>

      <button className="cta-btn">Partner With Us </button>
    </section>
  );
};

export default CaseStudy;
