# ONG Água Pura — Projeto Integrador

## Sobre o projeto

Site institucional responsivo criado para uma atividade acadêmica de Fundamentos da Web e Desenvolvimento Front-end, utilizando HTML5 semântico, CSS3 e JavaScript básico, sem frameworks e sem backend.

**A ONG Água Pura é fictícia neste projeto.** O site é um protótipo educacional: não representa uma organização real, não recebe doações e não envia ou armazena dados do formulário.

## Páginas

- `index.html` — apresentação da causa, áreas de impacto e uma interação para mostrar/ocultar formas de ajudar.
- `sobre.html` — propósito, história conceitual, missão, visão, valores e quatro pilares de atuação.
- `projetos.html` — três propostas de iniciativa: Água para Todos, Chuva que Transforma e Comunidade Consciente.
- `contato.html` — formulário com nome, e-mail, assunto e mensagem, incluindo validação e confirmação simulada.

## Funcionalidades JavaScript

O arquivo `js/script.js` contém somente as duas funcionalidades previstas na atividade:

1. **Interação adicional:** botão que mostra e oculta a lista de formas de ajudar na página inicial. O evento de clique é registrado com `addEventListener()` e o DOM é atualizado.
2. **Formulário validado:** captura do evento `submit`, uso de `preventDefault()`, leitura dos campos com `value`, limpeza de espaços com `trim()`, verificação dos campos e apresentação de erro ou confirmação no próprio HTML.

### Regras de validação

- Nome: mínimo de 3 caracteres.
- E-mail: obrigatório e em formato básico válido.
- Assunto: obrigatório.
- Mensagem: mínimo de 10 caracteres.

Uma confirmação positiva significa apenas que os campos passaram pela validação. Não ocorre envio de e-mail nem coleta ou armazenamento de dados.

## Identidade visual e acessibilidade

A identidade visual utiliza tons de azul, verde-água e fundo claro. O CSS compartilhado inclui Flexbox, modelo de caixa, imagens adaptáveis, media queries para celular e desktop, indicação de foco para teclado, link para pular ao conteúdo, rótulos associados aos campos e mensagens de retorno acessíveis.

## Fontes e créditos

- Textos institucionais: elaborados para o protótipo acadêmico com base na proposta fictícia da ONG Água Pura.
- Imagens e símbolo da marca: ilustrações vetoriais SVG produzidas especialmente para este projeto; não dependem de imagens externas.
- Ferramentas: HTML5, CSS3 e JavaScript nativo, sem frameworks.
