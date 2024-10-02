import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/cartContext";

export default function Header() {
  const {
    cart,
    setCart,
    exchangeRates,
    setCurrencytype,
    setCurrentCurrencyPrice,
  } = useContext(CartContext);
  const [currency, setCurrencyHandler] = useState("INR");

  function currencyHandler(e) {
    setCurrencyHandler(e.target.value);
    setCurrencytype(e.target.value);
    setCurrentCurrencyPrice(exchangeRates.rates[e.target.value]);
    
  }

  return (
    <header className="bg-slate-700 text-white py-4 ">
      <nav className="flex justify-between px-5 ">
        <h1>
          <Link to="/">E-Commerce</Link>
        </h1>
        <ul className="flex gap-5">
          <Link to="/blog">Blogs</Link>
          <Link to="/products">Products</Link>
          <Link to="/cart">Cart ({cart.length})</Link>
          <Link to="/contact">Contact Us</Link>
        </ul>
        <select
          name="currency"
          className="bg-black px-4 rounded cursor-pointer"
          onChange={currencyHandler}
          value={currency}
        >

          {exchangeRates.rates &&
            Object.keys(exchangeRates.rates).map((item) => (
              <option value={item}>{item}</option>
            ))}
        </select>
      </nav>
    </header>
  );
}
