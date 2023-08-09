import React, { useState } from 'react'
import { products as initialProducts} from "../db/products.json"
import useFilter from '../helpers/useFilter'
import Product from './Product'
import Header from './Header'
import Footer from './Footer'
import Cart from './Cart'
import useCart from '../helpers/useCart'
import { CartProvider } from '../context/cart'


const ProductsContainer = () => {

  const { addToCart, cart } = useCart();
  const [products, setProducts] = useState(initialProducts);
  const { filteredProducts, filter } = useFilter()

  return (
    <>
      <Header />
      <Cart />
      {filteredProducts(products).map(product => (
        <Product image={product.thumbnail}
          title={product.title}
          price={product.price} 
          key={product.id}
          addToCart={()=> addToCart(product)} 
           />
      ))}
      <Footer />
    </>
  )
}

export default ProductsContainer
