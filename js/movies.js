
let el = document.getElementById('carroselFilmes');
el.addEventListener('click', function (a) {
    const filmeSelecionado = document.getElementById(a.target.id);
    const filmeID = filmeSelecionado.id;
    const caminhoImagem = filmeSelecionado.currentSrc;
    const imagem = caminhoImagem.slice(-13);
    buscarTrailer(filmeID);;
});

function buscarTrailer(filmeID) {

    let url_tmb_filme = 'https://api.themoviedb.org/3/movie/';

    axios.get(`${url_tmb_filme}${filmeID}/videos?api_key=${APIKEY}&language=pt-BR`)
        .then(function (response) {

            let dadosTrailer = response.data;
            let chaveTrailer = dadosTrailer.results[0].key;
            let youtube = 'https://www.youtube.com/watch?v=';
            const endereco = `${youtube}${chaveTrailer}`;

            alteraDescricaoFilme(filmeID, url_tmb_filme, endereco);
        })
        .catch(function (error) {
            console.log(error);
        });
}

function alteraDescricaoFilme(filmeID, url_tmb_filme, endereco) {

    axios.get(`${url_tmb_filme}${filmeID}?api_key=${APIKEY}&language=pt-BR`)
        .then(function (response) {
            let filme = response.data;
            let mostraFilme = `            
                <h3 class="titulo">${filme.title}</h3>
                <p class="subTitulo">${filme.tagline}</p>
                <h4 class="sinopse">Sinopse</h4>
                <p class="descricao">${filme.overview}</p>
                <div id = botoes class="botoes">
                    <button role="button" class="botao">
                        <i class="fas fa-play"></i>
                        ASSISTIR AGORA
                    </button>
                    <Button role="button" class="botao">
                        <i class="fas fa-info-circle"></i>
                        <a href="${endereco}" onClick="window.open(this.href,'pagename','resizable,height=600,width=800'); return false;">ASSISTIR
                            TRAILER</a>
                    </Button>
                </div>      
      `;

            document.getElementById('detalhes').innerHTML = mostraFilme;

            function mudaBackground(filme) {

                let base_url = 'https://image.tmdb.org/t/p/original';
                let background_image = base_url + filme.backdrop_path;
                let idBackground = document.getElementById('background');
                idBackground.style.height = "400px";
                idBackground.style.background = `linear-gradient(rgba(0,0,0,.50),rgba(0,0,.50)100%), URL(${background_image})`;
                idBackground.style.backgroundSize = "cover";
                idBackground.style.display = "flex";
                idBackground.style.justifyContent = "space-around";
                idBackground.style.alignSelf = "center";

            }

            mudaBackground(filme);
        })
        .catch(function (error) {
            console.log(error);
        });
}
