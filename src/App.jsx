import { useContext } from "react";
import LinkCopy from "./components/LinkCopy/LinkCopy";
import Navbar from "./components/Navbar/Navbar";
import ShortenUrl from "./components/ShortenUrl/ShortenUrl";
import "./styles/globals.css";
import "./styles/variablesglobal.css";
import AllCards from "./components/AllCards/AllCards";
import { UrlProvider } from "./context/urlContext";
import { LanguageProvider, LanguageContext } from "./context/LanguageContext"; // Importar el contexto de idioma

function App() {
  const { t } = useContext(LanguageContext); // Acceder a las traducciones usando el contexto

  return (
    <UrlProvider>
      <div className="content">
        <div className="container">
          <Navbar />{" "}
          {/* La barra de navegación también tiene que usar las traducciones */}
          <div className="infoup">
            <div>
              {/* Cambiar el texto estático por las traducciones */}
              <h1>{t.shorten_description}</h1>
              <p>{t.copy_instruction}</p>
            </div>

            <ShortenUrl />
          </div>
          <section>
            <div>
              {/* Cambiar los textos por las traducciones */}
              <h1>{t.hoho}</h1>
              <p>{t.shortened_urls_heading}</p>
              <AllCards />
            </div>
          </section>
        </div>
        {/* Video de fondo */}
        <video src="../src/assets/fondo3.mp4" muted autoPlay loop></video>
        <div className="capa"></div>
      </div>
    </UrlProvider>
  );
}

export default App;
