import { createContext, useState, ReactNode } from 'react'
import { Category } from '../models/producto';

// Definir el tipo para el contexto
interface FiltersContextType {
  filters: {
    category: Category;
    minPrice: number;
  };
  setFilters: React.Dispatch<React.SetStateAction<{
    category: Category;
    minPrice: number;
  }>>;
  categorias: Category[];
  setCategorias: React.Dispatch<React.SetStateAction<Category[]>>;
}

// Proveer un valor predeterminado
const defaultFiltersContext: FiltersContextType = {
  filters: {
    category: { id: 0, name: 'all', image: '' },
    minPrice: 250
  },
  setFilters: () => {},
  categorias: [],
  setCategorias: () => {}
}

// Este es el que tenemos que consumir
export const FiltersContext = createContext<FiltersContextType>(defaultFiltersContext)

// Este es el que nos provee de acceso al contexto
export function FiltersProvider({ children }: { children: ReactNode }) {
  const [filters, setFilters] = useState(defaultFiltersContext.filters)
  const [categorias, setCategorias ] = useState<Category[]>([]);
  

  return (
    <FiltersContext.Provider value={{ filters, setFilters, categorias, setCategorias}}>
      {children}
    </FiltersContext.Provider>
  )
}