import { useContext, useState } from "react";
import { Eye, Trash2, Copy, ExternalLink, BarChart2 } from "lucide-react";
import UrlContext from "../../context/urlContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { notify1, notify2 } from "../../helpers/notify";
import { LanguageContext } from "../../context/LanguageContext";
import Modal from "../Modal/Modal";
import ContentModal from "../Modal/ContentModal";
import styles from "./CardUrls.module.css";

const CardUrls = ({ shortcode, originalUrl, shortUrl, views, timeAgo }) => {
  const { fetchData, deleteUrl } = useContext(UrlContext);
  const { language } = useContext(LanguageContext);
  const [ventanaModal, setVentanaModal] = useState(false); // Estado del modal

  const handleCopy = () => {
    navigator.clipboard.writeText(shortUrl);
    notify1(language);
  };

  const handleDelete = async () => {
    try {
      notify2(language);
      await deleteUrl(shortcode);
      await fetchData();
    } catch (error) {
      console.error("Error al eliminar la URL:", error);
    }
  };

  const handleLinkClick = async () => {
    const newWindow = window.open(shortUrl, "_blank");
    if (newWindow) {
      newWindow.opener = null;
    }
    setTimeout(async () => {
      await fetchData();
    }, 3000);
  };

  // Manejar la apertura del modal
  const handleStats = () => {
    setVentanaModal(true);
  };

  return (
    <>
      {ventanaModal && (
        <Modal setVentanaModal={setVentanaModal}>
          <ContentModal url={shortUrl} /> {/* Pasar la URL acortada al modal */}
        </Modal>
      )}
      <div className={styles.card}>
        <p className={styles.originalUrl}>{originalUrl}</p>
        <div className={styles.shortUrlSection}>
          <a
            href={shortUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.shortUrl}
            onClick={handleLinkClick}
          >
            {shortUrl} <ExternalLink size={16} />
          </a>
        </div>
        <div className={styles.info}>
          <span className={styles.views}>
            <Eye size={16} /> {views}
          </span>
          <span className={styles.timeAgo}>{timeAgo}</span>
          <div className={styles.actions}>
            <BarChart2 onClick={handleStats} className={styles.icon} />{" "}
            {/* Ícono de Stats */}
            <Copy onClick={handleCopy} className={styles.icon} size={16} />
            <Trash2 onClick={handleDelete} className={styles.icon} size={16} />
          </div>
        </div>
      </div>
    </>
  );
};

export default CardUrls;
