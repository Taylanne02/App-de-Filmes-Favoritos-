// Importa o React e o ReactDOM, responsáveis por renderizar a aplicação na página.
import React from "react";
import ReactDOM from "react-dom/client";

// Importa o componente principal da aplicação.
import App from "./App.jsx";

// Importa o CSS global do projeto.
import "./index.css";

// Importa os Providers dos contextos globais da aplicação.
import { ThemeProvider } from "./contexts/ThemeContext";
import { AuthProvider } from "./contexts/AuthContext";
import { FavoritosProvider } from "./contexts/FavoritosContext";

// Aqui a aplicação é renderizada dentro da div root do HTML.
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* AuthProvider deixa o login disponível para toda a aplicação */}
    <AuthProvider>
      {/* ThemeProvider deixa o tema claro/escuro disponível para todos os componentes */}
      <ThemeProvider>
        {/* FavoritosProvider deixa a lista de favoritos disponível globalmente */}
        <FavoritosProvider>
          <App />
        </FavoritosProvider>
      </ThemeProvider>
    </AuthProvider>
  </React.StrictMode>
);