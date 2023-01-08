import React from "react";
import { useNavigate } from "react-router-dom";
import Cart from "../Cart/Cart";
import { cartIcon } from "../icon/useSVGicon";

const Carts = ({ cartProducts }) => {
  const navigate = useNavigate();
  const handleCartDetails = () => {
    navigate("/orderDetails");
  };
  return (
    <div className="relative h-full">
      <div className="sticky top-0 min-h-[600px]">
        <h2 className="text-xl font-semibold m-4">Total Cart: {cartProducts.length}</h2>
        {cartProducts.map((curr) => (
          <Cart cart={curr} key={curr?.id}></Cart>
        ))}
        <div onClick={handleCartDetails} className="w-1/2 mx-auto mt-4 border-2 border-b-gray-300 m-2 text-left p-2 flex justify-between hover:cursor-pointer">
          Order Details {cartIcon("22px", "22px")}
        </div>
      </div>
    </div>
  );
};

export default Carts;
