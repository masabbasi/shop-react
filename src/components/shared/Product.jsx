import React, { useContext } from "react";
import { Link } from "react-router-dom";
//Context
import { CartContext } from "../../context/CartContextProvider.jsx";
//Function
import { shorten, isInCart, quantityCount } from "../../helper/function.js";
//Icons
import trashIcon from "../../assets/icons/trash.svg";
//CSS
import "./Product.css"

const Product = ({ productData }) => {
  const { state, dispatch } = useContext(CartContext);

  const { id, image, title, price } = productData;
  return (
    <div className="productContainer">
      <img className="productCardImage" src={image} alt="product" style={{ width: "200px" }} />
      <h3>{shorten(title)}</h3>
      <p>{price}</p>
      <div className="productLinkContainer">
        <Link to={`/shop-react/products/${id}`}>Detail</Link>
        <div className="productButtonContainer">
          {quantityCount(state, productData.id) > 1 && (
            <button
						className="productSmallButton"
              onClick={() =>
                dispatch({ type: "DECREASE", payload: productData })
              }
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
					{quantityCount(state,productData.id)>0 && <span className="productCounter">{quantityCount(state,productData.id)}</span>}
          {isInCart(state, productData.id) ? (
            <button
						className="productSmallButton"
              onClick={() =>
                dispatch({ type: "INCREASE", payload: productData })
              }
            >
              +
            </button>
          ) : (
            <button
              onClick={() =>
                dispatch({ type: "ADD_ITEM", payload: productData })
              }
            >
              Add To Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;
