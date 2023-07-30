import React, { useContext } from "react";
//Component
import Product from "./shared/Product.jsx";
//Context
import { ProductsContext } from "../context/ProductsContextProvider.jsx";
//CSS
import "./Store.css"

const Store = () => {
  const products = useContext(ProductsContext);
  return (
    <div
      className="storeContainer"
    >
      {products.map((product) => {
      return <Product key={product.id} productData={product} />
      })}
    </div>
  );
};

export default Store;
