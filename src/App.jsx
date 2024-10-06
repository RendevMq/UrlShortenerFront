import { useContext } from "react";
import Navbar from "./components/Navbar/Navbar";
import ShortenUrl from "./components/ShortenUrl/ShortenUrl";
import "./styles/globals.css";
import "./styles/variablesglobal.css";
import AllCards from "./components/AllCards/AllCards";
import { UrlProvider } from "./context/urlContext";
import { LanguageContext } from "./context/LanguageContext"; // Importar el contexto de idioma
import { ToastContainer } from "react-toastify";

function App() {
  const { t } = useContext(LanguageContext); // Acceder a las traducciones usando el contexto

  return (
    <UrlProvider>
      {<ToastContainer />}
      <div className="content">
        <div className="container">
          <Navbar />{" "}
          <div className="infoup">
            <div>
              <h1>
                <span>{t.shorten_description[0]} </span>
                <span>{t.shorten_description[1]}</span>
                <span>{t.shorten_description[2]} </span>
              </h1>
              <p>{t.copy_instruction}</p>
            </div>
            {<ToastContainer />}
            <ShortenUrl />
          </div>
          <section>
            <div>
              <h1>{t.hoho}</h1>
              <p>{t.shortened_urls_heading}</p>
              <AllCards />
            </div>
          </section>
        </div>
        <video src="../src/assets/fondo3.mp4" muted autoPlay loop></video>
        <div className="capa"></div>
      </div>
    </UrlProvider>
  );
}

export default App;
