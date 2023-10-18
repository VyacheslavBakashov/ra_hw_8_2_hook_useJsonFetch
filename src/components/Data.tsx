import { FC } from 'react';

import { useJsonFetch } from '../hooks/useJsonFetch';

export const Data: FC = () => {
  const [data, loading, error] = useJsonFetch('http://localhost:7070/data');

  return (
    <div className="data">
      <h4>Data component</h4>
      data: {JSON.stringify(data)}
      <br />
      error: {JSON.stringify(error)}
      <br />
      loading: {JSON.stringify(loading)}
    </div>
  );
};
