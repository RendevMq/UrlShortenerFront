import CardUrls from "../CardUrls/CardUrls";
import styles from "./AllCards.module.css";

const AllCards = () => {
  const val = "2024-10-02 06:07:05";

  // Función para calcular la diferencia de tiempo y devolver el formato amigable
  const timeAgo = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const differenceInSeconds = Math.floor((now - date) / 1000);

    if (differenceInSeconds < 60) {
      return `${differenceInSeconds} seconds ago`;
    }

    const differenceInMinutes = Math.floor(differenceInSeconds / 60);
    if (differenceInMinutes < 60) {
      return `${differenceInMinutes} minutes ago`;
    }

    const differenceInHours = Math.floor(differenceInMinutes / 60);
    if (differenceInHours < 24) {
      return `${differenceInHours} hours ago`;
    }

    const differenceInDays = Math.floor(differenceInHours / 24);
    if (differenceInDays < 7) {
      return `${differenceInDays} days ago`;
    }

    const differenceInWeeks = Math.floor(differenceInDays / 7);
    if (differenceInWeeks < 4) {
      return `${differenceInWeeks} weeks ago`;
    }

    const differenceInMonths = Math.floor(differenceInDays / 30);
    if (differenceInMonths < 12) {
      return `${differenceInMonths} months ago`;
    }

    const differenceInYears = Math.floor(differenceInDays / 365);
    return `${differenceInYears} years ago`;
  };
  return (
    <div className={styles.contentUrls}>
      <CardUrls
        originalUrl={
          "https://spring.academy/courses/building-a-rest-api-with-spring-boot"
        }
        shortUrl={"http://localhost:8080/shorten/266231"}
        views={1500}
        timeAgo={timeAgo(val)}
      />
      <CardUrls
        originalUrl={
          "https://spring.academy/courses/building-a-rest-api-with-spring-boot"
        }
        shortUrl={"http://localhost:8080/shorten/266231"}
        views={1500}
        timeAgo={timeAgo(val)}
      />
      <CardUrls
        originalUrl={
          "https://spring.academy/courses/building-a-rest-api-with-spring-boot"
        }
        shortUrl={"http://localhost:8080/shorten/266231"}
        views={1500}
        timeAgo={timeAgo(val)}
      />
      <CardUrls
        originalUrl={
          "https://spring.academy/courses/building-a-rest-api-with-spring-boot"
        }
        shortUrl={"http://localhost:8080/shorten/266231"}
        views={1500}
        timeAgo={timeAgo(val)}
      />
      <CardUrls
        originalUrl={
          "https://spring.academy/courses/building-a-rest-api-with-spring-boot"
        }
        shortUrl={"http://localhost:8080/shorten/266231"}
        views={1500}
        timeAgo={timeAgo(val)}
      />
      <CardUrls
        originalUrl={
          "https://spring.academy/courses/building-a-rest-api-with-spring-boot"
        }
        shortUrl={"http://localhost:8080/shorten/266231"}
        views={1500}
        timeAgo={timeAgo(val)}
      />
    </div>
  );
};

export default AllCards;
