// Importa os recursos principais do React Router.
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Importa as páginas da aplicação.
import Home from "./pages/Home";
import Login from "./pages/Login";
import Favoritos from "./pages/Favoritos";

// Importa componentes reutilizáveis.
import Header from "./components/Header";

// Importa a rota protegida.
import RotaProtegida from "./routes/RotaProtegida";
import DetalhesFilme from "./pages/DetalhesFilme";

function App() {
  return (

    <BrowserRouter>
    {/* Header aparece em todas as páginas */}
      <Header />

    {/* Routes agrupa todas as rotas da aplicação */}
      <Routes>

        {/* Rota da página inicial */}
        <Route path="/" element={<Home />} />

        {/* Rota da página de login */}
        <Route path="/login" element={<Login />} />

        {/* Rota dinâmica: o :id muda conforme o filme clicado, usar no BackEnd projeto PEI */}
        <Route path="/filme/:id" element={<DetalhesFilme />} />

        {/* Tudo dentro de RotaProtegida só abre se o usuário estiver logado */}
        <Route element={<RotaProtegida />}>
          <Route path="/favoritos" element={<Favoritos />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;