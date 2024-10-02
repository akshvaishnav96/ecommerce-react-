import React, { useContext } from 'react'
import {Link} from  "react-router-dom"
import { CartContext } from '../context/cartContext'

export default function Header() {
  const {cart}  = useContext(CartContext)
  return (
    <header className='bg-slate-700 text-white py-4 '>
        <nav className='flex justify-between px-5 '>
            <h1><Link to="/">E-Commerce</Link></h1>
            <ul className='flex gap-5'>
                <Link to="/blog">Blogs</Link>
                <Link to="/products">Products</Link>
                <Link to="/cart">Cart ({cart.length})</Link>
                <Link to="/contact">Contact Us</Link>
            </ul>
        </nav>
    </header>
  )
}
