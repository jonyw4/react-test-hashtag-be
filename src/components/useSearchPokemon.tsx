import * as React from 'react';
import debounce from 'lodash.debounce';
import { searchPokemon } from '../utils'
import { IPokemon  } from '../types';

type UseSearchResponse = {
  search: React.Dispatch<React.SetStateAction<string>>;
  loading: boolean;
  data: IPokemon | undefined;
}

/**
 * Hook to set, get and wait for a pokemon request
 */
export function useSearchPokemon(): UseSearchResponse {
  const [searchQuery, search] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const [data, setData] = React.useState<IPokemon | undefined>(undefined);

  React.useEffect(() => {
    async function updateData(){
      setData(undefined);
      setLoading(true);
      try {
        const pokemon = await searchPokemon(searchQuery);
        setLoading(false);
        setData(pokemon || undefined);
      } catch (e) {
        setLoading(false);
        setData(undefined)
      }
    }
    const debouncedUpdateData = debounce(updateData, 300);
    debouncedUpdateData();
  }, [searchQuery])
  

  return { search, loading, data }
}