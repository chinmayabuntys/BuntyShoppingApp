import { createContext,useState,useEffect } from "react";
export const ThemeContext = createContext();
export function ThemeProvider({children}){
  const [darkMode,setDarkMode]=useState(JSON.parse(localStorage.getItem("darkMode")) || false);
  useEffect(()=>{
    localStorage.setItem("darkMode",JSON.stringify(darkMode));
    document.body.className=darkMode?"bg-dark text-light":"bg-light text-dark";
  },[darkMode]);
  const toggleDarkMode=()=>setDarkMode(!darkMode);
  return <ThemeContext.Provider value={{darkMode,toggleDarkMode}}>{children}</ThemeContext.Provider>
}
