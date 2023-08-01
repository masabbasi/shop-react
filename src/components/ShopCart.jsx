import React, { useContext } from "react";
import { Link } from "react-router-dom";
//Components
import Cart from "./shared/Cart";
//Context
import { CartContext } from "../context/CartContextProvider";
//Style
import "./ShopCart.css";

const ShopCart = () => {
  const { state, dispatch } = useContext(CartContext);

  return (
    <div className="shopCartMainContainer">
      <div className="shopCartContainer">
        {state.selectedItems.map((item) => (
          <Cart key={item.id} data={item} />
        ))}
      </div>
      {state.itemsCounter > 0 && (
        <div className="shopCartPayment">
          <p>
            <span>Total Items: </span>
            {state.selectedItems.reduce((total,product)=>total+product.quantity,0)}
          </p>
          <p>
            <span>Total Payments: </span>
            {state.total} $
          </p>
          <div className="shopCartButtonContainer">
            <button
              className="shopCartClear"
              onClick={() => dispatch({ type: "CLEAR" })}
            >
              Clear
            </button>
            <button
              className="shopCartCheckout"
              onClick={() => dispatch({ type: "CHECKOUT" })}
            >
              Check Out
            </button>
          </div>
        </div>
      )}

      {state.checkout && (
        <div className="shopCartCompleted">
          <h3>Checked Out Successfully :)</h3>
          <Link to="/shop-react/products">Buy More</Link>
        </div>
      )}

      {!state.checkout && state.itemsCounter === 0 && (
        <div className="shopCartCompleted">
          <h3>Want To Buy?</h3>
          <Link to="/shop-react/products">Go To Shop!</Link>
        </div>
      )}
    </div>
  );
};

export default ShopCart;
