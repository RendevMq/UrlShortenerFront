import { useState, createContext } from "react";
import translations from "../components/Translations/translations";
import translationsStats from "../components/Translations/translationsStats";

// Crear el contexto
export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  // Estado para almacenar el idioma seleccionado, por defecto 'en'
  const [language, setLanguage] = useState("es");

  // Función para cambiar el idioma
  const changeLanguage = (lang) => {
    setLanguage(lang);
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        changeLanguage,
        t: translations[language],
        tStats: translationsStats[language],
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};
