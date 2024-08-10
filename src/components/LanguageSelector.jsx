import { LanguageContext } from "../contexts/LanguageContext";
import { useContext } from "react";

const LanguageSelector = () => {
  const { language, changeLanguage } = useContext(LanguageContext);

  return (
    <div>
      <label htmlFor="list">Escolha um idioma 🗣️</label>
      <input
        id="list"
        list="my-list"
        type="text"
        value={language}
        onChange={(e) => changeLanguage(e.target.value)}
      />
      <datalist id="my-list">
        <option value="Ingles 🇺🇸"></option>
        <option value="Espanhol 🇪🇸"></option>
        <option value="Portugues 🇧🇷"></option>
      </datalist>
    </div>
  );
};

export default LanguageSelector;
