import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProductsContainer from './components/ProductsContainer'
import { CartProvider } from './context/cart'

function App() {

  return (
    <CartProvider>
      <ProductsContainer />
    </CartProvider>    
  )
}

export default App
