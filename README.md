# Recriando a interface do Netflix

Projeto realizado na DIO (Digital Innovation One Inc.), com o instrutor Felipe Aguiar, onde foi realizado um clone da interface principal do site de streaming Netflix. Utilizando tecnologias simples como HTML5, CSS3, JavaScript e JQuery.

Com as seguintes funcionalidades:

Além do carroucel de imagens com Owl carrusel, proposto originalmente, criei uma nova interação, onde ao selecionar um dos filmes existentes na carroucel de imagens é carregado, dinamicamente da internet, as informações do mesmo; como imagem tema de background, título e sinopse. Além disso, ao clicar no botão "assitir trailer", é exibido um trailer oficial do filme, através do site youtube.

Para a implementação das novas funcionalidades, foi utilizado uma API do site The Movie Database (Uma API para solicitar dados de filmes on-line).   A API exige que você se inscreva em uma conta e, em seguida, solicite uma chave de desenvolvedor para usar o serviço (gratuito).

Também utilizei o AXIOS, que é um cliente http, baseado em promisses, que pode ser utilizado tanto no NodeJS, quanto no browser.  No lado do servidor usa o código nativo do node.js - o módulo http, enquanto no lado do cliente (navegador) usa XMLHttpRequests.

Link da documentação do API do site the Movie Database:
https://www.themoviedb.org/documentation/api

Link de documentação do AXIOS:
https://axios-http.com/docs/intro
