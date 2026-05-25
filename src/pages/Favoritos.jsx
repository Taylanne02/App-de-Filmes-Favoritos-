import { useContext } from "react";
import { FavoritosContext } from "../contexts/FavoritosContext";

function Favoritos() {
  const { favoritos, removerFavorito } =
    useContext(FavoritosContext);

  return (
    <main>
      <h1>Meus Favoritos</h1>

      {favoritos.length === 0 ? (
        <p className="mensagem">
          Lista de favoritos vazia.
        </p>
      ) : (
        <div className="lista-filmes">
          {favoritos.map((filme) => (
            <div
              className="card-filme"
              key={filme.id}
            >
              <h2>{filme.name}</h2>

              <img
                src={filme.image?.medium}
                alt={filme.name}
              />

              <button
                onClick={() => {
                  removerFavorito(filme.id);

                  alert("Filme removido dos favoritos!");
                }}
              >
                ❤️
              </button>

              <p>Remover dos favoritos</p>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}

export default Favoritos;