// Monta o aplicativo React no HTML e carrega os estilos globais.
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// O React usa o elemento #root do index.html. O StrictMode ajuda a detectar problemas durante o desenvolvimento.
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
