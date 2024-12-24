import { useFilters } from "../hooks/useFilters"

export function Filtro(){
    const { setFilters, categorias } = useFilters()

    function handleSelect(event){
        console.log(event.target.value)
        setFilters(prev=>({
            ...prev,
            category: categorias.find(cat=>cat.id === parseInt(event.target.value))??{id:0, name: 'all', image: ''}
        }))
    }

    return (
        <select name="" id="" onChange={handleSelect}>
            {categorias.map((cat) => (
                <option value={cat.id} >{cat.name}</option>
            ))}
        </select>
    )
}