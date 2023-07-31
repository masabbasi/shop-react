import React, { useContext } from "react";
import { Link } from "react-router-dom";
//Functions
import { shorten } from "../../helper/function.js";
//Components
import BuyButton from "./BuyButton.jsx";
//Style
import "./Product.css";

const Product = ({ productData }) => {
  const { id, image, title, price } = productData;
  return (
    <div className="productContainer">
      <img
        className="productCardImage"
        src={image}
        alt="product"
        style={{ width: "200px" }}
      />
      <h3>{shorten(title)}</h3>
      <p>{price}</p>
      <div className="productLinkContainer">
        <Link to={`/shop-react/products/${id}`}>Detail</Link>
        <BuyButton productData={productData} />
      </div>
    </div>
  );
};

export default Product;
