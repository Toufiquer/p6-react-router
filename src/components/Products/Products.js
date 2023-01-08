import React, { useEffect, useState } from "react";
import Carts from "../Carts/Carts";
import Product from "../Product/Product";
import { getItem } from "../utilities/manageDB";
import { getProductsByIds } from "../utilities/productManage";
let fnUpdateCarts;
const Products = () => {
  const [products, setProducts] = useState([]);
  const [cartProducts, setCartProducts] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  const updateCarts = () => {
    console.log("cart update", " => Line No: 16");
    const cartItem = getItem();
    if (products.length >= 1) {
      const cartProducts = getProductsByIds(cartItem, products);
      setCartProducts(cartProducts);
    }
  };
  fnUpdateCarts = () => updateCarts();
  useEffect(() => {
    const cartItem = getItem();
    if (products.length >= 1) {
      const cartProducts = getProductsByIds(cartItem, products);
      setCartProducts(cartProducts);
    }
  }, [products]);
  return (
    <div>
      <h2>Products</h2>
      <div className="grid grid-cols-[1fr_400px] min-h-screen bg-blue-200">
        <div className="grid md:grid-cols-3 grid-cols-1 gap-4 p-4">
          {products.map((curr) => (
            <Product key={curr.id} product={curr}></Product>
          ))}
        </div>
        <div className="container bg-blue-400">
          {cartProducts.length >= 1 && <Carts cartProducts={cartProducts}></Carts>}

          {cartProducts.length === 0 && (
            <>
              <h2 className="text-xl font-semibold m-4">Total Cart: {cartProducts.length}</h2>
              <p>Please Add some Item</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;
export { fnUpdateCarts };
