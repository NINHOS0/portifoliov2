import { createContext, useEffect, useState } from "react";

type ITheme = "dark" | "light" | string;

export const ThemeContext = createContext<any>("dark");

const ThemeProvider = ({ children }: any) => {
  const [theme, setTheme] = useState<ITheme>("dark");
  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");
    
    const newTheme = theme === "dark" ? "light" : "dark"
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {   
    const currentTheme = localStorage.getItem("theme") ?? (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")
    
    if (currentTheme === "dark") document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
    setTheme(currentTheme);
  }, []);

  return <ThemeContext.Provider value={[toggleTheme, theme]}>{children}</ThemeContext.Provider>;
};

export default ThemeProvider;
