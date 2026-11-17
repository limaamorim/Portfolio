// Centraliza os dados de tecnologias, trajetória e contato.
export const tecnologias = [
  { categoria: "Frontend", itens: ["JavaScript", "TypeScript", "React", "HTML", "CSS"] },
  { categoria: "Power Platform", itens: ["Power Apps", "Power Automate", "Dataverse", "SharePoint"] },
  { categoria: "Backend e dados", itens: ["Node.js", "Express", "Python", "Java", "Spring Boot", "PostgreSQL"] },
];

export const trajetoria = [
  {
    tipo: "trabalho",
    titulo: "Advisory Associate",
    instituicao: "KPMG",
    periodo: "Atualmente",
    descricao: "Desenvolvimento de aplicações com Power Platform, incluindo integrações com Dataverse e SharePoint.",
  },
  {
    tipo: "trabalho",
    titulo: "Jovem Aprendiz",
    instituicao: "A&B Alimentos e Bebidas",
    periodo: "01/2025 — 02/2026",
    descricao: "Apoio às rotinas da empresa com uso do sistema ERP TOTVS.",
  },
  {
    tipo: "formacao",
    titulo: "Análise e Desenvolvimento de Sistemas",
    instituicao: "Senac Recife",
    periodo: "02/2024 — 07/2026 ",
    descricao: "Formação em desenvolvimento de software, bancos de dados, engenharia de software e aplicações web.",
  },
  {
    tipo: "formacao",
    titulo: "Técnico em Redes de Computadores",
    instituicao: "ETE Pastor Isaac Martins Rodrigues",
    periodo: "2020 — 2022",
    descricao: "Formação em infraestrutura, administração de sistemas e suporte técnico.",
  },
];

export const contatos = [
  { nome: "GitHub", icone: "github" as const, detalhe: "limaamorim", url: "https://github.com/limaamorim" },
  { nome: "LinkedIn", icone: "linkedin" as const, detalhe: "José Fernando", url: "https://www.linkedin.com/in/jos%C3%A9-fernando-lima-amorim/" },
  { nome: "WhatsApp", icone: "whatsapp" as const, detalhe: "Enviar mensagem", url: "https://wa.me/5581998129437" },
];
