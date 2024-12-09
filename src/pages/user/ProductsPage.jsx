import React from 'react'
import { pizzas } from '../../services/pizzas'
import ProductCard from '../../components/user/ProductCard'
import './ProductsPage.css'

const ProductsPage = () => {
  return (
    <div>
      {pizzas.map((pizza, index) => {
        return <ProductCard key={index} item={pizza} />;
      })}
      
    </div>
  )
}

export default ProductsPage
