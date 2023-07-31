import React, { useContext } from "react";
//Functions
import { shorten } from "../../helper/function";
//Components
import BuyButton from "./BuyButton";
//Style
import "./Cart.css";

const Cart = (props) => {
  const { image, title, price, quantity } = props.data;

  return (
    <div className="cartContainer">
      <img className="cartProductImage" src={image} alt="product" />
      <div className="cartData">
        <h3>{shorten(title)}</h3>
        <p>{price} $</p>
      </div>
      <div>
        <span className="cartQuantity">{quantity}</span>
      </div>
      <BuyButton productData={props.data} />
    </div>
  );
};

export default Cart;
