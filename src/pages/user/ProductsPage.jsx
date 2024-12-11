import React, { useEffect, useRef } from 'react'
import ProductCard from '../../components/user/ProductCard'
import './ProductsPage.css'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../../slices/productSlice'

const ProductsPage = () => {

const dispatch = useDispatch();

const pizzas = useSelector((state) => state.product.products);
console.log(pizzas)

useEffect(() => {
  dispatch(getProducts({}))
  },[]);

  return (
    <div className='ProductsPage'>
      {pizzas.map((pizza, index) => {
        return <ProductCard key={index} item={pizza} />;
      })}
    </div>
  )
}

export default ProductsPage
function dispatch(arg0) {
  throw new Error('Function not implemented.')
}

