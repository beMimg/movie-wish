import { useEffect, useState } from "react";
import { OPTIONS } from "../API_INFO";

export default function FetchData(url) {
  const [data, setData] = useState(null);
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(url, OPTIONS)
      .then((response) => {
        if (response.status >= 400) {
          throw new Error("server error");
        }
        return response.json();
      })
      .then((data) => setData(data))
      .catch((err) => setError(err))
      .finally(() => setIsLoading(false));
  }, []);

  return { data, error, isLoading };
}
