// Mantém a navegação fixa e abre o menu em telas estreitas.
import { useRef, useState } from "react";
import BotaoTema from "./BotaoTema";
import "./Cabecalho.css";

// Os IDs correspondem aos destinos das âncoras na página.
const itensMenu = [
  { id: "inicio", rotulo: "Início" },
  { id: "sobre", rotulo: "Sobre" },
  { id: "tecnologias", rotulo: "Tecnologias" },
  { id: "projetos", rotulo: "Projetos" },
  { id: "experiencia", rotulo: "Experiência" },
  { id: "contato", rotulo: "Contato" },
];

export default function Cabecalho() {
  // O estado controla a abertura no mobile. A ref permite devolver o foco ao botão.
  const [menuAberto, setMenuAberto] = useState(false);
  const botaoMenu = useRef<HTMLButtonElement>(null);

  return (
    <header
      className="cabecalho"
      onKeyDown={(evento) => {
        // Escape fecha o menu e devolve o foco ao controle quando ele está visível.
        if (evento.key === "Escape" && menuAberto && botaoMenu.current?.getClientRects().length) {
          setMenuAberto(false);
          botaoMenu.current.focus();
        }
      }}
      onBlur={(evento) => {
        // Fecha o menu apenas quando o foco sai de todo o cabeçalho.
        if (!evento.currentTarget.contains(evento.relatedTarget)) {
          setMenuAberto(false);
        }
      }}
    >
      <a href="#conteudo" className="cabecalho__atalho" onClick={() => setMenuAberto(false)}>
        Pular para o conteúdo
      </a>

      <div className="cabecalho__conteudo">
        <a className="cabecalho__marca" href="#inicio" aria-label="<Dev /> — início" onClick={() => setMenuAberto(false)}>
          {"<Dev />"}
        </a>

        <BotaoTema />

        <button
          ref={botaoMenu}
          className="cabecalho__botao-menu"
          type="button"
          aria-expanded={menuAberto}
          aria-controls="menu-principal"
          onClick={() => setMenuAberto((aberto) => !aberto)}
        >
          {menuAberto ? "Fechar" : "Menu"}
        </button>

        <nav id="menu-principal" className="cabecalho__navegacao" aria-label="Menu principal" data-aberto={menuAberto}>
          <ul className="cabecalho__links">
            {itensMenu.map(({ id, rotulo }) => (
              <li key={id}>
                <a href={`#${id}`} onClick={() => setMenuAberto(false)}>{rotulo}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
