// Monta o cabeçalho, as seções e o rodapé na ordem da página.
import Cabecalho from "./componentes/Cabecalho";
import Apresentacao from "./secoes/Apresentacao";
import Sobre from "./secoes/Sobre";
import Tecnologias from "./secoes/Tecnologias";
import Projetos from "./secoes/Projetos";
import Experiencia from "./secoes/Experiencia";
import Contato from "./secoes/Contato";
import "./App.css";

export default function App() {
  return (
    <>
      <Cabecalho />

      {/* O ID e o tabIndex permitem que o atalho do cabeçalho envie o foco ao conteúdo. */}
      <main id="conteudo" tabIndex={-1}>
        <Apresentacao />
        <Sobre />
        <Tecnologias />
        <Projetos />
        <Experiencia />
        <Contato />
      </main>

      <footer className="app__rodape">José Fernando · Portfólio em React e TypeScript</footer>
    </>
  );
}
