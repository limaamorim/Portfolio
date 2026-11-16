// Define quais informações o componente precisa receber.
type ApresentacaoProps = {
  nome: string;
  descricao: string;
};

export default function Apresentacao({ nome, descricao }: ApresentacaoProps) {
  return (
    <section id="inicio">
      <h1>{nome}</h1>
      <p>{descricao}</p>
    </section>
  );
}