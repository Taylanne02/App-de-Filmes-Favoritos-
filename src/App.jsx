import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Favoritos from "./pages/Favoritos";
import Header from "./components/Header";
import RotaProtegida from "./routes/RotaProtegida";
import DetalhesFilme from "./pages/DetalhesFilme";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/filme/:id" element={<DetalhesFilme />} />

        <Route element={<RotaProtegida />}>
          <Route path="/favoritos" element={<Favoritos />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;