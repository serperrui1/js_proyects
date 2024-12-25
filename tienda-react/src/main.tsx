import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { FiltersProvider } from "./contexts/context.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <FiltersProvider>
      <header>
        <h1 className="nombre-tienda">Tienda</h1>
      </header>
      <App />
    </FiltersProvider>
  </StrictMode>
);
