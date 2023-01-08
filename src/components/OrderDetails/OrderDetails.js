import React, { useEffect, useState } from "react";
import CartDetails from "../CartDetails/CartDetails";
import Summary from "../Summary/Summary";
import { getItem } from "../utilities/manageDB";
import { getProductsByIds } from "../utilities/productManage";
let fnUpdateCartView;
const OrderDetails = () => {
  const [products, setProducts] = useState([]);
  const [cartDetailsProducts, setCartDetailsProducts] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  useEffect(() => {
    const cartItem = getItem();
    if (products.length >= 1) {
      const cartProducts = getProductsByIds(cartItem, products);
      setCartDetailsProducts(cartProducts);
    }
  }, [products]);
  const updateCartView = () => {
    const cartItem = getItem();
    if (products.length >= 1) {
      const cartProducts = getProductsByIds(cartItem, products);
      setCartDetailsProducts(cartProducts);
    }
  };
  fnUpdateCartView = updateCartView;
  return (
    <div className="bg-blue-200 ">
      <div className="text-2xl p-4 font-semibold ">Order Details</div>
      <div className="grid grid-cols-1 md:grid-cols-[1fr_400px]">
        <div className="flex  flex-col">
          {cartDetailsProducts.map((curr) => (
            <CartDetails product={curr} key={curr.id}></CartDetails>
          ))}
        </div>
        <div className="bg-blue-400 relative  m-2">
          <div
            className="sticky top-4  text-2xl font-semibold border-2 border-blue-800 border-solid 
           m-4 min-h-[600px]"
          >
            Summary
            <hr />
            <Summary cartDetailsProducts={cartDetailsProducts}></Summary>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
export { fnUpdateCartView };
