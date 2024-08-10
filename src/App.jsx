import { ThemeProvider } from "./contexts/ThemeContext";
import { LanguageProvider } from "./contexts/LanguageContext";
import ThemeToggle from "./components/ThemeToggle";
import LanguageSelector from "./components/LanguageSelector";
function App() {
  return (
    <>
      <h1>Configurações do Usuário</h1>
      <LanguageProvider>
        <LanguageSelector />
      </LanguageProvider>
      <ThemeProvider>
        <ThemeToggle />
      </ThemeProvider>
    </>
  );
}

export default App;
