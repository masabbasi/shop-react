import React, { useState, useEffect, createContext } from "react";
//API
import { getProducts } from "../services/api.js";

export const ProductsContext = createContext();

const ProductsContextProvider = ({children}) => {
  const [products, setProducts] = useState([]);
	
  useEffect(() => {
		const fetchAPI = async () => {
			setProducts(await getProducts());
		};
    fetchAPI();
		// getProducts().then(response=>{setProducts(response.data)})
  }, []);

  return (
    <ProductsContext.Provider value={products}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsContextProvider;