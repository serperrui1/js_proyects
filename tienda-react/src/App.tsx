
import { getAllCategorias, getAllProductosByCategoria, getProductos } from "./services/products"
import './App.css'
import { useEffect, useState } from "react";
import { Producto } from "./components/producto";
import { ProductoInterface } from "./models/producto";
import { Filtro } from "./components/filtro";

import { useFilters } from "./hooks/useFilters";

function App() {
  const { filters, setCategorias } = useFilters()
  const [productos, setProductos ] = useState<ProductoInterface[]>([]);

  useEffect(() => {
    getProductos().then((data) => setProductos(data.splice(0, 19)))
  },[]);
  useEffect(() => {
    if(filters.category.name === 'all'){
    getAllCategorias().then((data) => setCategorias(data))}
    else{
      getAllProductosByCategoria(filters.category).then((data) => setProductos(data))
    }
  },[filters]);


  return (
    <>
      <h1>Productos</h1>
      <Filtro />
      <ul className="productos">
        {productos.map((producto) => (
          <Producto key={producto.id}  producto={producto} />
        ))}
      </ul>
    </>
  )
}

export default App
