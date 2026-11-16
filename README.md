# Portfólio de José Amorim

Portfólio pessoal em React, TypeScript e Vite. A página reúne apresentação, tecnologias, projetos, experiência e contato. A lista de projetos pode ser filtrada por disponibilidade de repositório, e o navegador guarda a preferência de tema.

## Desenvolvimento local

Use Node.js 22.12+ ou 24+. No terminal, dentro do projeto:

```bash
npm ci
npm run dev
```

No PowerShell, use `npm.cmd` se o terminal bloquear o script `npm.ps1`.

| Comando | O que verifica |
| --- | --- |
| `npm run lint` | Analisa o código com o Oxlint, configurado no projeto. |
| `npm run build` | Verifica os tipos com o TypeScript e gera a versão de produção em `dist/`. |
| `npm run preview` | Serve o build localmente depois de `npm run build`. |

## Estrutura

- `src/paginas/Inicio.tsx` monta as seções da página.
- `src/componentes/` contém o cabeçalho, a apresentação, as seções, o botão de tema e os projetos.
- `src/dados/` reúne os projetos, as tecnologias, a trajetória e os contatos.
- `src/hooks/useTema.ts` sincroniza o tema com o HTML e o armazenamento local.
- `src/index.css` define a paleta dos temas, o reset e os estilos globais. Os arquivos `*.css` ficam junto da página ou do componente que estilizam e usam classes com prefixos como `projetos__cartao`.
- `public/favicon.svg` é o ícone da aba do navegador.
