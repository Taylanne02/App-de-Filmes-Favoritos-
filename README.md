# Atividade Prática - Construindo um App de Filmes Favoritos 

## Aluna: Taylanne Castelo Branco Cavalcante

## Passo 1: Setup do projeto

Nesta etapa, foi realizada a inicialização do projeto utilizando o Vite com o template React + JavaScript, acompanhada da estruturação inicial das pastas e diretórios.

## Passo 2: Configurando as rotas básicas

Nesta etapa, implementou-se o sistema de roteamento da aplicação. Foram criadas e configuradas as rotas utilizando os principais conceitos do React Router DOM, tais como BrowserRouter, Routes, Route e Link.

## Passo 3: Criando o ThemeContext 

Nesta etapa, foi desenvolvida a funcionalidade de alternância entre os temas claro e escuro (light/dark mode). 

## Passo 4: Criando o AuthContext (login simulado)

Nesta etapa, foi implementado o login simulado com armazenamento do usuário no localStorage. Como as rotas protegidas ainda não foram configuradas, a aba de favoritos permanece visível, o que será corrigido na próxima etapa.

## Passo 5: Criando a Rota Protegida

Nesta etapa, implementou-se o sistema de rotas protegidas para restringir o acesso a páginas exclusivas de usuários autenticados. Além disso, foi feita a integração com a API para listagem e consumo dos dados dos filmes, acompanhada da criação do botão de favoritos para salvar as preferências do usuário. Por fim, foram aplicadas melhorias no CSS, refinando o design e a experiência visual da aplicação.

## Passo 6: Listando filmes na Home

Nesta etapa, foi implementada a listagem de filmes na página inicial da aplicação. Utilizando useState e useEffect, os dados foram buscados a partir de uma API pública de filmes e armazenados no estado da aplicação. Essa etapa já tinha sido inserida anteriormente, mas agora segue o que se pede no Passo 6.

## Passo 7: Página de detalhes do filme

As funcionalidades exigidas já estão em funcionamento quando foi pedido, como ver detalhes e o botão favoritos, que já está em funcionamento. Porém como estou usando outra API, não tem como ver todas os detalhes solicitados. 

## Passo 8: Criando o FavoritosContext

Nesta etapa, foi criado o contexto de favoritos da aplicação. Com ele, os filmes favoritados passaram a ser armazenados em um estado global, podendo ser acessados em diferentes páginas, como Home, Detalhes do Filme e Favoritos.

Também foram criadas as funções para adicionar e remover filmes da lista de favoritos. Além disso, foi implementada a persistência com localStorage, garantindo que os favoritos continuem salvos mesmo após recarregar a página. Também já tinham sido criadas anteriormente as funções para adicionar e remover filmes da lista de favoritos, junto com a persistência com localStorage, garantindo que os favoritos continuem salvos mesmo após recarregar a página.