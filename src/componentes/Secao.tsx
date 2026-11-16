// Reúne o título, o conteúdo e o estilo comuns às seções do portfólio.
import type { ReactNode } from "react";
import estilos from "./Secao.module.css";

type SecaoProps = {
  id: string;
  titulo: string;
  children: ReactNode;
};

export default function Secao({ id, titulo, children }: SecaoProps) {
  const idTitulo = `titulo-${id}`;

  return (
    <section id={id} className={estilos.secao} aria-labelledby={idTitulo}>
      <h2 id={idTitulo} className={estilos.titulo}>{titulo}</h2>
      {children}
    </section>
  );
}
