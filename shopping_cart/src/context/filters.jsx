import { createContext, useState } from "react";

//1. Creo el contexto
export const FiltersContext = createContext();

//2. Creo el Provider
export function FiltersProvider ({ children }){

  const [filter, setFilter] = useState({
    category: "all",
    minPrice: 0
  })

  return(
    <FiltersContext.Provider value={{
      filter, 
      setFilter
    }}>
      {children}
    </FiltersContext.Provider>
    )
}