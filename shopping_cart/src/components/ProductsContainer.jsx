import React, { useState } from 'react'
import { products as initialProducts} from "../db/products.json"
import useFilter from '../helpers/useFilter'
import Product from './Product'
import Header from './Header'
import Footer from './Footer'
import Cart from './Cart'


const ProductsContainer = () => {

  const [products, setProducts] = useState(initialProducts);
  const { filteredProducts, filter } = useFilter(products)

  return (
    <div>
      <Header />
      <Cart />
      {filteredProducts(products).map(product => (
        <Product image={product.thumbnail} title={product.title} price={product.price} key={product.id} />
      ))}
      <Footer />
    </div>
  )
}

export default ProductsContainer
