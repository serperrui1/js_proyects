import { ProductoInterface } from "../models/producto";
import "./producto.css";
export function Producto({ producto }: { producto: ProductoInterface }) {
    const imagen = producto.image
    const imagenMostrar = !(imagen.includes("placeimg")|| imagen.includes("pravatar")) ? imagen : 'https://join.travelmanagers.com.au/wp-content/uploads/2017/09/default-placeholder-300x300.png';
  return (
    <li className="producto">
      <img src={imagenMostrar} alt={producto.title} />
      <h4>{producto.title}</h4>
      <div className="producto-precio">
        <p>{producto.price}€</p>
        <button>Añadir al carrito</button>
      </div>
    </li>
  );
}
