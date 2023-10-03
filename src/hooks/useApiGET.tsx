import { useEffect, useState } from 'react';

import { Project } from '@/types';

const useApiGET = (path: string): Array<Project> | undefined => {
  const [data, setData] = useState<Array<Project> | undefined>(undefined);
  const env = process.env.NODE_ENV === 'production' ? `${process.env.NEXT_PUBLIC_VERCEL_URL}` : 'http://localhost:3000';

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`${env}${path}`);
        const json = await response.json();

        setData(json);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, [env, path]);

  return data;
};

export default useApiGET;
