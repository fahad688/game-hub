import apiClient from "@/services/api-client";
import { AxiosRequestConfig, CanceledError } from "axios";
import { useEffect, useState } from "react";

interface fetchResponse<T> {
  count: number;
  results: T[];
}


const useData = <T>(endpoint:string, requestConfig?: AxiosRequestConfig, deps?:any[]) =>{

    const [data, setData] = useState<T[]>([]);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
    const controller = new AbortController();
      setLoading(true);
      apiClient
        .get<fetchResponse<T>>(endpoint, { signal: controller.signal, ...requestConfig })
        .then((response) => {
          setData(response.data.results);
          setLoading(false);
        })
        .catch((err) => {
          if (err instanceof CanceledError) return; // Ignore if the request was cancelled
          setError(err.message);
          setLoading(false);
        });
      return () => controller.abort(); // Cleanup function to cancel the request if the component unmounts
    }, deps ? [...deps] : []); // Only re-run the effect if deps change

    return { data, error, loading };
}

export default useData;