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
  // O inicializador lê a preferência quando o componente é montado.
  const [tema, setTema] = useState(lerTemaInicial);

  // Quando o estado muda, o efeito atualiza o CSS e salva a escolha no navegador.
  useEffect(() => {
    document.documentElement.dataset.tema = tema;

    try {
      localStorage.setItem(chaveTema, tema);
    } catch {
      // A troca continua funcionando quando o armazenamento está bloqueado.
    }
  }, [tema]);

  // Calcula o próximo tema a partir do valor mais recente do estado.
  function alternarTema() {
    setTema((temaAtual) => (temaAtual === "escuro" ? "claro" : "escuro"));
  }

  return { tema, alternarTema };
}
