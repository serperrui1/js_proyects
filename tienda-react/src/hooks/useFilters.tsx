
import { useContext } from "react";
import { FiltersContext } from "../contexts/context"

export function useFilters(){
    const {filters, setFilters, categorias, setCategorias} = useContext(FiltersContext);   
    

return {filters, setFilters, categorias, setCategorias}
};