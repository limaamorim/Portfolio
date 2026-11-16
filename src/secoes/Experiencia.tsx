// Organiza a experiência e a formação em uma linha do tempo.
import Icone from "../componentes/Icone";
import Secao from "../componentes/Secao";
import { trajetoria } from "../dados/perfil";
import "./Experiencia.css";

export default function Experiencia() {
  return (
    <Secao id="experiencia" titulo="Experiência e formação" alternada>
      <ol className="experiencia__trajetoria" role="list">
        {trajetoria.map(({ titulo, instituicao, periodo, descricao, tipo }) => (
          <li key={titulo} className="secao__painel">
            <span className="icone-destaque experiencia__icone">
              <Icone nome={tipo === "trabalho" ? "trabalho" : "formacao"} />
            </span>
            <div className="experiencia__trajetoria-cabecalho">
              <h3>{titulo}</h3>
              {/* Alguns itens da trajetória ainda não têm um período cadastrado. */}
              {periodo && <span>{periodo}</span>}
            </div>
            <p className="experiencia__instituicao">{instituicao}</p>
            <p>{descricao}</p>
          </li>
        ))}
      </ol>
    </Secao>
  );
}
