import { useState, useEffect } from "react";

function useFetch(url: string, params?:object) {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url, params)
      .then((res) => {
        if (!res.ok) {
          // server error
          throw Error("could not fetch the data for that resource");
        }
        return res.json();
      })
      .then((data) => {
        setIsPending(false);
        setData(data);
        setError(null);
      })
      .catch((err) => {
        if (err.name === "AbortError") {
          console.log("fetch aborted");
        } else {
          // network / connection error
          setIsPending(false);
          setError(err.message);
        }
      });
  }, [url]);

  return { data, isPending, error };
}

export default useFetch;
