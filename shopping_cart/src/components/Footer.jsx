import React from 'react'
import "../stylesheets/footer.css"
import useFilter from '../helpers/useFilter'

const Footer = () => {

  const { filter } = useFilter();

  return (
    <footer className='footer'>
      {JSON.stringify(filter)}
    </footer>
  )
}

export default Footer
