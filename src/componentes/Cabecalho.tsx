// Exibe a navegação por seções e o controle de tema.
import BotaoTema from "./BotaoTema";
import estilos from "./Cabecalho.module.css";

const itensMenu = [
  { id: "inicio", rotulo: "Início" },
  { id: "sobre", rotulo: "Sobre" },
  { id: "tecnologias", rotulo: "Tecnologias" },
  { id: "projetos", rotulo: "Projetos" },
  { id: "experiencia", rotulo: "Experiência" },
  { id: "contato", rotulo: "Contato" },
];

export default function Cabecalho() {
  return (
    <header className={estilos.cabecalho}>
      <a href="#conteudo" className={estilos.atalho}>Pular para o conteúdo</a>

      <div className={estilos.conteudo}>
        <a className={estilos.marca} href="#inicio">
          <span className={estilos.monograma} aria-hidden="true">JA</span>
          José Amorim
        </a>

        <BotaoTema />

        <nav className={estilos.navegacao} aria-label="Menu principal">
          <ul className={estilos.links}>
            {itensMenu.map(({ id, rotulo }) => (
              <li key={id}>
                <a href={`#${id}`}>{rotulo}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
