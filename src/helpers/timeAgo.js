import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext"; // Importa el contexto de idioma

const timeAgo = (dateString) => {
  const { t } = useContext(LanguageContext); // Accedemos a las traducciones desde el contexto de idioma
  const date = new Date(dateString);
  const now = new Date();
  const differenceInSeconds = Math.floor((now - date) / 1000);

  if (differenceInSeconds < 60) {
    return `${differenceInSeconds} ${t.seconds_ago}`; // Traducción de "seconds ago"
  }

  const differenceInMinutes = Math.floor(differenceInSeconds / 60);
  if (differenceInMinutes < 60) {
    return `${differenceInMinutes} ${t.minutes_ago}`; // Traducción de "minutes ago"
  }

  const differenceInHours = Math.floor(differenceInMinutes / 60);
  if (differenceInHours < 24) {
    return `${differenceInHours} ${t.hours_ago}`; // Traducción de "hours ago"
  }

  const differenceInDays = Math.floor(differenceInHours / 24);
  if (differenceInDays < 7) {
    return `${differenceInDays} ${t.days_ago}`; // Traducción de "days ago"
  }

  const differenceInWeeks = Math.floor(differenceInDays / 7);
  if (differenceInWeeks < 4) {
    return `${differenceInWeeks} ${t.weeks_ago}`; // Traducción de "weeks ago"
  }

  const differenceInMonths = Math.floor(differenceInDays / 30);
  if (differenceInMonths < 12) {
    return `${differenceInMonths} ${t.months_ago}`; // Traducción de "months ago"
  }

  const differenceInYears = Math.floor(differenceInDays / 365);
  return `${differenceInYears} ${t.years_ago}`; // Traducción de "years ago"
};

export default timeAgo;
