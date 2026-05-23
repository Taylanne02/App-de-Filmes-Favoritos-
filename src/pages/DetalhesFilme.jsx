import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { FavoritosContext } from "../contexts/FavoritosContext";

function DetalhesFilme() {
  const { id } = useParams();

  const [filme, setFilme] = useState(null);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState("");

  const {
    favoritos,
    adicionarFavorito,
    removerFavorito,
  } = useContext(FavoritosContext);

  useEffect(() => {
    fetch(`https://api.tvmaze.com/shows/${id}`)
      .then((resposta) => resposta.json())
      .then((dados) => {
        setFilme(dados);
        setCarregando(false);
      })
      .catch(() => {
        setErro("Erro ao carregar detalhes do filme.");
        setCarregando(false);
      });
  }, [id]);

  function filmeFavoritado(id) {
    return favoritos.some((fav) => fav.id === id);
  }

  if (carregando) return <p>Carregando detalhes...</p>;
  if (erro) return <p>{erro}</p>;

  return (
    <main>
      <h1>{filme.name}</h1>

      <img src={filme.image?.medium} alt={filme.name} />

      <p>
        <strong>Gêneros:</strong> {filme.genres.join(", ")}
      </p>

      <p>
        <strong>Idioma:</strong> {filme.language}
      </p>

      <p>
        <strong>Estreia:</strong> {filme.premiered}
      </p>

      <p>
        <strong>Nota:</strong> {filme.rating.average || "Sem nota"}
      </p>

      <div
        dangerouslySetInnerHTML={{
          __html: filme.summary,
        }}
      />

      <button
        onClick={() =>
          filmeFavoritado(filme.id)
            ? removerFavorito(filme.id)
            : adicionarFavorito(filme)
        }
      >
        {filmeFavoritado(filme.id)
          ? "❤️ Remover dos favoritos"
          : "🤍 Adicionar aos favoritos"}
      </button>
    </main>
  );
}

export default DetalhesFilme;