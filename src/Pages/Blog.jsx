import React, { useContext } from 'react'
import { useLoaderData } from 'react-router-dom'
import { CartContext } from '../context/cartContext';

export default function Blog() {
  const data = useLoaderData()

  const {cart} = useContext(CartContext)
  console.log(cart);
  
  return (
    <div>Blog</div>
  )
}
