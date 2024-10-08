import { useContext, useEffect, useState } from "react";
import styles from "./ContentModal.module.css";
import { Eye, View, Clock } from "lucide-react";
import UrlContext from "../../context/urlContext";
import timeAgo from "../../helpers/timeAgo"; // Utiliza tu función para mostrar tiempo relativo
import { LanguageContext } from "../../context/LanguageContext";
import { notify1 } from "../../helpers/notify";

const link = import.meta.env.VITE_API_BASE_URL;

const CardContentModal = ({ typeLink, link }) => {
  const { tStats, language } = useContext(LanguageContext);
  const { fetchData } = useContext(UrlContext);
  // Función para copiar el enlace al portapapeles
  const handleCopy = () => {
    navigator.clipboard
      .writeText(link)
      .then(() => {
        notify1(language);
      })
      .catch(() => {
        alert(tStats.copied_error);
      });
  };

  // Función para visitar el enlace
  const handleVisit = () => {
    const newWindow = window.open(link, "_blank");

    try {
      if (newWindow) {
        newWindow.opener = null;
      }
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
    <div className={styles.contentCardModal}>
      <div className={styles.infoLinks}>
        <h3>{typeLink}</h3>
        <p>{link}</p>
      </div>
      <div className={styles.buttonsCard}>
        <button className={styles.visitButton} onClick={handleCopy}>
          {tStats.copy_button} {/* Traducción específica para "Copiar" */}
        </button>
        <button className={styles.visitButton} onClick={handleVisit}>
          {tStats.visit_button} {/* Traducción específica para "Visitar" */}
        </button>
      </div>
    </div>
  );
};

const ContentModal = ({ url }) => {
  const { fetchStats, stats, loading } = useContext(UrlContext);
  const { tStats } = useContext(LanguageContext); // Acceder a las traducciones de estadísticas

  useEffect(() => {
    fetchStats(url); // Llama a la función para obtener las estadísticas
  }, []);

  if (loading) {
    return <div>{tStats.loading}</div>; // Traducción específica para "Cargando..."
  }

  if (!stats) {
    return <div>{tStats.no_data}</div>; // Traducción específica para "No hay datos disponibles"
  }

  return (
    <div className={styles.modalAll}>
      <h2>{tStats.stats_heading}</h2> {/* Traducción para "Estadísticas" */}
      <CardContentModal
        typeLink={tStats.original_link}
        link={stats.originalUrl}
      />
      <CardContentModal
        typeLink={tStats.shortened_link}
        link={`${link}/${stats.shortCode}`}
      />
      <div className={styles.statsNumbersAll}>
        <div className={styles.statsNumbers}>
          <h3>{tStats.views}</h3>
          <span className={styles.views}>
            <Eye size={16} /> {stats.accessCount} {tStats.views}
          </span>
        </div>
        <div className={styles.statsNumbers}>
          <h3>{tStats.generated_at}</h3>{" "}
          <span className={styles.views}>
            <Clock size={16} /> {timeAgo(stats.createdAt)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ContentModal;
