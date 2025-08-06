import apiClient from "@/services/api-client";
import { CanceledError } from "axios";
import { useEffect, useState } from "react";

interface Genre {
  id: number; 
  name: string;
}

interface fetchGenresResponse {
  count: number;
  results: Genre[];
}


const useGenre = () =>{

    const [genres, setGenre] = useState<Genre[]>([]);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
    const controller = new AbortController();
      setLoading(true);
      apiClient
        .get<fetchGenresResponse>("/genres", { signal: controller.signal })
        .then((response) => {
          setGenre(response.data.results);
          setLoading(false);
        })
        .catch((err) => {
          if (err instanceof CanceledError) return; // Ignore if the request was cancelled
          setError(err.message);
          setLoading(false);
        });
      return () => controller.abort(); // Cleanup function to cancel the request if the component unmounts
    }, []);

    return { genres, error, loading };
}

export default useGenre;