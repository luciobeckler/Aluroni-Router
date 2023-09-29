# Projeto de Cardápio de Restaurante com React Router

**React** ![React](https://img.shields.io/badge/16.13.1-blue)
**React Router** ![React Router](https://img.shields.io/badge/5.2.0-green)

Este é um projeto de site apresentação completa de um restaurante desenvolvido usando como base o React visando exercitar os conceitos de roteamento, utilizando a biblioteca React Router DOM. Abaixo, você encontrará uma descrição dos principais conceitos que foram abordados:

## 📁 Organização de Dados

- Separamos os dados do cardápio em uma pasta separada para uma melhor organização.

## 🌐 Navegação com React Router

#### 🌐 BrowserRouter e HashRouter

- Exploramos as diferenças entre BrowserRouter e HashRouter para lidar com as rotas da aplicação.

#### 🛣️ Definição de Rotas

- Utilizamos o componente `Routes` para definir as rotas da nossa aplicação.

#### 🔄 Reaproveitamento do Header

- O Header foi reutilizado usando o React Router para alternar entre as rotas.

#### 🔗 Utilização do Componente Link

- Utilizamos o componente `Link` para criar links de navegação entre as diferentes páginas.

#### 🚧 Página Padrão (Fallback)

- Implementamos uma página padrão para casos em que nenhuma rota corresponde.

#### 🎨 Desenvolvimento de Tema

- Desenvolvemos um tema personalizado para a aplicação para uma aparência única.

#### 🪝 Uso do Outlet

- Aplicamos o componente `Outlet` do `react-router-dom` para melhor gerenciar o layout das páginas.

#### 🚀 Navegação com useNavigate

- Utilizamos o hook `useNavigate` para navegar programaticamente entre as rotas da aplicação.

#### 🚫 Tratamento de Página Não Encontrada

- Criamos uma página "Not Found" para lidar com rotas não encontradas.

## 🎯 Passagem de Parâmetros nas Rotas

- Utilizamos o hook `useLocation` para acessar os parâmetros da rota.

- Passamos estados entre as rotas para compartilhar informações.

## ♻️ Refatoração de Tags

- Refatoramos as tags e componentes para melhorar a semântica do nosso site.

#### 🧩 Tela NotFound na Tela de Detalhes

- Adicionamos a tela NotFound para a tela de detalhes quando um item não é encontrado.

#### 🌍 Utilização do Componente Navigate

- Utilizamos o componente `Navigate` para navegar entre as rotas de forma programática.

#### 🧐 Resolução do Header

- Resolvemos o problema relacionado ao header.

Sinta-se à vontade para explorar o código-fonte deste projeto para obter uma compreensão mais aprofundada de como esses conceitos foram implementados.

## 🚀 Executando o Projeto

1. Clone este repositório.
2. Instale as dependências usando `npm install`.
3. Inicie o aplicativo com `npm start`.

Aproveite e explore este projeto de maneira rápida através do link [Aqui](https://aluroni-router-six.vercel.app/) onde está hospedada a aplicação!
