import React from 'react'
import './ProductCard.css'
import { useDispatch } from 'react-redux'
import { addProduct } from '../../slices/productSlice'

const ProductCard = ({item}) => {

  const { name, description, price, image } =item
  const dispatch = useDispatch();

  return (
    <div className="pizza-card">
      <img src={image} alt={name} className="pizza-image" />
      <div className="pizza-details">
        <h3 className="pizza-name">{name}</h3>
        <p className="pizza-description">{description}</p>
        <p className="pizza-price">{price}</p>
        <button onClick={() => {
          dispatch(addProduct({item}));
        }} className="add-to-cart-btn">Add to Cart</button>
      </div>
    </div>
  )
}

export default ProductCard
