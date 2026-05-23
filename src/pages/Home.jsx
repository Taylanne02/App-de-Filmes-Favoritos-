import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { FavoritosContext } from "../contexts/FavoritosContext";

function Home() {
  const [filmes, setFilmes] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState("");

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
        setCarregando(false);
      })
      .catch(() => {
        setErro("Erro ao carregar filmes.");
        setCarregando(false);
      });
  }, []);

  function filmeFavoritado(id) {
    return favoritos.some((filme) => filme.id === id);
  }

  if (carregando) {
    return <p>Carregando filmes...</p>;
  }

  if (erro) {
    return <p>{erro}</p>;
  }

  return (
    <main>
      <h1>Lista de Filmes</h1>

      <div className="lista-filmes">
        {filmes.map((filme) => (
          <div className="card-filme" key={filme.id}>
            <h2>{filme.name}</h2>

            <img
              src={filme.image?.medium}
              alt={filme.name}
            />

            <button
              onClick={() =>
                filmeFavoritado(filme.id)
                  ? removerFavorito(filme.id)
                  : adicionarFavorito(filme)
              }
            >
              {filmeFavoritado(filme.id) ? "❤️" : "🤍"}
            </button>

            <Link to={`/filme/${filme.id}`}>
              Ver detalhes
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}

export default Home;