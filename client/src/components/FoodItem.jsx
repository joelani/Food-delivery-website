import React, { memo } from "react";
import { assets } from "../assets/frontend_assets/assets";

const FoodItem = memo(
  ({
    id,
    name,
    price,
    description,
    image,
    quantity,
    addToCart,
    removeFromCart,
    url,
  }) => {
    return (
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:scale-105 transition-transform duration-200">
        <div className="relative">
          <img
            src={url + "/images/" + image}
            alt={name}
            className="w-full h-48 object-cover rounded-md mb-4"
          />

          {quantity === 0 ? (
            <img
              src={assets.add_icon_white}
              onClick={() => addToCart(id)}
              className="w-8 rounded-full absolute bottom-3.5 right-3.5 cursor-pointer"
            />
          ) : (
            <div className="flex items-center gap-2 p-1.5 rounded-full absolute bottom-3.5 right-3.5 bg-white">
              <img
                onClick={() => removeFromCart(id)}
                src={assets.remove_icon_red}
                className="w-7.5 cursor-pointer"
              />
              <p>{quantity}</p>
              <img
                onClick={() => addToCart(id)}
                src={assets.add_icon_green}
                className="w-7.5 cursor-pointer"
              />
            </div>
          )}
        </div>

        <div className="px-4 pb-2">
          <h3 className="font-semibold">{name}</h3>
          <p>{description}</p>
          <p className="font-bold">${price.toFixed(2)}</p>
        </div>
      </div>
    );
  }
);

export default FoodItem;
