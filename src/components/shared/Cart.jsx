import React, { useContext } from "react";
//Context
import { CartContext } from "../../context/CartContextProvider";
//Functions
import { shorten } from "../../helper/function";
//Icons
import trashIcon from "../../assets/icons/trash.svg";
//Style
import "./Cart.css"

const Cart = (props) => {
  const { dispatch } = useContext(CartContext);
  const { image, title, price, quantity } = props.data;

  return (
    <div className="cartContainer">
      <img className="cartProductImage" src={image} alt="product" />
      <div className="cartData">
        <h3>{shorten(title)}</h3>
        <p>{price} $</p>
      </div>
      <div>
				<span className="cartQuantity">
					{quantity}
				</span>
			</div>
			<div className="cartButtonContainer">
				{quantity>1 ? 
				<button onClick={()=>dispatch({type:"DECREASE",payload:props.data})}>-</button>
				:
<button onClick={()=>dispatch({type:"REMOVE_ITEM",payload:props.data})}>
	<img src={trashIcon} alt="Trash Icon" style={{width:"20px"}}/>
</button>
				}
				<button onClick={()=>dispatch({type:"INCREASE",payload:props.data})}>+</button>
			</div>
    </div>
  );
};

export default Cart;
