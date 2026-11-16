// Exibe os links para os perfis profissionais.
import Icone from "../componentes/Icone";
import Secao from "../componentes/Secao";
import { contatos } from "../dados/perfil";
import "../componentes/CartaoHover.css";
import "./Contato.css";

export default function Contato() {
  return (
    <Secao id="contato" titulo="Vamos conversar?">
      <ul className="contato__lista" role="list">
        {contatos.map(({ nome, detalhe, url, icone }) => (
          <li key={nome}>
            <a className="secao__painel secao__painel--com-icone cartao-hover" href={url}>
              <span className="icone-destaque"><Icone nome={icone} tamanho={20} /></span>
              <div>
                <strong>{nome}</strong>
                <span className="contato__detalhe">{detalhe}</span>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </Secao>
  );
}
