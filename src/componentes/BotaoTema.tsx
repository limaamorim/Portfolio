// Disponibiliza a troca de tema no cabeçalho.
import { useTema } from "../hooks/useTema";
import "./BotaoTema.css";

export default function BotaoTema() {
  const { tema, alternarTema } = useTema();

  return (
    <button
      type="button"
      className="botao-tema"
      aria-pressed={tema === "claro"}
      onClick={alternarTema}
    >
      <span aria-hidden="true">{tema === "escuro" ? "☾" : "☀"}</span>
      Tema claro
    </button>
  );
}
