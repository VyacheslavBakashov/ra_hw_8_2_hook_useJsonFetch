import { useEffect, useState } from 'react';

export const useJsonFetch = (url: string, opts?: RequestInit) => {
  const [data, setData] = useState({});
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const getData = async () => {
    try {
      setLoading(true);

      const response = await fetch(url, opts);
      const data = await response.json();
      setData(data);
    } catch (error: any) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return [data, loading, error] as const;
};
