# Atividade Prática - Construindo um App de Filmes Favoritos 

## Aluna: Taylanne Castelo Branco Cavalcante

## -----------------------------------------------

## Tecnologias Utilizadas

- React
- Vite
- JavaScript
- React Router DOM
- Context API
- CSS
- LocalStorage
- API pública TVMaze

## -----------------------------------------------

## Instalação

1. Clone o repositório:

```bash
git https://github.com/Taylanne02/App-de-Filmes-Favoritos-.git
```

2. Entre na pasta do projeto:

```bash
cd meu-cine-clube
```

3. Instale as dependências:

```bash
npm install
npm install react-router-dom
```

4. Execute o projeto:

```bash
npm run dev
```

## -----------------------------------------------

## Funcionalidades

Login simulado
Persistência do usuário com localStorage
Tema claro e escuro
Listagem de filmes usando API pública
Página de detalhes do filme
Sistema de favoritos
Persistência dos favoritos
Rotas protegidas
Navegação sem recarregar a página
Layout responsivo em cards

## -----------------------------------------------

## Conceitos Aplicados

1. React Hooks
    useState
    useEffect
    useContext

2. Context API
    ThemeContext
    AuthContext
    FavoritosContext

3. React Router
    BrowserRouter
    Routes
    Route
    Link
    Navigate
    Outlet
    useParams
    useNavigate

## -----------------------------------------------

## Passo 1: Setup do projeto

Nesta etapa, foi realizada a inicialização do projeto utilizando o Vite com o template React + JavaScript, acompanhada da estruturação inicial das pastas e diretórios.

## -----------------------------------------------

## Passo 2: Configurando as rotas básicas

Nesta etapa, implementou-se o sistema de roteamento da aplicação. Foram criadas e configuradas as rotas utilizando os principais conceitos do React Router DOM, tais como BrowserRouter, Routes, Route e Link.

## -----------------------------------------------

## Passo 3: Criando o ThemeContext 

Nesta etapa, foi desenvolvida a funcionalidade de alternância entre os temas claro e escuro (light/dark mode). 

## -----------------------------------------------

## Passo 4: Criando o AuthContext (login simulado)

Nesta etapa, foi implementado o login simulado com armazenamento do usuário no localStorage. Como as rotas protegidas ainda não foram configuradas, a aba de favoritos permanece visível, o que será corrigido na próxima etapa.

## -----------------------------------------------

## Passo 5: Criando a Rota Protegida

Nesta etapa, implementou-se o sistema de rotas protegidas para restringir o acesso a páginas exclusivas de usuários autenticados. Além disso, foi feita a integração com a API para listagem e consumo dos dados dos filmes, acompanhada da criação do botão de favoritos para salvar as preferências do usuário. Por fim, foram aplicadas melhorias no CSS, refinando o design e a experiência visual da aplicação.

## -----------------------------------------------

## Passo 6: Listando filmes na Home

Nesta etapa, foi implementada a listagem de filmes na página inicial da aplicação. Utilizando useState e useEffect, os dados foram buscados a partir de uma API pública de filmes e armazenados no estado da aplicação. Essa etapa já tinha sido inserida anteriormente, mas agora segue o que se pede no Passo 6.

## -----------------------------------------------

## Passo 7: Página de detalhes do filme

As funcionalidades exigidas já estão em funcionamento quando foi pedido, como ver detalhes e o botão favoritos, que já está em funcionamento. Porém como estou usando outra API, não tem como ver todas os detalhes solicitados. 

## -----------------------------------------------

## Passo 8: Criando o FavoritosContext

Nesta etapa, foi criado o contexto de favoritos da aplicação. Com ele, os filmes favoritados passaram a ser armazenados em um estado global, podendo ser acessados em diferentes páginas, como Home, Detalhes do Filme e Favoritos.

Também foram criadas as funções para adicionar e remover filmes da lista de favoritos. Além disso, foi implementada a persistência com localStorage, garantindo que os favoritos continuem salvos mesmo após recarregar a página. Também já tinham sido criadas anteriormente as funções para adicionar e remover filmes da lista de favoritos, junto com a persistência com localStorage, garantindo que os favoritos continuem salvos mesmo após recarregar a página.

## -----------------------------------------------

## Passo 9: Polimento e CSS

Nesta etapa foram adicionadas mensagens de feedback ao realizar as ações "Adicionar ao favoritos" e "Remover dos favoritos", além da garantia que as ações de "Tema claro" e "Tema escuro" estejam sendo aplicados em todo o projeto. 

## -----------------------------------------------

## Passo 10: Documentação e entrega

Nesta etapa foi feita a revisão do README.md para entrega final.