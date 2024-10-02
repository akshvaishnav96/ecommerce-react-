import { createContext, useEffect, useState } from "react";
import axios from "axios"

export const CartContext = createContext();
const API_KEY = import.meta.env.VITE_EXCHANGE_KEY
console.log(API_KEY);


export default function CartContextProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [exchangeRates,setExchangeRates] = useState([])
  const [currencyType,setCurrencytype] = useState("INR")
  const [currentCurrencyPrice,setCurrentCurrencyPrice] = useState("")
  
  

  function addToCart(item) {
    setCart((prev) => [...prev, { ...item, quantity: 1 }]);
  }

  function deleteFormCart(id) {
    setCart(cart.filter((item) => item.id !== id));
  }


  useEffect(()=>{
     async  function getExchangeRates(){
          const response = await axios.get(`https://api.exchangeratesapi.io/v1/latest?access_key=${API_KEY}`)
          setExchangeRates(response.data);
          
          setCurrentCurrencyPrice(response.data.rates["INR"])
      }
      getExchangeRates()
  },[])
 

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
    <CartContext.Provider value={{ cart, setCart,addToCart, deleteFormCart,updateQuantity,exchangeRates,currencyType,setCurrencytype,currentCurrencyPrice,setCurrentCurrencyPrice }}>
      {children}
    </CartContext.Provider>
  );
}
