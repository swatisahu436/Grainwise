import React from "react";

const recipes = [
  {
    title: "Mediterranean Veggie Wrap",
    description: "A fresh and healthy wrap packed with Mediterranean flavors.",
    image: "/tortilla-stack.jpg",
    ingredients: [
      "GrainWise tortilla",
      "Hummus",
      "Roasted vegetables",
      "Feta cheese",
      "Spinach",
    ],
  },
  {
    title: "Spicy Black Bean Burrito",
    description: "A protein-rich burrito with a kick of spice.",
    image: "/tortilla-stack.jpg",
    ingredients: [
      "GrainWise tortilla",
      "Black beans",
      "Rice",
      "Salsa",
      "Avocado",
      "Cheese",
    ],
  },
  {
    title: "Breakfast Power Wrap",
    description: "Start your day with this nutritious breakfast wrap.",
    image: "/tortilla-stack.jpg",
    ingredients: [
      "GrainWise tortilla",
      "Scrambled eggs",
      "Turkey bacon",
      "Cheese",
      "Spinach",
    ],
  },
];

const RecipeSuggestions = () => {
  return (
    <div className="recipe-section">
      <div className="recipe-head">
        <h1>Recipe Suggestions</h1>
      <p>
        Discover delicious ways to use GrainWise tortillas in your kitchen. From
        healthy wraps to creative quesadillas,<br/> these recipes showcase the
        versatility of our sustainable tortillas.
      </p>
      </div>
     

      <div className="recipe-grid">
        {recipes.map((recipe, index) => (
          <div key={index} className="recipe-card">
            <img src={recipe.image} alt={recipe.title} />
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
            <h4>Ingredients:</h4>
            <ul>
              {recipe.ingredients.map((item, i) => (
                <li key={i}>🟢 {item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecipeSuggestions;
