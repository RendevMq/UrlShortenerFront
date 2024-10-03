import { useContext } from "react";
import CardUrls from "../CardUrls/CardUrls";
import styles from "./AllCards.module.css";
import UrlContext from "../../context/urlContext";
import timeAgo from "../../helpers/timeAgo";

const AllCards = () => {
  // const val = "2024-10-02 06:07:05";

  // Función para calcular la diferencia de tiempo y devolver el formato amigable

  const { data } = useContext(UrlContext);

  return (
    <div className={styles.contentUrls}>
      {data
        ? data.map((val) => {
            return (
              <CardUrls
                key={val.shortCode} // Asegúrate de usar una key única para cada elemento en un map
                shortcode={val.shortCode}
                originalUrl={val.originalUrl}
                shortUrl={val.shortUrl}
                views={val.accessCount}
                timeAgo={timeAgo(val.createdAt)}
                // Pasamos shortUrl para eliminar
              />
            );
          })
        : null}
    </div>
  );
};

export default AllCards;
