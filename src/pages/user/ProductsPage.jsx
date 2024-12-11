import React from 'react'
import ProductCard from '../../components/user/ProductCard'
import './ProductsPage.css'
import { useSelector } from 'react-redux'

const ProductsPage = () => {


const pizzas = useSelector((state) => state.product.products);
console.log(pizzas)

  return (
    <div className='ProductsPage'>
      {pizzas.map((pizza, index) => {
        return <ProductCard key={index} item={pizza} />;
      })}
    </div>
  )
}

export default ProductsPage

