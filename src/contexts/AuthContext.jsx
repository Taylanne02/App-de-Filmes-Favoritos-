// createContext cria um contexto global.
// useState controla o estado do usuário.
// useEffect salva ou remove o usuário do localStorage.
import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  // Estado principal do login.
  // Se não tiver usuário logado, fica null.
  // Se tiver login, guarda um objeto com nome.
  const [usuario, setUsuario] = useState(() => {
    // Ao carregar a aplicação, tenta recuperar o usuário salvo.
    const salvo = localStorage.getItem("usuario");

    return salvo ? JSON.parse(salvo) : null;
  });

  // Função responsável por simular o login.
  function login(nome) {
    setUsuario({ nome });
  }

  // Função responsável por sair da conta.
  function logout() {
    setUsuario(null);
  }

  // useEffect executa sempre que usuario muda.
  // Ele garante a persistência no localStorage.
  useEffect(() => {
    if (usuario) {
      localStorage.setItem("usuario", JSON.stringify(usuario));
    } else {
      localStorage.removeItem("usuario");
    }
  }, [usuario]);

  // Provider disponibiliza usuario, login e logout para toda a aplicação.
  return (
    <AuthContext.Provider value={{ usuario, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}