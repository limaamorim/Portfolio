// Reúne os ícones decorativos da interface. O texto ao lado fornece o nome acessível.
import "./Icone.css";

const desenhos = {
  setaBaixo: <path d="M12 5v14m-7-7 7 7 7-7" />,
  enviar: <path d="m22 2-7 20-4-9-9-4 20-7ZM22 2 11 13" />,
  menu: <path d="M4 6h16M4 12h16M4 18h16" />,
  fechar: <path d="m18 6-12 12M6 6l12 12" />,
  codigo: <path d="m8 6-6 6 6 6m8-12 6 6-6 6m-2-14-4 16" />,
  servidor: <>
    <rect x="2" y="2" width="20" height="8" rx="2" />
    <rect x="2" y="14" width="20" height="8" rx="2" />
    <path d="M6 6h.01M6 18h.01" />
  </>,
  dados: <>
    <ellipse cx="12" cy="5" rx="9" ry="3" />
    <path d="M3 5v14a9 3 0 0 0 18 0V5M3 12a9 3 0 0 0 18 0" />
  </>,
  trabalho: <>
    <rect x="2" y="7" width="20" height="14" rx="2" />
    <path d="M8 21V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v16" />
  </>,
  formacao: <path d="M22 10 12 5 2 10l10 5 10-5Zm-4 2v5c-3 3-9 3-12 0v-5m16-2v6" />,
  github: <path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 6v-3.9a3.4 3.4 0 0 0-.9-2.6c3-.3 6.2-1.5 6.2-6.8a5.3 5.3 0 0 0-1.4-3.7 4.9 4.9 0 0 0-.1-3.7S17.6 1 15 2.7a13.4 13.4 0 0 0-7 0C5.4 1 4.2 1.3 4.2 1.3A4.9 4.9 0 0 0 4.1 5a5.3 5.3 0 0 0-1.4 3.7c0 5.3 3.2 6.5 6.2 6.8a3.4 3.4 0 0 0-.9 2.6V22" />,
  linkedin: <>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6Z" />
    <path d="M2 9h4v12H2z" />
    <circle cx="4" cy="4" r="2" />
  </>,
};

type IconeProps = {
  nome: keyof typeof desenhos;
  tamanho?: number;
};

export default function Icone({ nome, tamanho = 18 }: IconeProps) {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      width={tamanho}
      height={tamanho}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {desenhos[nome]}
    </svg>
  );
}
