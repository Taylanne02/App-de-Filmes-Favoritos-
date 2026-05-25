// Contexto responsável pelo tema claro e escuro.
import { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  // useState guarda o tema atual da aplicação.
  const [tema, setTema] = useState("claro");

  // Função principal para alternar entre claro e escuro.
  function alternarTema() {
    setTema(tema === "claro" ? "escuro" : "claro");
  }

  // useEffect aplica o tema diretamente no body da página.
  // Isso permite que o CSS use body.claro e body.escuro.
  useEffect(() => {
    document.body.className = tema;
  }, [tema]);

  return (
    <ThemeContext.Provider value={{ tema, alternarTema }}>
      {children}
    </ThemeContext.Provider>
  );
}