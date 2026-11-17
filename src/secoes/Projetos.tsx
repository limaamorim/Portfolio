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

            {/* Agrupa os links opcionais em uma linha dentro do cartão. */}
            {(projeto.linkGithub || projeto.linkProjeto) && (
              <div className="projetos__links">
                {projeto.linkGithub && (
                  <a
                    className="projetos__link"
                    href={projeto.linkGithub}
                    aria-label={`GitHub de ${projeto.nome}`}
                    target="_blank"
                  >
                    <Icone nome="github" tamanho={16} /> GitHub
                  </a>
                )}

                {projeto.linkProjeto && (
                  <a
                    className="projetos__link"
                    href={projeto.linkProjeto}
                    aria-label={`Ver projeto: ${projeto.nome}`}
                    target="_blank"
                  >
                    <Icone nome="linkExterno" tamanho={16} /> Ver projeto
                  </a>
                )}
              </div>
            )}
          </li>
        ))}
      </ul>
    </Secao>
  );
}
