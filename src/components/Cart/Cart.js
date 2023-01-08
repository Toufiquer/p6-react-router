import React from "react";
import { deleteIcon, minusIcon, plusIcon } from "../icon/useSVGicon";

const Cart = ({ cart: { name, price, quantity } }) => {
  return (
    <div className="border-2 border-b-gray-300 m-2 text-left p-2 flex justify-between">
      <div className="text-white font-semibold">
        <div className="">
          <h2>Name: {name.slice(0, 8)}</h2>
          <h2 className="price">Price: ${price}</h2>
        </div>
        <div className="flex">
          <button>{plusIcon("22px", "22px")}</button>
          <h2 className="mx-2 text-xl">{quantity}</h2>
          <button>{minusIcon("22px", "22px")}</button>
        </div>
      </div>
      <div className="text-semibold flex items-center justify-center text-2xl">000</div>
      <div className="flex items-center justify-center">
        <div className="w-6 h-6 fill-red-400 hover:fill-600 cursor-pointer">{deleteIcon("26px", "22px")}</div>
      </div>
    </div>
  );
};

export default Cart;
