// Exibe a apresentação principal e o atalho para os projetos.
import estilos from "./Apresentacao.module.css";

type ApresentacaoProps = {
  nome: string;
  descricao: string;
};

export default function Apresentacao({ nome, descricao }: ApresentacaoProps) {
  return (
    <section id="inicio" className={estilos.apresentacao} aria-labelledby="titulo-inicio">
      <h1 id="titulo-inicio" className={estilos.titulo}>{nome}</h1>
      <p className={estilos.descricao}>{descricao}</p>
      <a className={estilos.acao} href="#projetos">
        Ver projetos <span aria-hidden="true">↓</span>
      </a>
    </section>
  );
}
