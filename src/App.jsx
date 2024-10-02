import Header from "./components/Header/Header";
import ShortenUrl from "./components/ShortenUrl/ShortenUrl";
import UrlList from "./components/UrlList/UrlList";
// Importamos los estilos globales y las variables
import "./styles/globals.css";
import "./styles/variablesglobal.css";

function App() {
  return (
    <div className="container">
      <Header />
      <div className="container">
        <ShortenUrl />
        <UrlList />
      </div>
    </div>
  );
}

export default App;
