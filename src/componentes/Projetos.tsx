import { useState } from "react";

type Projeto = {
  id: string;
  nome: string;
  descricao: string;
  linkGithub?: string; // O ponto de interrogação torna o campo opcional.
};

const projetos: Projeto[] = [
  {
    id: "portfolio",
    nome: "Portfólio pessoal",
    descricao: "Repositório da versão original do meu portfólio.",
    linkGithub: "https://github.com/limaamorim/Meu-Portfolio",
  },
  {
    id: "gerenciador-tarefas",
    nome: "Gerenciador de tarefas",
    descricao: "Projeto de estudo para praticar React com uma lista de tarefas.",
  },
];

export default function Projetos() {
  // false significa que a caixa começa desmarcada.
  const [somenteComGithub, setSomenteComGithub] = useState(false);

  // Começamos com todos os projetos e aplicamos o filtro se a caixa estiver marcada.
  let projetosVisiveis = projetos;

  if (somenteComGithub) {
    projetosVisiveis = projetos.filter((projeto) => Boolean(projeto.linkGithub));
  }

  return (
    <section id="projetos">
      <h2>Projetos</h2>

      <label>
        <input
          type="checkbox"
          checked={somenteComGithub}
          onChange={(evento) => {
            // checked contém true se a caixa foi marcada e false se foi desmarcada.
            setSomenteComGithub(evento.currentTarget.checked);
          }}
        />{" "}
        Mostrar apenas projetos com GitHub
      </label>

      <ul>
        {projetosVisiveis.map((projeto) => (
          <li key={projeto.id}>
            <h3>{projeto.nome}</h3>
            <p>{projeto.descricao}</p>

            {projeto.linkGithub && (
              <a href={projeto.linkGithub}>Ver repositório no GitHub</a>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}