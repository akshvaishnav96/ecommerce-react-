import { createContext, useState } from "react";

export const CartContext = createContext();

export default function CartContextProvider({ children }) {
  const [cart, setCart] = useState([]);

  function addToCart(item) {
    setCart((prev) => [...prev, { ...item, quantity: 1 }]);
  }

  function deleteFormCart(id) {
    setCart(cart.filter((item) => item.id !== id));
  }

 

   const updateQuantity = (id, type) => {
        setCart((prevCart) => {
            return prevCart.map((item) => {
                if (item.id === id) {
                    const newQuantity = type === "increment" 
                        ? item.quantity + 1 
                        : Math.max(item.quantity - 1, 0); // Ensure quantity doesn't go below zero
                    
                    return { ...item, quantity: newQuantity };
                }
                console.log(item);
                
                return item;
            });
      })}
  return (
    <CartContext.Provider value={{ cart, addToCart, deleteFormCart,updateQuantity }}>
      {children}
    </CartContext.Provider>
  );
}
