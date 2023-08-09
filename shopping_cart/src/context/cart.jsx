import { useState , createContext} from "react";

export const CartContext = createContext();

export function CartProvider ({children}){
  const [cart, setCart] = useState([])

  const addToCart = (product)=> {
    
    const checkProductQuantity = cart.findIndex(item => item.id == product.id)
    if(checkProductQuantity >= 0){
      const newCart = structuredClone(cart)
      newCart[checkProductQuantity].quantity += 1
      return setCart(newCart)
    }
    
    setCart(prevState => ([
      ...prevState,
      {
        id: product.id,
        title :product.title ,
        quantity: 1
      }
    ]))

  }

  const clearCart = ()=> setCart([])


  return(
    <CartContext.Provider value={{
      cart,
      addToCart,
      clearCart
    }}>
      {children}
    </CartContext.Provider>
  )
}