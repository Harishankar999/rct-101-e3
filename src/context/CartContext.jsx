import React, { createContext } from "react";
import { useState } from "react";
import { useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartData, setCartData] = useState([]);
  useEffect(() => {
    const getCartData = async () => {
      let res = await fetch("http://localhost:8080/cartItems");
      let data = await res.json();
      setCartData(data);
    };
    getCartData();
  });
  return (
    <CartContext.Provider value={{ cartData }}>{children}</CartContext.Provider>
  );
};
