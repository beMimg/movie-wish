import { useEffect, useState } from "react";

export default function FetchData(url) {
  const [data, setData] = useState(null);
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const options = {
    method: "GET",
  };

  useEffect(() => {
    fetch(url, options)
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
