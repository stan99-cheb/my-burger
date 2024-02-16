import React from "react";
import { request } from "../utils/api";

const useFetch = (endpoint) => {
  const [loading, setLoading] = React.useState(true);
  const [data, setData] = React.useState(null);

  React.useEffect(
    () => {
      if (!endpoint) return;
      request(endpoint)
        .then(setData)
        .finally(() => setLoading(false))
    },
    [endpoint]
  );

  return {
    loading,
    data,
  };
}

export default useFetch;