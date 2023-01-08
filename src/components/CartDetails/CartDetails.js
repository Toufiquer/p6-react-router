import React from "react";
import { deleteIcon, minusIcon, plusIcon } from "../icon/useSVGicon";
import { handleDecreaseQuantity, handleDeleteItem, handleIncreaseQuantity } from "../utilities/eventHandler";

const CartDetails = ({ product: { name, id, quantity, price, picture } }) => {
  return (
    <div className="border-2 border-b-gray-300 m-2 text-left p-2 flex justify-between">
      <div className="text-black font-semibold">
        <div className="border-2 border-b-gray-600 p-4 bg-blue-400">
          <img className="w-full h-[400px] object-cover" src={picture} alt="" />
          <h2 className="font-bold text-left mt-4">Name: {name}</h2>
          <h2 className="font-bold text-left ">Price: {price}</h2>
          <div className="flex">
            <button onClick={() => handleIncreaseQuantity(id)}>{plusIcon("22px", "22px")}</button>
            <h2 className="mx-2 text-xl text-black ">{quantity}</h2>
            <button onClick={() => handleDecreaseQuantity(id)}>{minusIcon("22px", "22px")}</button>
          </div>
        </div>
        <div className="text-semibold flex items-center justify-center text-2xl">${quantity * price}</div>
        <div className="flex items-center justify-center">
          <div onClick={() => handleDeleteItem(id)} className="w-6 h-6 fill-red-400 hover:fill-600 cursor-pointer">
            {deleteIcon("26px", "22px")}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartDetails;
