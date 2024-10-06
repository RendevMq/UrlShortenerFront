import { useContext, useState } from "react";
import styles from "./ShortenUrl.module.css";
import LinkCopy from "../LinkCopy/LinkCopy";
import UrlContext from "../../context/urlContext";
import { LanguageContext } from "../../context/LanguageContext";

const link = import.meta.env.VITE_API_BASE_URL;

const ShortenUrl = () => {
  const [url, setUrl] = useState("");
  const { shortenedUrl, setShortenedUrl } = useContext(UrlContext);
  const { t } = useContext(LanguageContext);
  const [errorType, setErrorType] = useState(null);

  const handleShorten = async () => {
    if (url.trim() === "") {
      setShortenedUrl(null);
      setErrorType("empty_url");
      return;
    }
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
      setShortenedUrl(data.shortUrl);
      setErrorType(null);
    } catch (er) {
      setErrorType("invalid_url");
      setShortenedUrl(null);
      console.error("Error:", er);
    }
  };

  const getErrorMessage = () => {
    if (errorType === "empty_url") {
      return t.must_enter_url;
    }
    if (errorType === "invalid_url") {
      return t.must_enter_valid_url;
    }
    return null;
  };

  return (
    <>
      <div className={styles.shortenUrl}>
        <div className={styles.shortenInputButton}>
          <input
            type="text"
            placeholder={t.enter_url}
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className={styles.input}
          />
          <button onClick={handleShorten} className={styles.button}>
            {t.shorten_button}
          </button>
        </div>
        {errorType && <p className={styles.errorr}>{getErrorMessage()}</p>}
        {shortenedUrl && <LinkCopy url={shortenedUrl} />}
      </div>
    </>
  );
};

export default ShortenUrl;
