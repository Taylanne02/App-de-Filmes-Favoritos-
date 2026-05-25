// useContext acessa o AuthContext.
// Navigate redireciona o usuário.
// Outlet renderiza a rota filha quando o acesso é permitido.
import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

function RotaProtegida() {
  // Pega o usuário logado do AuthContext.
  const { usuario } = useContext(AuthContext);

  // Se não houver usuário, redireciona para o login.
  if (!usuario) {
    return <Navigate to="/login" replace />;
  }

  // Se houver usuário, permite acessar a página protegida.
  return <Outlet />;
}

export default RotaProtegida;