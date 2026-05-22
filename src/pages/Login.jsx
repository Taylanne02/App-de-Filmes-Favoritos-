import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

function Login() {
  const [nome, setNome] = useState("");
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();

    if (nome.trim() === "") {
      alert("Digite seu nome para entrar.");
      return;
    }

    login(nome);
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