import {
  getAllCategorias,
  getAllProductosByCategoria,
  getProductos,
} from "./services/products";
import "./App.css";
import { useCallback, useEffect, useMemo, useState } from "react";
import { Producto } from "./components/producto";
import { ProductoInterface } from "./models/producto";
import { Filtro } from "./components/filtro";

import { useFilters } from "./hooks/useFilters";

function App() {
  const { filters, setCategorias } = useFilters();
  const [productos, setProductos] = useState<ProductoInterface[]>([]);

  const fetchProductos = useCallback(async () => {
    let data;
    if (filters.category === "all") {
      data = await getProductos();
      setProductos(data.slice(0, 20)); // Usar slice para evitar mutaciones.
    } else {
      data = await getAllProductosByCategoria(filters.category);
      setProductos(data);
    }
  }, [filters.category]); // Solo se recrea cuando cambia la categoría.

  // Filtrar productos en base al precio mínimo
  const filteredProducts = useMemo(() => {
    return productos.filter((producto) => producto.price >= filters.minPrice);
  }, [productos, filters.minPrice]); // Solo se recalcula si cambian `productos` o `filters.minPrice`.

  // Cargar productos y categorías al montar el componente
  useEffect(() => {
    const initializeData = async () => {
      const productosData = await getProductos();
      setProductos(productosData.slice(0, 20)); // Usar slice en lugar de splice.
      const categoriasData = await getAllCategorias();
      setCategorias(categoriasData);
    };
    initializeData();
  }, [setCategorias]); // Se ejecuta solo al montar.

  // Llamar a fetchProductos cuando cambia la categoría
  useEffect(() => {
    fetchProductos();
  }, [fetchProductos]);

  return (
    <>

      <section className="productos-container">
        <div className="filtro">
          <Filtro />
        </div>
        <ul className="productos">
          {filteredProducts.map((producto) => (
            <Producto key={producto.id} producto={producto} />
          ))}
        </ul>
      </section>
    </>
  );
}

export default App;
