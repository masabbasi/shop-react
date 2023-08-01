import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
//Components
import Store from "./components/Store.jsx";
import ProductDetail from "./components/ProductDetail";
import Navbar from "./components/shared/Navbar";
import ShopCart from "./components/ShopCart";
//Context
import ProductsContextProvider from "./context/ProductsContextProvider";
import CartContextProvider from "./context/CartContextProvider";
function App() {

  return (
    <ProductsContextProvider>
      <CartContextProvider>
        <Navbar />
        <Routes>
          <Route path="/shop-react/products" element={<Store />} />
          <Route path="/shop-react/products/:id" element={<ProductDetail />} />
          <Route path="/shop-react/cart" element={<ShopCart />}/>
          <Route path="/*" element={<Navigate to="/shop-react/products" />} />
        </Routes>
      </CartContextProvider>
    </ProductsContextProvider>
  );
}

export default App;
