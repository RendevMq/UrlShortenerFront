import { useState } from "react";

const link = import.meta.env.VITE_API_BASE_URL;

const useUrlActions = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${link}/shorten/findAll`, {
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

  const deleteUrl = async (shortCode) => {
    try {
      await fetch(`${link}/shorten/${shortCode}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      fetchData(); // Actualizar datos después de eliminar
    } catch (error) {
      setError(error.message);
    }
  };

  return {
    data,
    fetchData,
    deleteUrl,
    loading,
    error,
  };
};

export default useUrlActions;
