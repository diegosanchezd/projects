import React from 'react'
import { AddToCartIcon } from './Icons'

const Product = ({title, image, price}) => {
  return (
    <div>
      <h3>{title}-{price}$</h3>
      <div>
        <img src={image} alt={title} />
      </div>
      <div>
        <button>{<AddToCartIcon />}</button>
      </div>
    </div>
  )
}


export default Product
