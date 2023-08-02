import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Product from './components/products/Product'
import ProductContainer from './components/products/ProductContainer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ProductContainer />
    </>
  )
}

export default App
