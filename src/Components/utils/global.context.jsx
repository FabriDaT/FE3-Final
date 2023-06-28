import { createContext, useState } from "react";


export const ContextGlobal = createContext();

export const ContextProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const contextValue = {
    value: theme,
   changeValue: toggleTheme
  };

  return <ContextGlobal.Provider value={contextValue}>
    {children}
    </ContextGlobal.Provider>;
};
