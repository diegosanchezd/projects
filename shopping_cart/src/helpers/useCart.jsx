import { useContext } from "react";
import { CartContext } from "../context/cart"
 

const useCart = () => {
  
  const cartContext = useContext(CartContext);

  if(cartContext == undefined){
    throw new Error("El componente no tiene acceso al contexto...")
  }

  return cartContext

}

export default useCart
