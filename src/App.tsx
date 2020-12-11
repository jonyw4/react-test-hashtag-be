import * as React from 'react';
import './App.css';
import { SearchBar } from './components'
import { IPokemon } from './types'
import { pokemonListReducer } from './utils';


function App() {
  const [pokemonList, dispatch] = React.useReducer(pokemonListReducer, {})

  return (
    <main>
      <h1>Meus pokemons</h1>
      <SearchBar
        onClickAddPokemon={(pokemon) =>
          dispatch({type: 'add', data: pokemon})
        }
      />
      <div>
        <h2>Pokemons favoritos</h2>
        {pokemonList && Object.keys(pokemonList).map((id) => {
        const pokemon = pokemonList[Number(id)] as IPokemon;
        return (
          <div key={id}>
            {pokemon.name}
            <button onClick={() => dispatch({ type: 'rem', data: pokemon })}>Remover</button>
          </div>
        );
      })}
      </div>
    </main>
  );
}

export default App;
