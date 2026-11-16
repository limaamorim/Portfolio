// Reúne o conteúdo dos cartões de projeto e seus links opcionais.
type Projeto = {
  id: string;
  nome: string;
  descricao: string;
  linkGithub?: string;
};

export const projetos: Projeto[] = [
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
