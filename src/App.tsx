import Apresentacao from "./componentes/Apresentacao";
import Projetos from "./componentes/Projetos";
import BotaoTema from "./componentes/BotaoTema";

export default function App() {
  return (
    <>
      <header>
        <nav aria-label="Menu principal">
          <a href="#inicio">Início</a>
          <a href="#sobre">Sobre</a>
          <a href="#tecnologias">Tecnologias</a>
          <a href="#projetos">Projetos</a>
          <a href="#experiencia">Experiência</a>
          <a href="#contato">Contato</a>
          <BotaoTema />                                            
        </nav>
      </header>

      <main>
        <Apresentacao
          nome="José Fernando de Lima Amorim"
          descricao="Desenvolvedor com interesse em React, TypeScript e Power Platform."
        />

        <section id="sobre">
          <h2>Sobre mim</h2>
          <p>
            Sou de Recife e gosto de desenvolver aplicações que resolvem
            problemas do dia a dia.
          </p>
        </section>

        <section id="tecnologias">
          <h2>Tecnologias</h2>
          <ul>
            <li>JavaScript, React e TypeScript</li>
            <li>Power Apps e Power Automate</li>
            <li>Dataverse e SharePoint</li>
          </ul>
        </section>

        <Projetos />

        <section id="experiencia">
          <h2>Experiência</h2>
          <h3>Advisory Associate — KPMG</h3>
          <p>
            Desenvolvimento de aplicações com Power Platform, incluindo
            integrações com Dataverse e SharePoint.
          </p>
        </section>

        <section id="contato">
          <h2>Contato</h2>
          <p>
            <a href="https://github.com/limaamorim">Meu perfil no GitHub</a>
          </p>
          
        </section>
      </main>
    </>
  );
}