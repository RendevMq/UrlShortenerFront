import React, { useContext, useState } from "react";
import { Copy, CheckCircle, BarChart2 } from "lucide-react";
import styles from "./LinkCopy.module.css";
import { LanguageContext } from "../../context/LanguageContext";
import Modal from "../Modal/Modal";
import ContentModal from "../Modal/ContentModal";
import "react-toastify/dist/ReactToastify.css";
import { notify1 } from "../../helpers/notify";
import UrlContext from "../../context/urlContext";

const LinkCopy = ({ url }) => {
  const [copied, setCopied] = useState(false);
  const [ventanaModal, setVentanaModal] = useState(false);
  const { fetchData } = useContext(UrlContext);
  const { t, language } = useContext(LanguageContext);
  const copyToClipboard = async () => {
    try {
      // Esperar hasta que se haya copiado el texto
      await navigator.clipboard.writeText(url);
      setCopied(true);

      notify1(language);

      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  const handleStats = () => {
    setVentanaModal(true);
    console.log("Mostrar estadísticas para:", url);
  };

  const handleLinkClick = async () => {
    setTimeout(async () => {
      await fetchData();
    }, 3000);
  };

  return (
    <div className={styles.container}>
      {ventanaModal && (
        <Modal setVentanaModal={setVentanaModal}>
          <ContentModal url={url}></ContentModal>
        </Modal>
      )}
      <a
        href={url}
        className={styles.link}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleLinkClick} // Se ejecuta la función al hacer clic
      >
        {url}
      </a>
      <div className={styles.buttonGroup}>
        <button onClick={handleStats} className={styles.button}>
          <BarChart2 className={styles.icon} />
          <span>{t.stats}</span>
        </button>
        <button onClick={copyToClipboard} className={styles.button}>
          {copied ? (
            <CheckCircle className={styles.icon} />
          ) : (
            <Copy className={styles.icon} />
          )}
          <span>{t.copy}</span>
        </button>
      </div>
    </div>
  );
};

export default LinkCopy;
