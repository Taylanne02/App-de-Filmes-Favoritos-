import { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [tema, setTema] = useState("claro");

  function alternarTema() {
    setTema(tema === "claro" ? "escuro" : "claro");
  }

  useEffect(() => {
    document.body.className = tema;
  }, [tema]);

  return (
    <ThemeContext.Provider value={{ tema, alternarTema }}>
      {children}
    </ThemeContext.Provider>
  );
}