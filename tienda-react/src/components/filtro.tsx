import { useContext } from "react"
import { FiltersContext } from "../contexts/context"

export function Filtro({categorias}: {categorias:string[]}){
  const {  setFilters } = useContext(FiltersContext)

    function handleSelect(event){
        setFilters(prev=>({...prev, category: event.target.value}))
    }

    return (
        <select name="" id="" onChange={handleSelect}>
            {categorias.map((cat) => (
                <option value={cat} >{cat}</option>
            ))}
        </select>
    )
}