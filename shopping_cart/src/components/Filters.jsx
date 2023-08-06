import React, { useState, useId } from 'react'
import useFilter from '../helpers/useFilter';

const Filters = () => {
  
  const { setFilter, filter } = useFilter();
  // const [minPrice, setMinPrice] = useState(0);
  const filteredPriceId = useId();
  const filteredCategoryId = useId();

  const handleMinPrice = (e)=> {

    //es un objeto, va a tener lo mismo que tenia pero que en la propiedad "minPrice" cambia el valor, el manejar el valor de
    // un estado de un padre desde un componente hijo se le llama PROP DRILLING, handleFilter setea el valor de un estado, 
    // aun no sabemos que valores tendrá desde acá por que donde lo usamos es en ProductsContainer

    setFilter(prevState => ({
      ...prevState,
      minPrice: e.target.value
    }))
  }

  const handleCategory= (e) =>{
    setFilter(prevState => ({
      ...prevState,
      category: e.target.value
    }))
  }

  return (  
    <section>
      <div>
        <label htmlFor={filteredPriceId}>Min. Price</label>
        <input type="range" id={filteredPriceId} min={0} max={1000} onChange={handleMinPrice} value={filter.minPrice} />
        <span>{filter.minPrice }</span>
      </div>
      <div>
        <label htmlFor={filteredCategoryId}>Category</label>
        <select name="category" id={filteredCategoryId} onChange={handleCategory}>
          <option value="all">All</option>
          <option value="home-decoration">Home Decoration</option>
          <option value="laptops">Laptops</option>
          <option value="smartphones">Smartphones</option>
        </select>
      </div>
    </section>
  )
}

export default Filters
