import { useEffect, useState } from 'react';

import { Project } from '@/types';

const useApiGET = (path: string): Array<Project> | undefined => {
  const [data, setData] = useState();

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`http://localhost:4000${path}`);

        const json = await response.json();

        setData(json);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, [path]);

  return data;
};

export default useApiGET;
