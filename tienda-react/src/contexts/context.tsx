import { createContext, useState, ReactNode } from 'react'

// Definir el tipo para el contexto
interface FiltersContextType {
  filters: {
    category: string;
    minPrice: number;
  };
  setFilters: React.Dispatch<React.SetStateAction<{
    category: string;
    minPrice: number;
  }>>;
}

// Proveer un valor predeterminado
const defaultFiltersContext: FiltersContextType = {
  filters: {
    category: 'all',
    minPrice: 250
  },
  setFilters: () => {}
}

// Este es el que tenemos que consumir
export const FiltersContext = createContext<FiltersContextType>(defaultFiltersContext)

// Este es el que nos provee de acceso al contexto
export function FiltersProvider({ children }: { children: ReactNode }) {
  const [filters, setFilters] = useState({
    category: 'all',
    minPrice: 250
  })

  return (
    <FiltersContext.Provider value={{ filters, setFilters }}>
      {children}
    </FiltersContext.Provider>
  )
}