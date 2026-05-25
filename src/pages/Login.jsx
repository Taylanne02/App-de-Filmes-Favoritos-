// useState controla o texto digitado.
// useContext acessa a função login.
// useNavigate redireciona após o login.
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

function Login() {
  // Estado do input de nome.
  const [nome, setNome] = useState("");

  // Pega a função login do AuthContext.
  const { login } = useContext(AuthContext);

  // Hook do React Router para navegar via JavaScript.
  const navigate = useNavigate();

  function handleSubmit(event) {
    // Evita recarregar a página ao enviar o formulário.
    event.preventDefault();

    // Validação simples do campo.
    if (nome.trim() === "") {
      alert("Digite seu nome para entrar.");
      return;
    }

    // Salva o usuário no contexto.
    login(nome);

    // Redireciona para a Home.
    navigate("/");
  }

  return (
    <main>
      <h1>Login</h1>

      <form onSubmit={handleSubmit}>
        <label>
          Nome:
          <input
            type="text"
            value={nome}
            onChange={(event) => setNome(event.target.value)}
            placeholder="Digite seu nome"
          />
        </label>

        <button type="submit">Entrar</button>
      </form>
    </main>
  );
}

export default Login;