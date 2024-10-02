import styles from "./CardUrls.module.css";
import { Eye, Trash2, Copy, ExternalLink } from "lucide-react";

const CardUrls = ({ originalUrl, shortUrl, views, timeAgo }) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(shortUrl);
    alert("URL Copiada!");
  };

  const handleDelete = () => {
    // Agrega la lógica de eliminar el enlace
    alert("URL Eliminada!");
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
        >
          {shortUrl} <ExternalLink size={16} />
        </a>
      </div>
      <div className={styles.info}>
        <span className={styles.views}>
          <Eye size={16} /> {views}
        </span>
        <span className={styles.timeAgo}>{timeAgo} ago</span>
        <div className={styles.actions}>
          <Copy onClick={handleCopy} className={styles.icon} size={16} />
          <Trash2 onClick={handleDelete} className={styles.icon} size={16} />
        </div>
      </div>
    </div>
  );
};

export default CardUrls;
