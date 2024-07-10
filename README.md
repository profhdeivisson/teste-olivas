# Teste Técnico | Olivas Digital

## Descrição

Este projeto é um site desenvolvido para o teste técnico da empresa Olivas Digital, utilizando Next.js como framework principal.

## Pré-requisitos

Antes de começar, verifique se você possui o seguinte instalado em seu ambiente de desenvolvimento:

- **Node.js (versão 12 ou superior)**
- **npm ou Yarn**

## Instalação

Para rodar o projeto localmente, siga estas etapas:

1. Clone o repositório do GitHub:
   `git clone https://github.com/profhdeivisson/teste-olivas.git`
2. Navegue até o diretório do projeto
   `cd teste-olivas`
3. Instale as dependências necessárias:
   ```
   npm install
   # ou
   yarn
   ```

## Executando o projeto

Após completar a instalação, você pode iniciar o servidor de desenvolvimento localmente:

```
npm run dev
# ou
yarn dev
```

Isso iniciará o servidor de desenvolvimento do Next.js. Abra seu navegador e vá para http://localhost:3000 para visualizar o projeto.

## Estrutura do Projeto

O Projeto está organizado da seguinte forma:

```
teste-olivas/
├── public/          # Arquivos estáticos
│   └── images/      # Imagens utilizadas no projeto
├── src/             # Código-fonte do projeto
│   ├── pages/       # Páginas do site
│     └── Components/  # Componentes React reutilizáveis
│   └── styles/      # Estilos globais
├── README.md        # Documentação do projeto
├── next.config.js   # Configurações do Next.js
├── package.json     # Dependências do projeto e scripts
└── yarn.lock        # Arquivo gerado pelo Yarn, detalhando as versões exatas das dependências instaladas
```

## Tecnologias Utilizadas

- Next.js: Framework React para aplicações web.
- React: Biblioteca JavaScript para construção de interfaces de usuário.
- Material-UI: Componentes React para uma estilização rápida e consistente.
- mui-phone-number: Componente para entrada de números de telefone.
- axios: Cliente HTTP para fazer requisições.
- react-slick: Carousel React responsivo.
- Principais características do ExcelMerge:
