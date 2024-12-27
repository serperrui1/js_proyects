import { useFilters } from "../hooks/useFilters";

export function Filtro() {
  const { updateCategoryFilter, updateMinPrice, categorias } = useFilters();

  function handleSelect(event) {
    updateCategoryFilter(event.target.value);
  }
  function handleMinPrice(event) {

    updateMinPrice(parseInt(event.target.value));
  }

  return (
    <>
      0€ &nbsp;<input type="range" min="0" max="1000" step="50" onChange={handleMinPrice}></input>&nbsp;1000€ &nbsp;
      <select name="" id="" onChange={handleSelect}>
        <option value="all">all</option>
        {categorias.map((cat) => (
          <option value={cat}>{cat}</option>
        ))}
      </select>
    </>
  );
}
