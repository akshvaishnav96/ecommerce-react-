import React from 'react'
import { useLoaderData } from 'react-router-dom'

export default function SingleProduct() {
  const data = useLoaderData()
  console.log(data);
  
  return (
    <div>SingleProduct</div>
  )
}
