import { ThemeContext } from "../contexts/ThemeContext";
import { useContext } from "react";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      style={{
        background: theme === "light" ? "white" : "black",
        color: theme === "light" ? "black" : "white",
        height: "50px",
        width: "50vw",
        margin: "20px",
        padding: "auto",
        fontSize: "2rem",
      }}
    >
      {theme}
    </button>
  );
};

export default ThemeToggle;
