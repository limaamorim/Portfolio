// Gerencia o tema e sincroniza a preferência com o navegador.
import { useEffect, useState } from "react";

type Tema = "claro" | "escuro";

const chaveTema = "portfolio-tema";

// Mantém a preferência das versões anteriores e usa escuro como padrão.
function lerTemaInicial(): Tema {
  try {
    return localStorage.getItem(chaveTema) === "claro" ? "claro" : "escuro";
  } catch {
    return "escuro";
  }
}

export function useTema() {
  const [tema, setTema] = useState(lerTemaInicial);

  useEffect(() => {
    document.documentElement.dataset.tema = tema;

    try {
      localStorage.setItem(chaveTema, tema);
    } catch {
      // A troca continua funcionando quando o armazenamento está bloqueado.
    }
  }, [tema]);

  function alternarTema() {
    setTema((temaAtual) => (temaAtual === "escuro" ? "claro" : "escuro"));
  }

  return { tema, alternarTema };
}
