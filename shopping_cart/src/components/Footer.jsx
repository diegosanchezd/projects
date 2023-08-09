import React from 'react'
import "../stylesheets/footer.css"
import useFilter from '../helpers/useFilter'
import useCart from '../helpers/useCart';

const Footer = () => {

  const { filter } = useFilter();
  const { cart } = useCart();

  return (
    <footer className='footer'>
      {/* {JSON.stringify(filter)} */}
      {JSON.stringify(cart)}
    </footer>
  )
}

export default Footer
