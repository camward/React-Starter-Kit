import { useMemo } from 'react';
import { useLocation } from 'react-router-dom';

const useQueryParams = (param: string) => {
  const useQuery = () => {
    const { search } = useLocation();
    return useMemo(() => new URLSearchParams(search), [search]);
  };

  return useQuery()?.get(param) || '';
};

export default useQueryParams;
