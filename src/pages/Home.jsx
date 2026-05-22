import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { FavoritosContext } from "../contexts/FavoritosContext";

function Home() {
  const [filmes, setFilmes] = useState([]);

  const {
    favoritos,
    adicionarFavorito,
    removerFavorito,
  } = useContext(FavoritosContext);

  useEffect(() => {
    fetch("https://api.tvmaze.com/shows")
      .then((resposta) => resposta.json())
      .then((dados) => {
        setFilmes(dados.slice(0, 20));
      });
  }, []);

  function filmeFavoritado(id) {
    return favoritos.some((filme) => filme.id === id);
  }

  return (
  <div>
    <h1>Lista de Filmes</h1>

    <div className="lista-filmes">
      {filmes.map((filme) => (
        <div
          className="card-filme"
          key={filme.id}
        >
          <h2>{filme.name}</h2>

          <img
            src={filme.image?.medium}
            alt={filme.name}
          />

          <br />
          <br />

          <button
            onClick={() => {
              filmeFavoritado(filme.id)
                ? removerFavorito(filme.id)
                : adicionarFavorito(filme);
            }}
          >
            {filmeFavoritado(filme.id)
              ? "❤️"
              : "🤍"}
          </button>

          <br />
          <br />

          <Link to={`/filme/${filme.id}`}>
            Ver detalhes
          </Link>
        </div>
      ))}
    </div>
  </div>
);
}

export default Home;