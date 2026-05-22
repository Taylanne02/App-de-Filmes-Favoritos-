import { createContext, useState, useEffect } from "react";

export const FavoritosContext = createContext();

export function FavoritosProvider({ children }) {
  const [favoritos, setFavoritos] = useState(() => {
    const salvo = localStorage.getItem("favoritos");

    return salvo ? JSON.parse(salvo) : [];
  });

  function adicionarFavorito(filme) {
    const jaExiste = favoritos.some(
      (fav) => fav.id === filme.id
    );

    if (jaExiste) return;

    setFavoritos([...favoritos, filme]);
  }

  function removerFavorito(id) {
    setFavoritos(
      favoritos.filter((filme) => filme.id !== id)
    );
  }

  useEffect(() => {
    localStorage.setItem(
      "favoritos",
      JSON.stringify(favoritos)
    );
  }, [favoritos]);

  return (
    <FavoritosContext.Provider
      value={{
        favoritos,
        adicionarFavorito,
        removerFavorito,
      }}
    >
      {children}
    </FavoritosContext.Provider>
  );
}