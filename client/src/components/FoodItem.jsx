import { assets } from "../assets/frontend_assets/assets";
import { useContext } from "react";
import { StoreContext } from "../context/StoreContext";

const FoodItem = ({ id, name, price, description, image }) => {
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);
  return (
    <div>
      <div
        key={id}
        className="bg-white rounded-lg shadow-md overflow-hidden hover:scale-105 transition-transform duration-200 cursor-pointer "
      >
        <div className="relative">
          <img
            src={image}
            alt={name}
            className="w-full h-48 object-cover rounded-md mb-4"
          />
          {!cartItems[id] ? (
            <img
              src={assets.add_icon_white}
              onClick={() => addToCart(id)}
              alt=""
              className="w-8 rounded-full absolute bottom-3.5 right-3.5 cursor-pointer"
            />
          ) : (
            <div className="flex justify-center items-center gap-2 p-1.5 rounded-full absolute bottom-3.5 right-3.5 bg-white">
              <img
                onClick={() => removeFromCart(id)}
                src={assets.remove_icon_red}
                alt=""
                className="w-7.5"
              />
              <p>{cartItems[id]}</p>
              <img
                onClick={() => addToCart(id)}
                src={assets.add_icon_green}
                alt=""
                className="w-7.5"
              />
            </div>
          )}
        </div>
        <div className="px-4 pb-2">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-md font-semibold mb-2 ">{name}</h3>
            <img src={assets.rating_starts} className="w-17" alt="" />
          </div>
          <p className="text-gray-600 mb-2">{description}</p>
          <p className="text-primary font-bold">${price.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
};

export default FoodItem;
