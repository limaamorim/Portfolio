// Disponibiliza a troca de tema no cabeçalho.
import { useTema } from "../hooks/useTema";
import "./BotaoTema.css";

export default function BotaoTema() {
  // O hook controla a troca e a persistência do tema.
  const { tema, alternarTema } = useTema();

  // O texto do botão fica fixo e aria-pressed indica se o tema claro está ativo.
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
