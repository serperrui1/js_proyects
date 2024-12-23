import { ProductoInterface } from "../models/producto";
import "./producto.css";
export function Producto({ producto }: { producto: ProductoInterface }) {
  return (
    <li className="producto">
      <img src={producto.image} alt={producto.title} />
      <h4>{producto.title}</h4>
      <div className="producto-precio">
        <p>{producto.price}€</p>
        <button>Añadir al carrito</button>
      </div>
    </li>
  );
}
