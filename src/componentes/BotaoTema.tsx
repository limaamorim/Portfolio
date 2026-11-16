import { useEffect, useState } from "react";

// O TypeScript aceita apenas um desses dois textos como tema.
type Tema = "claro" | "escuro";

export default function BotaoTema() {
  const [tema, setTema] = useState<Tema>(() => {
    // Lê a preferência salva quando o componente é inicializado.
    const temaSalvo = localStorage.getItem("portfolio-tema");

    return temaSalvo === "claro" ? "claro" : "escuro";
  });

  useEffect(() => {
    // Adiciona data-tema ao elemento <html> para o CSS usar.
    document.documentElement.dataset.tema = tema;

    // Salva a preferência para a próxima vez que a página abrir.
    localStorage.setItem("portfolio-tema", tema);
  }, [tema]);

  function alternarTema() {
    setTema((temaAtual) => (temaAtual === "escuro" ? "claro" : "escuro"));
  }

  return (
    <button type="button" className="botao-tema" onClick={alternarTema}>
      {tema === "escuro" ? "Ativar tema claro" : "Ativar tema escuro"}
    </button>
  );
}