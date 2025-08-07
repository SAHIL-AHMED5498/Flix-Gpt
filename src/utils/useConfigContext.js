import { createContext, useContext, useState,useEffect} from "react";


const configContext=createContext(null);

const ConfigContextProvider=({children})=>{


   const [langKey, setLangKey] = useState("en");

  const changeLang = (value) => {
    setLangKey(value);
    
  };

    // Load from localStorage when app starts
  useEffect(() => {
    const storedLang = localStorage.getItem("langKey");
    if (storedLang) {
      setLangKey(storedLang);
    }
  }, []);

  // Save to localStorage whenever langKey changes
  useEffect(() => {
    localStorage.setItem("langKey", langKey);
  }, [langKey]);


    return(<configContext.Provider value={{langKey,changeLang}}>{children}</configContext.Provider>)
}

export const useConfigContext=()=>useContext(configContext);

export default  ConfigContextProvider