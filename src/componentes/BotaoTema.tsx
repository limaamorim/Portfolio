// Disponibiliza a troca de tema no cabeçalho.
import { useTema } from "../hooks/useTema";
import estilos from "./BotaoTema.module.css";

export default function BotaoTema() {
  const { tema, alternarTema } = useTema();

  return (
    <button
      type="button"
      className={estilos.botao}
      aria-pressed={tema === "claro"}
      onClick={alternarTema}
    >
      <span aria-hidden="true">{tema === "escuro" ? "☾" : "☀"}</span>
      Tema claro
    </button>
  );
}
