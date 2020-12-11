import * as React from 'react';
import { client } from '../utils'

export interface IPokemon {
  id: number;
  name: string;
}

export const SearchBar = React.memo(({ onClickAddPokemon }: SearchBarProps) => {
  const [pokemon, setPokemon] = React.useState<IPokemon>();

  const handleOnChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const { data } = await client.get<IPokemon>(`/pokemon/${value}`);
    return setPokemon(data);
  };
  return (
    <>
      <h3>Procure por um Pokemon</h3>
      <input type="text" onChange={handleOnChange} />
      {pokemon && (
        <div>
          <h4>Resultado da busca:</h4>
          {pokemon.name}
          <button onClick={() => onClickAddPokemon(pokemon)}>Add</button>
        </div>
      )}
    </>
  );
});

interface SearchBarProps {
  onClickAddPokemon: (pokemon: IPokemon) => void;
}