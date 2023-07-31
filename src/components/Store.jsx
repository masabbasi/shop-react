import React, { useContext } from "react";
//Context
import { ProductsContext } from "../context/ProductsContextProvider.jsx";
//Components
import Product from "./shared/Product.jsx";
//Style
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
