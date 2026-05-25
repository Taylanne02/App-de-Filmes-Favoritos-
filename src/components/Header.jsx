// Link cria navegação sem recarregar a página.
// useContext acessa o tema global.
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

function Header() {
  // Pega o tema atual e a função de alternar tema.
  const { tema, alternarTema } = useContext(ThemeContext);

  return (
    <header>
      <nav>
        {/* Links de navegação da SPA */}
        <Link to="/">Home</Link>{" "}
        <Link to="/login">Login</Link>{" "}
        <Link to="/favoritos">Favoritos</Link>

        {/* Botão que altera o tema da aplicação inteira */}
        <button onClick={alternarTema}>
          Tema: {tema}
        </button>
      </nav>
    </header>
  );
}

export default Header;