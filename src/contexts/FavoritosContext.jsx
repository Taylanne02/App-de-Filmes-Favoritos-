// Contexto global para controlar os filmes favoritos.
import { createContext, useState, useEffect } from "react";

export const FavoritosContext = createContext();

export function FavoritosProvider({ children }) {
  // Estado que armazena todos os filmes favoritados.
  const [favoritos, setFavoritos] = useState(() => {
    // Recupera favoritos salvos no localStorage.
    const salvo = localStorage.getItem("favoritos");

    return salvo ? JSON.parse(salvo) : [];
  });

  // Adiciona um filme aos favoritos.
  function adicionarFavorito(filme) {
    // Verifica se o filme já está favoritado.
    const jaExiste = favoritos.some(
      (fav) => fav.id === filme.id
    );

    // Se já existir, não adiciona de novo.
    if (jaExiste) return;

    // Atualiza o estado mantendo os favoritos antigos e adicionando o novo.
    setFavoritos([...favoritos, filme]);
  }

  // Remove um filme pelo id.
  function removerFavorito(id) {
    setFavoritos(
      favoritos.filter((filme) => filme.id !== id)
    );
  }

  // Salva os favoritos no localStorage sempre que a lista muda.
  useEffect(() => {
    localStorage.setItem(
      "favoritos",
      JSON.stringify(favoritos)
    );
  }, [favoritos]);

  // Disponibiliza favoritos e funções para outras páginas.
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