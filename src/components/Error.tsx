import { FC } from 'react';

import { useJsonFetch } from '../hooks/useJsonFetch';

export const Error: FC = () => {
  const [data, loading, error] = useJsonFetch('http://localhost:7070/error');

  return (
    <div className="error">
      <h4>Error component</h4>
      data: {JSON.stringify(data)}
      <br />
      error: {JSON.stringify(error)}
      <br />
      loading: {JSON.stringify(loading)}
    </div>
  );
};
