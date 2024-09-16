// src/hooks/useFetch.js

import { useState, useEffect } from "react";

const useFetchHook = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]); // Only re-run the effect if the URL changes

  return { data, loading, error };
};
// Encapsulation of Logic: The "useFetchhook" encapsulates the logic for fetching data, handling loading, and handling errors. This allows you to reuse it across multiple components.

// Reusability: The hook is reusable for any API URL. You just pass a URL to the hook, and it takes care of the rest.

// Clean Component: The component remains clean and focused on rendering, as the fetching logic is abstracted away into the custom hook.
export default useFetchHook;
