// Reúne a descrição, as tecnologias e os links dos cartões de projeto.
type Projeto = {
  id: string;
  nome: string;
  descricao: string;
  tecnologias: string[];
  linkGithub?: string;
};

export const projetos: Projeto[] = [
  {
    id: "amigo-edu",
    nome: "Amigo Edu — Full Stack",
    descricao: "Plataforma de indicações educacionais com autenticação, gamificação, rankings e cálculo de impacto social e financeiro.",
    tecnologias: ["Node.js", "Express", "PostgreSQL", "React", "Docker"],
    linkGithub: "https://github.com/limaamorim/Proleduca_Backend",
  },
  {
    id: "indicium",
    nome: "Desafio Ciência de Dados — Indicium / Lighthouse",
    descricao: "Análise exploratória e modelagem preditiva com dados de cinema para apoiar a tomada de decisão.",
    tecnologias: ["Python", "Pandas", "Scikit-learn", "Jupyter Notebook"],
    linkGithub: "https://github.com/limaamorim/lighthouse-ciencia-dados",
  },
  {
    id: "api-produtos",
    nome: "API REST de Produtos — Bootcamp Java",
    descricao: "API para cadastro e gerenciamento de produtos, com persistência de dados, tratamento de exceções e documentação Swagger.",
    tecnologias: ["Java", "Spring Boot", "Hibernate", "Swagger"],
    linkGithub: "https://github.com/limaamorim/ProjetoFinal-bootcamp",
  },
  {
    id: "gerenciamento-eventos",
    nome: "Sistema de Gerenciamento de Eventos",
    descricao: "Sistema para inscrições, check-in e relatórios de eventos, palestras e workshops, com dados armazenados em JSON.",
    tecnologias: ["Python", "JSON", "CLI", "Pytest"],
    linkGithub: "https://github.com/limaamorim/Sistema-de-Gerenciamento-de-Eventos-",
  },
  {
    id: "portfolio",
    nome: "Portfólio pessoal",
    descricao: "Repositório da versão original do meu portfólio.",
    tecnologias: ["React", "TypeScript", "Vite"],
    linkGithub: "https://github.com/limaamorim/Meu-Portfolio",
  },
  {
    id: "gerenciador-tarefas",
    nome: "Gerenciador de tarefas",
    descricao: "Projeto de estudo para praticar React com uma lista de tarefas.",
    tecnologias: ["React"],
  },
];
