import { useContext } from "react";
import styles from "./Navbar.module.css";
import { AiFillGithub } from "react-icons/ai";
import { LanguageContext } from "../../context/LanguageContext"; // Contexto del idioma
import enFlag from "../../assets/en-flag.png"; // Asegúrate de tener las banderas en tus assets
import esFlag from "../../assets/es-flag.png";

const Navbar = () => {
  const { language, changeLanguage, t } = useContext(LanguageContext); // Accedemos al idioma actual y la función para cambiar el idioma

  // Función para manejar el cambio de idioma con el switch
  const handleLanguageToggle = () => {
    const newLanguage = language === "en" ? "es" : "en"; // Cambia de inglés a español y viceversa
    changeLanguage(newLanguage); // Cambia el idioma usando el contexto
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        RENDEVMQ
        <a
          href="https://github.com/RendevMq/Java-Apirest"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.sourceCodeBtn}
        >
          <AiFillGithub style={{ fontSize: "1.2em" }} />
          <span className={styles.buttonText}>{t.source_back_code}</span>
        </a>
      </div>

      <div className={styles.languageSwitch}>
        <img
          src={language === "en" ? enFlag : esFlag} // Mostrar la bandera actual según el idioma
          alt={language === "en" ? "English Flag" : "Spanish Flag"}
          className={styles.flagIcon}
        />
        <input
          type="checkbox"
          id="languageToggle"
          className={styles.toggleCheckbox}
          onChange={handleLanguageToggle} // Cambia el idioma con el switch
          checked={language === "en"} // Si el idioma es "en", el switch está activo
        />
        <label htmlFor="languageToggle" className={styles.toggleLabel}>
          <span className={styles.toggleInner}></span>
          <span className={styles.toggleSwitch}></span>
        </label>
        <span>{language === "en" ? "EN" : "ES"}</span>{" "}
        {/* Mostrar EN o ES según el idioma */}
      </div>
    </nav>
  );
};

export default Navbar;
