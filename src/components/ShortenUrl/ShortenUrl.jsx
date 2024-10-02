import React, { useState } from "react";
import styles from "./ShortenUrl.module.css";

const ShortenUrl = () => {
  const [url, setUrl] = useState("");

  const handleShorten = () => {
    console.log(`Shortened URL: ${url}`);
    // Add logic to handle URL shortening
  };

  return (
    <div className={styles.shortenUrl}>
      <input
        type="text"
        placeholder="Enter your long URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        className={styles.input}
      />
      <button onClick={handleShorten} className={styles.button}>
        Shorten URL
      </button>
    </div>
  );
};

export default ShortenUrl;
