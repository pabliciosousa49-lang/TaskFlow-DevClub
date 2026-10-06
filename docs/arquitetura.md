# Arquitetura do DevPath

## Fundação

Nesta etapa, a estrutura prepara o projeto para Aprender, Praticar, Construir, Carreira e Perfil. Nenhuma dessas áreas está implementada. A Home e o TaskFlow existentes mantêm seus arquivos e comportamento.

| Local | Responsabilidade |
| --- | --- |
| `index.html` | Entrada principal e telas atuais. |
| `pages/` | Páginas específicas das áreas, quando implementadas. |
| `css/global/` | Estilos globais; contém o CSS existente, preservado inteiro. |
| `css/components/` | Estilos de componentes reutilizáveis futuros. |
| `css/pages/` | Estilos específicos de páginas futuras. |
| `js/core/` | Inicialização e navegação existentes em `app.js`. |
| `js/modules/` | Funcionalidades específicas das áreas, quando implementadas. |
| `js/services/` | Serviços compartilhados, quando necessários. |
| `js/utils/` | Funções auxiliares reutilizáveis, quando necessárias. |
| `assets/images/` | Imagens existentes. |
| `assets/icons/` | Ícones locais futuros. |
| `assets/fonts/` | Fontes locais futuras. |
| `data/` | Dados locais estruturados, quando necessários. |
| `docs/` | Documentação técnica. |

As pastas reservadas usam somente `.gitkeep` para serem preservadas no Git. Esse arquivo não é carregado pela aplicação. Não há páginas, módulos ou componentes fictícios, nem subdivisões antecipadas por área.

## Referências atuais

- O HTML carrega `./css/global/style.css` e `./js/core/app.js`.
- As imagens do HTML ficam em `./assets/images/`.
- O CSS carrega o fundo por `../../assets/images/Fundo.png`.
- O workflow em `.github/workflows/deploy.yml` publica a raiz (`path: .`), onde está `index.html`.
- Devicon e Font Awesome continuam carregados pelas referências externas existentes.

Nenhuma movimentação ou alteração de caminho foi necessária nesta preparação. A divisão do CSS e do JavaScript existentes só deve ocorrer quando uma tarefa exigir uma responsabilidade concreta.
