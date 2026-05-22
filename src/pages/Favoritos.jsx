import { useContext } from "react";

import { FavoritosContext } from "../contexts/FavoritosContext";

function Favoritos() {
  const {
    favoritos,
    removerFavorito,
  } = useContext(FavoritosContext);

  return (
    <div>
      <h1>Meus Favoritos</h1>

      {favoritos.length === 0 ? (
        <p>Nenhum filme favoritado.</p>
      ) : (
        favoritos.map((filme) => (
          <div
            key={filme.id}
            style={{
              marginBottom: "20px",
              border: "1px solid gray",
              padding: "10px",
            }}
          >
            <h2>{filme.name}</h2>

            <img
              src={filme.image?.medium}
              alt={filme.name}
            />

            <br />
            <br />

            <button
              onClick={() =>
                removerFavorito(filme.id)
              }
            >
              ❤️
            </button>

            <p></p>
          </div>
        ))
      )}
    </div>
  );
}

export default Favoritos;