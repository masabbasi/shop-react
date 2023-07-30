import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContextProvider";
//Icons
import shopIcon from "../../assets/icons/shop.svg";
//CSS
import "./Navbar.css";

const Navbar = () => {
  const { state } = useContext(CartContext);

  return (
    <div className="navbarMainContainer">
      <div className="navbarContainer">
        <Link className="navbarProductLink" to="/shop-react/products">Products</Link>
        <div className="navbarIconContainer">
          <Link to="/shop-react/cart">
            <img src={shopIcon} alt="Shop Icon" />
          </Link>
          <span>{state.itemsCounter}</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
