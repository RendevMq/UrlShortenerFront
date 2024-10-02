// Importamos los estilos globales y las variables
import { useState } from "react";
import LinkCopy from "./components/LinkCopy/LinkCopy";
import Navbar from "./components/Navbar/Navbar";
import ShortenUrl from "./components/ShortenUrl/ShortenUrl";
import "./styles/globals.css";
import "./styles/variablesglobal.css";
import AllCards from "./components/AllCards/AllCards";

function App() {
  const [theme, setTheme] = useState("dark");
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <div className="content">
      <div className="container">
        <Navbar theme={theme} toggleTheme={toggleTheme} />

        <div className="infoup">
          <div>
            <h1>Shorten your loooooong URLs like never before</h1>
            <p>
              Copy your long boring URL Paste it below 🎆. You got it, rigth?
            </p>
          </div>

          <ShortenUrl></ShortenUrl>
        </div>

        <section>
          <div>
            <h1>Hoho!</h1>
            <p>
              Here are your shortened URLs ! Now start rick-rolling your friends
              😁😁{" "}
            </p>
            <AllCards />
          </div>
        </section>
      </div>
      {/* Video de fondo */}
      <video src="../src/assets/fondo3.mp4" muted autoPlay loop></video>
      <div className="capa"></div>
    </div>
  );
}

export default App;
