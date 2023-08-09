import React, {useContext, useState} from 'react'
import { FiltersContext } from '../context/filters'

// const initalFilter = {
//   category: "all",
//   minPrice: 0
// }

const useFilter = () => {
  // const [filter, setFilter] = useState(initalFilter)

  const { filter , setFilter } = useContext(FiltersContext)


  const filteredProducts = (products) =>{
    return products.filter(product => (
      product.price >= filter.minPrice && (
        filter.category == "all" || 
        product.category == filter.category
      )
    ))
  }

  return { setFilter, filteredProducts, filter }

}

export default useFilter
