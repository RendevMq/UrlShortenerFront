import { createContext, useEffect, useState } from "react";

const link = import.meta.env.VITE_API_BASE_URL;

const UrlContext = createContext();

const UrlProvider = ({ children }) => {
  const [shortenedUrl, setShortenedUrl] = useState("");

  const [data, setData] = useState([]);
  const [stats, setStats] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    console.log("aaaaaaaaaaaaaaaaa");

    setLoading(true);
    try {
      const response = await fetch(`${link}/findAll`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Error al obtener los datos de las URLs");
      }

      const result = await response.json();
      setData(result);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const deleteUrl = async (shortcode) => {
    try {
      await fetch(`${link}/shorten/${shortcode}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      fetchData(); // Actualiza los datos después de eliminar
    } catch (error) {
      setError(error.message);
    }
  };

  const fetchStats = async (shortUrl) => {
    try {
      setLoading(true);
      const response = await fetch(`${shortUrl}/stats`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Error al obtener las estadísticas del enlace");
      }
      const result = await response.json();
      setStats(result); // Aquí guardamos los datos obtenidos
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(); // Obtener datos al montar el componente
  }, []);

  useEffect(() => {
    fetchData();
  }, [shortenedUrl]);

  const datas = {
    shortenedUrl,
    setShortenedUrl,
    data,
    stats,
    fetchData,
    deleteUrl,
    fetchStats,
    loading,
    error,
  };
  return <UrlContext.Provider value={datas}>{children}</UrlContext.Provider>;
};

export { UrlProvider };

export default UrlContext;
