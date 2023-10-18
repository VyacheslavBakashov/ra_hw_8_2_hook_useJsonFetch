import { FC } from 'react';

import { useJsonFetch } from '../hooks/useJsonFetch';

export const Loading: FC = () => {
  const [data, loading, error] = useJsonFetch('http://localhost:7070/loading');

  return (
    <div className="loading">
      <h4>Loading component</h4>
      data: {JSON.stringify(data)}
      <br />
      error: {JSON.stringify(error)}
      <br />
      loading: {JSON.stringify(loading)}
    </div>
  );
};
