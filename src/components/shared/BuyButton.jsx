import React, { useContext } from "react";
//Context
import { CartContext } from "../../context/CartContextProvider";
//Functions
import { quantityCount, isInCart } from "../../helper/function";
//Icons
import trashIcon from "../../assets/icons/trash.svg";
//Style
import "./BuyButton.css";

const BuyButton = ({ productData }) => {
  const { state, dispatch } = useContext(CartContext);

  return (
    <div className="productButtonContainer">
      {quantityCount(state, productData.id) > 1 && (
        <button
          className="productSmallButton"
          onClick={() => dispatch({ type: "DECREASE", payload: productData })}
        >
          -
        </button>
      )}
      {quantityCount(state, productData.id) === 1 && (
        <button
          className="productSmallButton"
          onClick={() =>
            dispatch({ type: "REMOVE_ITEM", payload: productData })
          }
        >
          <img src={trashIcon} alt="" style={{ width: "20px" }} />
        </button>
      )}
      {quantityCount(state, productData.id) > 0 && (
        <span className="productCounter">
          {quantityCount(state, productData.id)}
        </span>
      )}
      {isInCart(state, productData.id) ? (
        <button
          className="productSmallButton"
          onClick={() => dispatch({ type: "INCREASE", payload: productData })}
        >
          +
        </button>
      ) : (
        <button
          onClick={() => dispatch({ type: "ADD_ITEM", payload: productData })}
        >
          Add To Cart
        </button>
      )}
    </div>
  );
};

export default BuyButton;
