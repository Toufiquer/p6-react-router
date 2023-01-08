import React from "react";
import { fnUpdateCarts } from "../Products/Products";
import { handleAddToCart, handleRemoveFromCart } from "../utilities/eventHandler";

const Product = ({ product: { name, picture, price, id } }) => {
  return (
    <div className="border-2 border-b-gray-600 p-4 bg-blue-400">
      <img className="w-full h-[400px] object-cover" src={picture} alt="" />
      <h2 className="font-bold text-left mt-4">Name: {name}</h2>
      <h2 className="font-bold text-left ">Price: {price}</h2>
      <div className="flex justify-between mt-2 gap-2">
        <button
          onClick={() => {
            handleAddToCart(id);
            fnUpdateCarts();
          }}
          className="hover:bg-green-600 bg-green-400 p-2 px-4 w-full"
        >
          Add{" "}
        </button>
        <button
          onClick={() => {
            handleRemoveFromCart(id);
            fnUpdateCarts();
          }}
          className="hover:bg-red-600 bg-red-400 p-2 px-4 w-full"
        >
          Remove{" "}
        </button>
      </div>
    </div>
  );
};

export default Product;
