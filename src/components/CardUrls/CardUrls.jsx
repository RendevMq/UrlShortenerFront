import { useContext, useEffect } from "react";
import useUrlActions from "../../hooks/useUrlActions ";
import styles from "./CardUrls.module.css";
import { Eye, Trash2, Copy, ExternalLink, View } from "lucide-react";
import UrlContext from "../../context/urlContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { notify1, notify2 } from "../../helpers/notify";
import { LanguageContext } from "../../context/LanguageContext";

const CardUrls = ({ shortcode, originalUrl, shortUrl, views, timeAgo }) => {
  const { fetchData, deleteUrl } = useContext(UrlContext);
  const { language } = useContext(LanguageContext);

  const handleCopy = () => {
    navigator.clipboard.writeText(shortUrl);
    // alert("URL Copiada!");
    notify1(language);
  };

  useEffect(() => {
    console.log(views);
  }, [views]);

  const handleDelete = async () => {
    try {
      notify2(language);
      // Eliminar la URL pasando el shortCode correcto
      await deleteUrl(shortcode);
      // Después de eliminar, vuelve a obtener los datos actualizados
      await fetchData();
    } catch (error) {
      console.error("Error al eliminar la URL:", error);
    }
  };

  const handleLinkClick = async () => {
    try {
      // Retrasa la llamada a fetchData por 3 segundos (3000 milisegundos)
      // Porque sino llamara al fetchdata incluso antes de que redis actualice el contador y no se notara el cambio
      setTimeout(async () => {
        await fetchData();
      }, 3000);
    } catch (error) {
      console.error(
        "Error al actualizar los datos después de hacer clic:",
        error
      );
    }
  };

  return (
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
          <Eye size={16} /> {views} {/* número de vistas */}
        </span>
        <span className={styles.timeAgo}>{timeAgo}</span>
        <div className={styles.actions}>
          <Copy onClick={handleCopy} className={styles.icon} size={16} />
          <Trash2 onClick={handleDelete} className={styles.icon} size={16} />
        </div>
      </div>
    </div>
  );
};

export default CardUrls;
