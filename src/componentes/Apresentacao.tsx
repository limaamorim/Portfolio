// Apresenta o perfil e os atalhos para projetos e contato.
import Icone from "./Icone";
import "./Apresentacao.css";

export default function Apresentacao() {
  return (
    <section id="inicio" className="apresentacao" aria-labelledby="titulo-inicio" tabIndex={-1}>
      <div className="apresentacao__conteudo">
        <p className="apresentacao__saudacao">Olá, eu sou</p>
        <h1 id="titulo-inicio" className="apresentacao__titulo">
          José <span>Fernando</span>
        </h1>
        <p className="apresentacao__cargo">Desenvolvedor de aplicações</p>
        <p className="apresentacao__descricao">
          Desenvolvo aplicações com Power Platform e exploro React e TypeScript
          em projetos web.
        </p>

        {/* Os links usam os IDs das seções para navegar dentro da página. */}
        <div className="apresentacao__acoes">
          <a className="apresentacao__acao apresentacao__acao--principal" href="#projetos">
            Ver projetos <Icone nome="setaBaixo" />
          </a>
          <a className="apresentacao__acao" href="#contato">
            Contato <Icone nome="enviar" />
          </a>
        </div>

        {/* O terminal é uma apresentação estática do perfil e das tecnologias. */}
        <div className="apresentacao__terminal">
          <div className="apresentacao__terminal-barra" aria-hidden="true">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <p><code><span>$</span> whoami</code></p>
          <p>José Fernando de Lima Amorim</p>
          <p><code><span>$</span> cat tecnologias.txt</code></p>
          <p>React, TypeScript, Power Platform</p>
        </div>
      </div>
    </section>
  );
}
