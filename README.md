# DevPath

Projeto em transição a partir do TaskFlow DevClub, desenvolvido com HTML, CSS e JavaScript puro.

## Estado atual

Home e tela TaskFlow com navegação, apresentação responsiva e 21 tópicos de estudo. Esta etapa reorganiza apenas os arquivos, preservando a interface e o comportamento existentes.

O CRUD de tarefas, busca, filtros, ordenação, progresso e LocalStorage eram objetivos do TaskFlow e ainda não estão implementados.

## Direção futura

Aprender, Praticar, Construir, Carreira e Perfil serão as áreas do DevPath. Elas não foram implementadas nesta migração. Pastas e páginas serão criadas quando houver conteúdo real.

## Tecnologias

HTML5, CSS3 e JavaScript ES6+. Devicon e Font Awesome continuam carregados por CDN, como anteriormente. Nenhuma dependência foi adicionada.

## Arquitetura

```text
TaskFlow-DevClub/
├── index.html
├── css/
│   └── global/
│       └── style.css
├── js/
│   └── core/
│       └── app.js
├── assets/
│   └── images/
│       ├── cabeçalhotask.png
│       ├── devLogo.png
│       ├── Fundo.png
│       ├── principal-home.png
│       └── TaskCentro.png
├── .github/
│   └── workflows/
│       └── deploy.yml
└── README.md
```

O nome do diretório do repositório foi mantido. O CSS permanece inteiro em um arquivo global e o JavaScript de inicialização e navegação em js/core/app.js. Todas as imagens foram preservadas, incluindo a imagem sem referência atual na interface.

## Execução e teste manual

1. Abra index.html, na raiz, em um navegador. Não há instalação ou build.
2. Confira a Home, o banner, o logo e o menu. A Home deve começar selecionada.
3. Clique em TaskFlow e confira o fundo, a imagem central e os 21 tópicos, com entrada gradual em círculo no desktop.
4. Clique em Home Dev Club e confirme o retorno ao banner. Repita a navegação.
5. Reduza a largura para até 768 px: confira o menu horizontal e os tópicos em duas colunas. Retorne ao desktop e confira a órbita.
6. No DevTools, confira que CSS, JavaScript e imagens locais carregam sem erros de caminho. Os ícones externos precisam de internet.

Pesquisa, recolhimento do menu e seleção dos tópicos mantêm seu comportamento anterior, sem funcionalidades novas.

## Publicação existente

O workflow do GitHub Pages usa a raiz como origem do artefato, acompanhando a mudança do index.html. Nenhuma publicação foi executada nesta reorganização.
