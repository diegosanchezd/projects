import React from 'react'
import "../../stylesheets/product.css"
import Product from './Product'
import Burger from '../../imgs/food_burger.jpg'
import Pasta from '../../imgs/food_pasta.jpg'
import Beef from '../../imgs/food_beef.jpg'


const ProductContainer = () => {
  return (
    <>
      <div className='title_container'>
        <h1>MercadoPago Project</h1>
      </div>
      <div className='products_container'>
        <Product productName="Hamburguesa" imgLink={Burger}/>
        <Product productName="Pasta" imgLink={Pasta}/>
        <Product productName="Beef" imgLink={Beef}/>
      </div>
    </>
  )
}

export default ProductContainer
