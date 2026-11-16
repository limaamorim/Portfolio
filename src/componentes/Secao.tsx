// Compartilha o espaçamento, a largura e o título das seções.
import type { ReactNode } from "react";
import "./Secao.css";

type SecaoProps = {
  id: string;
  titulo: string;
  alternada?: boolean;
  children: ReactNode;
};

export default function Secao({ id, titulo, alternada, children }: SecaoProps) {
  // A âncora usa o ID da seção e aria-labelledby aponta para o título visível.
  const idTitulo = `titulo-${id}`;

  return (
    <section
      id={id}
      className={alternada ? "secao secao--alternada" : "secao"}
      aria-labelledby={idTitulo}
      tabIndex={-1}
    >
      <div className="secao__conteudo">
        <h2 id={idTitulo} className="secao__titulo">{titulo}</h2>
        {children}
      </div>
    </section>
  );
}
