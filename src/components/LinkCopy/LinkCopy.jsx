import React, { useContext, useState } from "react";
import { Copy, CheckCircle, BarChart2 } from "lucide-react";
import styles from "./LinkCopy.module.css";
import { LanguageContext } from "../../context/LanguageContext";

const LinkCopy = ({ url }) => {
  const [copied, setCopied] = useState(false);
  const { t } = useContext(LanguageContext);
  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  const handleStats = () => {
    // Implementar lógica para mostrar estadísticas
    console.log("Mostrar estadísticas para:", url);
  };

  return (
    <div className={styles.container}>
      <a
        href={url}
        className={styles.link}
        target="_blank"
        rel="noopener noreferrer"
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
