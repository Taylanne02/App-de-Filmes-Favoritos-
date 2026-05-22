import { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("claro");

  function alternarTema() {
    setTheme((tema === "claro" ? "escuro" : "claro"));
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