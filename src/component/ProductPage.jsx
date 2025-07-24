import React from "react";

const products = [
  {
    title: "Classic Tortillas",
    icon: "🌾",
    description:
      "Our original BSG tortillas with a perfect balance of flavor and nutrition. These versatile tortillas work beautifully in any recipe.",
    image: "/roti.jpeg",
    features: [
      "Made with 30% upcycled brewer’s spent grain",
      "Rich in fiber and protein",
      "Neutral flavor profile perfect for any filling",
      "Excellent pliability and strength",
    ],
  },
  {
    title: "Vegetable Tortillas",
    icon: "🥕",
    description:
      "Infused with garden-fresh vegetables for added nutrition and a vibrant color.Each bite bursts with natural flavor.",
    image: "/vegetable.jpg",
    features: [
      "Contains real vegetable puree",
      "Source of additional vitamins and minerals",
      "Subtle vegetable flavor enhances savory fillings",
      "Naturally colorful appearance",
    ],
  },
  {
    title: "Spinach Tortillas",
    icon: "🥬",
    description:
      "Packed with nutrient-rich spinach for a boost of iron and antioxidants.Packed with the earthy goodness of spinach.",
    image: "/spinach.jpg",
    features: [
      "Contains real spinach",
      "Rich in iron and antioxidants",
      "Vibrant green color",
      "Pairs perfectly with Mediterranean fillings",
    ],
  },
  {
    title: "Fruity Tortillas",
    icon: "🍓",
    description:
      "A unique sweet option with hints of natural fruit flavors.",
    image: "/fruit.jpg",
    features: [
      "Infused with natural fruit extracts",
      "Subtle sweetness without added sugars",
      "Versatile for both sweet and savory applications",
      "Perfect for breakfast wraps and desserts",
    ],
  },
];

const ProductPage = () => {
  return (
    <div className="product-page">
      <h1>Our Product Range</h1>
      <p className="subtitle">
        Discover our variety of sustainable tortillas, each crafted with
        upcycled brewer’s spent grain and designed to meet different culinary
        needs.
      </p>

      <div className="product-grid">
        {products.map((product, index) => (
          <div className="product-card" key={index}>
            <div className="icon-title-wrapper" style={{ display: 'flex', alignItems: 'center' }}>
              <div className="icon">{product.icon}</div>
              <h2>{product.title}</h2>
            </div>
            <p className="desc">{product.description}</p>
            <img src={product.image} alt={product.title} />
            <div className="features">
              <h4>Key Features:</h4>
              <ul>
                {product.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      
    </div>
  );
};

export default ProductPage;
