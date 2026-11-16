// Exibe a lista de projetos e permite filtrar os que têm repositório.
import { useState } from "react";
import { projetos } from "../dados/projetos";
import Secao from "./Secao";
import estilos from "./Projetos.module.css";

export default function Projetos() {
  const [somenteComGithub, setSomenteComGithub] = useState(false);

  // A lista é derivada do filtro a cada renderização.
  const projetosVisiveis = somenteComGithub
    ? projetos.filter((projeto) => Boolean(projeto.linkGithub))
    : projetos;

  return (
    <Secao id="projetos" titulo="Projetos">
      <label className={estilos.filtro}>
        <input
          type="checkbox"
          checked={somenteComGithub}
          onChange={(evento) => setSomenteComGithub(evento.currentTarget.checked)}
        />
        Mostrar apenas projetos com GitHub
      </label>

      <p className={estilos.resultado} role="status">
        {projetosVisiveis.length === 1
          ? "1 projeto exibido"
          : `${projetosVisiveis.length} projetos exibidos`}
      </p>

      <ul className={estilos.lista} role="list">
        {projetosVisiveis.map((projeto) => (
          <li key={projeto.id} className={estilos.cartao}>
            <h3>{projeto.nome}</h3>
            <p>{projeto.descricao}</p>
            {projeto.linkGithub && (
              <a
                href={projeto.linkGithub}
                aria-label={`Ver repositório no GitHub de ${projeto.nome}`}
              >
                Ver repositório no GitHub <span aria-hidden="true">↗</span>
              </a>
            )}
          </li>
        ))}
      </ul>
    </Secao>
  );
}
