import React from "react";
import { deleteIcon, minusIcon, plusIcon } from "../icon/useSVGicon";
import { fnUpdateCartView } from "../OrderDetails/OrderDetails";
import { handleDecreaseQuantity, handleDeleteItem, handleIncreaseQuantity } from "../utilities/eventHandler";

const CartDetails = ({ product: { name, id, quantity, price, picture } }) => {
  return (
    <div className=" border-2 border-b-gray-300 m-2 bg-blue-400 text-left p-2 grid grid-cols-[130px_1fr]">
      <img className="w-[120] h-[100px] object-cover" src={picture} alt={name} />
      <div className="text-black font-semibold">
        <div className="border-2 border-b-gray-600 p-2 ml-2 flex justify-between">
          <div>
            <div>
              <h2 className="font-bold text-left">Name: {name}</h2>
              <h2 className="font-normal text-left ">Price: {price}</h2>
              <h2 className="font-normal text-left">Quantity: {quantity}</h2>
              <h2 className="font-normal text-left ">Total Price: ${quantity * price}</h2>
            </div>
            <div className="flex">
              <button
                onClick={() => {
                  handleIncreaseQuantity(id);
                  fnUpdateCartView();
                }}
              >
                {plusIcon("22px", "22px")}
              </button>
              <button
                onClick={() => {
                  handleDecreaseQuantity(id);
                  fnUpdateCartView();
                }}
              >
                {minusIcon("22px", "22px")}
              </button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div
              onClick={() => {
                handleDeleteItem(id);
                fnUpdateCartView();
              }}
              className="w-6 h-6 fill-red-500 hover:fill-red-600 cursor-pointer"
            >
              {deleteIcon("26px", "22px")}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartDetails;
