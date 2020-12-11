import * as React from 'react';
import { IPokemon } from '../types';
import { useSearchPokemon } from './useSearchPokemon';

export const SearchBar = React.memo(({ onClickAddPokemon }: SearchBarProps) => {
  const { data, loading, search } = useSearchPokemon();

  return (
    <>
      <h3>Procure por um Pokemon</h3>
      <input
        name="search"
        type="text"
        onChange={(e) => search(e.target.value)}
      />
      {loading && <span>Carregando...</span>}
      {data && !loading && (
        <div>
          <h4>Resultado da busca:</h4>
          {data.name}
          <button onClick={() => onClickAddPokemon(data)}>Add</button>
        </div>
      )}
    </>
  );
});

interface SearchBarProps {
  onClickAddPokemon: (pokemon: IPokemon) => void;
}
