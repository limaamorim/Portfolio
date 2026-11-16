// Exibe as tecnologias organizadas por categoria.
import Secao from "../componentes/Secao";
import { tecnologias } from "../dados/perfil";
import "../componentes/CartaoHover.css";
import "./Tecnologias.css";

export default function Tecnologias() {
  return (
    <Secao id="tecnologias" titulo="Tecnologias" alternada>
      <div className="tecnologias__grupos">
        {/* Cada grupo tem um título e uma lista de tecnologias. */}
        {tecnologias.map(({ categoria, itens }) => (
          <div key={categoria}>
            <h3>{categoria}</h3>
            <ul role="list">
              {itens.map((tecnologia) => <li key={tecnologia} className="cartao-hover">{tecnologia}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </Secao>
  );
}
