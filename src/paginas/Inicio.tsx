// Organiza as seções e o layout da página do portfólio.
import Apresentacao from "../componentes/Apresentacao";
import Cabecalho from "../componentes/Cabecalho";
import Projetos from "../componentes/Projetos";
import Secao from "../componentes/Secao";
import estilos from "./Inicio.module.css";

export default function Inicio() {
  return (
    <>
      <Cabecalho />

      <main id="conteudo" className={estilos.conteudo} tabIndex={-1}>
        <Apresentacao
          nome="José Fernando de Lima Amorim"
          descricao="Desenvolvedor com interesse em React, TypeScript e Power Platform."
        />

        <div className={estilos.grade}>
          <Secao id="sobre" titulo="Sobre mim">
            <p>
              Sou de Recife e gosto de desenvolver aplicações que resolvem
              problemas do dia a dia.
            </p>
          </Secao>

          <Secao id="tecnologias" titulo="Tecnologias">
            <ul className={estilos.tecnologias} role="list">
              <li>JavaScript</li>
              <li>React</li>
              <li>TypeScript</li>
              <li>Power Apps</li>
              <li>Power Automate</li>
              <li>Dataverse</li>
              <li>SharePoint</li>
            </ul>
          </Secao>
        </div>

        <Projetos />

        <div className={estilos.grade}>
          <Secao id="experiencia" titulo="Experiência">
            <h3 className={estilos.cargo}>Advisory Associate — KPMG</h3>
            <p>
              Desenvolvimento de aplicações com Power Platform, incluindo
              integrações com Dataverse e SharePoint.
            </p>
          </Secao>

          <Secao id="contato" titulo="Contato">
            <a className={estilos.linkContato} href="https://github.com/limaamorim">
              Meu perfil no GitHub <span aria-hidden="true">↗</span>
            </a>
          </Secao>
        </div>
      </main>
    </>
  );
}
