import React, { useEffect, useState } from "react";
import Carts from "../Carts/Carts";
import Product from "../Product/Product";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [cartProducts, setCartProducts] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        let newData = [...products];
        newData.length = 4;
        setCartProducts(newData);
      });
  }, [products]);
  return (
    <div>
      <h2>Products</h2>
      <div className="grid grid-cols-[1fr_400px] min-h-screen bg-blue-200">
        {" "}
        <div className="grid md:grid-cols-3 grid-cols-1 gap-4 p-4">
          {" "}
          {products.map((curr) => (
            <Product key={curr.id} product={curr}></Product>
          ))}
        </div>
        <div className="container bg-blue-400">
          <Carts cartProducts={cartProducts}></Carts>
        </div>
      </div>
    </div>
  );
};

export default Products;
