import React, {useId} from 'react'
import { CartIcon, AddToCartIcon } from "./Icons"
import "../stylesheets/cart.css"

const Cart = () => {

  const cartButtonId = useId();

  return (
    <>
      <label className='see_cart' htmlFor={cartButtonId}>
        {<AddToCartIcon />}
      </label>
      <input type="checkbox" id={cartButtonId} hidden />
      <aside className='cart'>
        <div>
          <h3>COntent...</h3>
        </div>
      </aside>
    </>
    
  )
}

export default Cart
