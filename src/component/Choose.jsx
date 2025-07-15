import React from "react";
import { CiHeart } from "react-icons/ci";
import { FaRecycle } from "react-icons/fa";
import { LuChefHat } from "react-icons/lu";
const cart = [
    {
        index: 1,
        icon: <CiHeart style={{ color: "green", fontSize: "5.8rem"  }} />,
        head: "Fueling Health, Naturally",
        text: "Our tortillas, crafted from upcycled brewers' spent grain, are a powerhouse of fiber, protein, and vital nutrients. Boost the nutritional profile of your offerings while maintaining delicious taste."
    }
    , {
        index: 2,
        icon: < FaRecycle style={{ color: "green", fontSize: "5.8rem"  }} />,
        head: "Make a Sustainable Choice",
        text: "Contribute directly to a healthier planet. Our tortillas help reduce food waste and cut down on CO2 emissions, giving your brand a more sustainable edge."
    },
    {
        index: 3,
        icon: <LuChefHat style={{ color: "green", fontSize: "5.9rem" }} />,
        head: "Discover Unique Taste & Texture",
        text: "Introduce unique and rich flavors alongside a delightful texture. Elevate your existing dishes and provide customers with an innovative culinary experience."
    }
]
const Choose = () => {
    return (
        <div className="Choose-container">
            <h1>Why Choose GrainWise Tortillas?</h1>
            <div className="choose-cart">
                {cart.map(items => (
                    <div className="cart" key={items.index}>
                        <div
                            style={{margin:'2rem'
                            }}
                        >
                            {items.icon}
                        </div>
                        <h2>{items.head}</h2>
                        <p>{items.text}</p>
                    </div>))}
            </div>
        </div>
    );
};
export default Choose;