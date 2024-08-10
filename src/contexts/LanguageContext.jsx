import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("Portugues 🇧🇷");

  const changeLanguage = (newLanguage) => {
    setLanguage(newLanguage);
  };

  return <LanguageContext.Provider value={(language, changeLanguage)}>{children}</LanguageContext.Provider>;
};

LanguageProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
