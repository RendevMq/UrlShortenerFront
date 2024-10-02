import React from "react";
import styles from "./UrlList.module.css";

const UrlList = () => {
  const urls = [
    { original: "http://longurl.com", short: "http://short.ly/abc123" },
    { original: "http://anotherlongurl.com", short: "http://short.ly/xyz789" },
    // More URLs...
  ];

  return (
    <div className={styles.urlList}>
      {urls.map((url, index) => (
        <div key={index} className={styles.urlItem}>
          <p>{url.original}</p>
          <a href={url.short} target="_blank" rel="noopener noreferrer">
            {url.short}
          </a>
        </div>
      ))}
    </div>
  );
};

export default UrlList;
