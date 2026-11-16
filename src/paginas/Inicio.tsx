// Reúne a apresentação e as seções do portfólio em uma página.
import Apresentacao from "../componentes/Apresentacao";
import Cabecalho from "../componentes/Cabecalho";
import Projetos from "../componentes/Projetos";
import Secao from "../componentes/Secao";
import { contatos, tecnologias, trajetoria } from "../dados/perfil";
import "./Inicio.css";

export default function Inicio() {
  return (
    <>
      <Cabecalho />

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
              <li><strong>Aplicações web</strong>React e TypeScript</li>
              <li><strong>Automação e integração</strong>Power Apps e Power Automate</li>
              <li><strong>Dados corporativos</strong>Dataverse e SharePoint</li>
            </ul>
          </div>
        </Secao>

        <Secao id="tecnologias" titulo="Tecnologias" alternada>
          <div className="inicio__tecnologias">
            {tecnologias.map(({ categoria, itens }) => (
              <div key={categoria}>
                <h3>{categoria}</h3>
                <ul role="list">
                  {itens.map((tecnologia) => <li key={tecnologia}>{tecnologia}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </Secao>

        <Projetos />

        <Secao id="experiencia" titulo="Experiência e formação" alternada>
          <ol className="inicio__trajetoria" role="list">
            {trajetoria.map(({ titulo, instituicao, periodo, descricao }) => (
              <li key={titulo}>
                <div className="inicio__trajetoria-cabecalho">
                  <h3>{titulo}</h3>
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
            {contatos.map(({ nome, detalhe, url }) => (
              <li key={nome}>
                <a href={url}>
                  <strong>{nome} <span aria-hidden="true">↗</span></strong>
                  <span>{detalhe}</span>
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
