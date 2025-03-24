import { useState, useEffect } from "react";

function useFetch(url) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      setIsPending(true);
      try {
        const req = await fetch(url);
        if (!req.ok) {
          throw new Error("something went wrong");
        }

        const data = await req.json();
        setData(data);
      } catch (error) {
        console.log(error.message);
        setError(error.message);
      }
    };
    fetchData();
  }, [url]);
  return { data, error, isPending };
}

export default useFetch;
