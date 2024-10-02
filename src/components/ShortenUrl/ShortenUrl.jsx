import { useState } from "react";
import styles from "./ShortenUrl.module.css";
import LinkCopy from "../LinkCopy/LinkCopy";

const link = import.meta.env.VITE_API_BASE_URL;

const ShortenUrl = () => {
  const [url, setUrl] = useState("");
  const [shortenedUrl, setShortenedUrl] = useState("");

  const handleShorten = async () => {
    try {
      const response = await fetch(`${link}/shorten`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ originalUrl: url }),
      });

      if (!response.ok) {
        throw new Error("Failed to shorten URL");
      }

      const data = await response.json();
      setShortenedUrl(data.shortUrl); // Asumiendo que el campo es 'shortUrl' en la respuesta
      console.log(`Shortened URL: ${data.shortUrl}`);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
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
      {shortenedUrl && <LinkCopy url={shortenedUrl} />}
    </>
  );
};

export default ShortenUrl;
