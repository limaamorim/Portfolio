// Apresenta a biografia e os principais focos de trabalho.
import Icone from "../componentes/Icone";
import Secao from "../componentes/Secao";
import "../componentes/CartaoHover.css";
import "./Sobre.css";

export default function Sobre() {
  return (
    <Secao id="sobre" titulo="Quem sou eu">
      <div className="sobre__conteudo">
        <div className="sobre__bio">
          <p>
            Sou José Fernando de Lima Amorim, de Paulista. Gosto de desenvolver
            aplicações que resolvem problemas do dia a dia.
          </p>
          <p>
            Trabalho com Power Platform e desenvolvo projetos web para
            praticar React, TypeScript e integração de aplicações.
          </p>
        </div>

        <ul className="sobre__destaques" role="list">
          <li className="secao__painel secao__painel--com-icone cartao-hover">
            <span className="icone-destaque"><Icone nome="codigo" tamanho={22} /></span>
            <div><strong>Aplicações web</strong>React e TypeScript</div>
          </li>
          <li className="secao__painel secao__painel--com-icone cartao-hover">
            <span className="icone-destaque"><Icone nome="servidor" tamanho={22} /></span>
            <div><strong>Automação e integração</strong>Power Apps e Power Automate</div>
          </li>
          <li className="secao__painel secao__painel--com-icone cartao-hover">
            <span className="icone-destaque"><Icone nome="dados" tamanho={22} /></span>
            <div><strong>Dados corporativos</strong>Dataverse e SharePoint</div>
          </li>
        </ul>
      </div>
    </Secao>
  );
}
