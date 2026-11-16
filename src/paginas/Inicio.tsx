// Reúne a apresentação e as seções do portfólio em uma página.
import Apresentacao from "../componentes/Apresentacao";
import Cabecalho from "../componentes/Cabecalho";
import Icone from "../componentes/Icone";
import Projetos from "../componentes/Projetos";
import Secao from "../componentes/Secao";
import { contatos, tecnologias, trajetoria } from "../dados/perfil";
import "./Inicio.css";
import "../componentes/CartaoHover.css";

export default function Inicio() {
  return (
    <>
      <Cabecalho />

      {/* O ID e o tabIndex permitem que o atalho do cabeçalho envie o foco ao conteúdo. */}
      <main id="conteudo" className="inicio" tabIndex={-1}>
        <Apresentacao />

        <Secao id="sobre" titulo="Quem sou eu">
          <div className="inicio__sobre">
            <div className="inicio__bio">
              <p>
                Sou José Fernando de Lima Amorim, de Recife. Gosto de desenvolver
                aplicações que resolvem problemas do dia a dia.
              </p>
              <p>
                Trabalho com Power Platform e desenvolvo projetos web para
                praticar React, TypeScript e integração de aplicações.
              </p>
            </div>

            <ul className="inicio__destaques" role="list">
              <li className="cartao-hover">
                <span className="inicio__icone"><Icone nome="codigo" tamanho={22} /></span>
                <div><strong>Aplicações web</strong>React e TypeScript</div>
              </li>
              <li className="cartao-hover">
                <span className="inicio__icone"><Icone nome="servidor" tamanho={22} /></span>
                <div><strong>Automação e integração</strong>Power Apps e Power Automate</div>
              </li>
              <li className="cartao-hover">
                <span className="inicio__icone"><Icone nome="dados" tamanho={22} /></span>
                <div><strong>Dados corporativos</strong>Dataverse e SharePoint</div>
              </li>
            </ul>
          </div>
        </Secao>

        <Secao id="tecnologias" titulo="Tecnologias" alternada>
          <div className="inicio__tecnologias">
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

        <Projetos />

        <Secao id="experiencia" titulo="Experiência e formação" alternada>
          <ol className="inicio__trajetoria" role="list">
            {trajetoria.map(({ titulo, instituicao, periodo, descricao, tipo }) => (
              <li key={titulo}>
                <span className="inicio__icone inicio__icone--trajetoria">
                  <Icone nome={tipo === "trabalho" ? "trabalho" : "formacao"} />
                </span>
                <div className="inicio__trajetoria-cabecalho">
                  <h3>{titulo}</h3>
                  {/* Alguns itens da trajetória ainda não têm um período cadastrado. */}
                  {periodo && <span>{periodo}</span>}
                </div>
                <p className="inicio__instituicao">{instituicao}</p>
                <p>{descricao}</p>
              </li>
            ))}
          </ol>
        </Secao>

        <Secao id="contato" titulo="Vamos conversar?">
          <ul className="inicio__contatos" role="list">
            {contatos.map(({ nome, detalhe, url, icone }) => (
              <li key={nome}>
                <a className="cartao-hover" href={url}>
                  <span className="inicio__icone"><Icone nome={icone} tamanho={20} /></span>
                  <div>
                    <strong>{nome}</strong>
                    <span className="inicio__contato-detalhe">{detalhe}</span>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </Secao>
      </main>

      <footer className="inicio__rodape">José Fernando · Portfólio em React e TypeScript</footer>
    </>
  );
}
