
import { getAllCategorias, getAllProductosByCategoria, getProductos } from "./services/products"
import './App.css'
import {useContext, useEffect, useState } from "react";
import { Producto } from "./components/producto";
import { ProductoInterface } from "./models/producto";
import { Filtro } from "./components/filtro";
import { FiltersContext } from "./contexts/context";

function App() {
  const { filters } = useContext(FiltersContext)
  const [productos, setProductos ] = useState<ProductoInterface[]>([]);
  const [categorias, setCategorias ] = useState<string[]>([]);

  useEffect(() => {
    getProductos().then((data) => setProductos(data))
  },[]);
  useEffect(() => {
    if(filters.category === 'all'){
    getAllCategorias().then((data) => setCategorias(data))}
    else{
      getAllProductosByCategoria(filters.category).then((data) => setProductos(data))
    }
  },[filters]);


  return (
    <>
      <h1>Productos</h1>
      <Filtro categorias={categorias}/>
      <ul className="productos">
        {productos.map((producto) => (
          <Producto key={producto.id}  producto={producto} />
        ))}
      </ul>
    </>
  )
}

export default App
