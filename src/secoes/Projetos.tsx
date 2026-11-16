// Renderiza todos os projetos do portfólio a partir dos dados cadastrados.
import { projetos } from "../dados/projetos";
import Icone from "../componentes/Icone";
import Secao from "../componentes/Secao";
import "./Projetos.css";
import "../componentes/CartaoHover.css";

export default function Projetos() {
  return (
    <Secao id="projetos" titulo="Projetos em destaque">
      <ul className="projetos__lista" role="list">
        {/* O ID é a chave estável de cada item renderizado na lista. */}
        {projetos.map((projeto) => (
          <li key={projeto.id} className="projetos__cartao cartao-hover">
            <h3>{projeto.nome}</h3>
            <p>{projeto.descricao}</p>

            <ul className="projetos__tecnologias" aria-label="Tecnologias" role="list">
              {projeto.tecnologias.map((tecnologia) => <li key={tecnologia}>{tecnologia}</li>)}
            </ul>

            {/* O cartão exibe o link apenas quando o projeto tem repositório cadastrado. */}
            {projeto.linkGithub && (
              <a
                className="projetos__link"
                href={projeto.linkGithub}
                aria-label={`GitHub de ${projeto.nome}`}
              >
                <Icone nome="github" tamanho={16} /> GitHub
              </a>
            )}

             {/* O cartão exibe o link apenas quando o projeto tem repositório cadastrado. */}
            {projeto.linkProjeto && (
              <a
                className="projetos__link"
                href={projeto.linkProjeto}
                aria-label={`GitHub de ${projeto.nome}`}
              >
                <Icone nome="github" tamanho={16} /> GitHub
              </a>
            )}


          </li>
        ))}
      </ul>
    </Secao>
  );
}
