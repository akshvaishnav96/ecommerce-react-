import React, { useContext, useEffect, useState } from 'react'
import { CartContext } from '../context/cartContext'
import ProductPreview from '../components/ProductPreview'

export default function Cart() {
  
  const {cart} = useContext(CartContext)

 
  
  return (
   
    <>
    <h3>Cart Items</h3>
    <div className='cart flex gap-4 justify-center'>
      {cart.map((item)=><ProductPreview  item={item}/>)}
    </div>
    </>
  )
}
