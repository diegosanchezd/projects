import React from 'react'
import { AddToCartIcon } from './Icons'
import useCart from '../helpers/useCart'

const Product = ({title, image, price, addToCart}) => {

  // const { AddToCart } = useCart();

  return (
    <div>
      <h3>{title}-{price}$</h3>
      <div>
        <img src={image} alt={title} />
      </div>
      <div>
        <button onClick={addToCart}>{<AddToCartIcon />}</button>
      </div>
    </div>
  )
}


export default Product
