// Exibe os projetos e filtra os que têm um repositório público.
import { useState } from "react";
import { projetos } from "../dados/projetos";
import Secao from "./Secao";
import "./Projetos.css";

export default function Projetos() {
  const [somenteComGithub, setSomenteComGithub] = useState(false);

  // Calcula a lista a partir da preferência atual do filtro.
  const projetosVisiveis = somenteComGithub
    ? projetos.filter((projeto) => Boolean(projeto.linkGithub))
    : projetos;

  return (
    <Secao id="projetos" titulo="Projetos em destaque">
      <div className="projetos__controles">
        <label className="projetos__filtro">
          <input
            type="checkbox"
            checked={somenteComGithub}
            onChange={(evento) => setSomenteComGithub(evento.currentTarget.checked)}
          />
          Mostrar apenas projetos com GitHub
        </label>

        <p role="status">
          {projetosVisiveis.length === 1
            ? "1 projeto exibido"
            : `${projetosVisiveis.length} projetos exibidos`}
        </p>
      </div>

      <ul className="projetos__lista" role="list">
        {projetosVisiveis.map((projeto) => (
          <li key={projeto.id} className="projetos__cartao">
            <h3>{projeto.nome}</h3>
            <p>{projeto.descricao}</p>

            <ul className="projetos__tecnologias" aria-label="Tecnologias" role="list">
              {projeto.tecnologias.map((tecnologia) => <li key={tecnologia}>{tecnologia}</li>)}
            </ul>

            {projeto.linkGithub && (
              <a
                className="projetos__link"
                href={projeto.linkGithub}
                aria-label={`GitHub de ${projeto.nome}`}
              >
                GitHub <span aria-hidden="true">↗</span>
              </a>
            )}
          </li>
        ))}
      </ul>
    </Secao>
  );
}
