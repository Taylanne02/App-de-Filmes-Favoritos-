// useParams lê o id da URL pra ver qual o filme.
// useEffect busca os detalhes do filme específico.
// useContext acessa os favoritos.
import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { FavoritosContext } from "../contexts/FavoritosContext";

function DetalhesFilme() {
  // Pega o id que veio da rota /filme/:id.
  const { id } = useParams();

  // Estado que guarda os detalhes do filme.
  const [filme, setFilme] = useState(null);

  // Estados de carregamento e erro.
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState("");

  // Acessa favoritos e funções globais.
  const {
    favoritos,
    adicionarFavorito,
    removerFavorito,
  } = useContext(FavoritosContext);

  // Busca os dados do filme específico.
  // O id faz o useEffect executar de novo se o id mudar.
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

  // Verifica se o filme atual já está favoritado.
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

      {/* Exibe a sinopse que vem da API em HTML */}
      <div
        dangerouslySetInnerHTML={{
          __html: filme.summary,
        }}
      />

      {/* Botão que adiciona ou remove dos favoritos */}
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