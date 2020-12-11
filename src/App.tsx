import * as React from 'react';
import './App.css';
import { SearchBar, IPokemon } from './components'

// Deverá ser realizada requisições para a PokeAPI (https://pokeapi.co)
// O objetivo do teste é a construção de um aplicativo simples.
// O aplicativo deverá conter somente uma página principal, na qual deverá ser implementado um input de busca para o usuário pesquisar por um pokemon específico. 
// Com o resultado da busca, o usuário deverá ter a opção de adicionar o pokemon para a sua lista de pokemons favoritos.
// A lista de pokemons favoritos deverá ser exibida com a opção de remover o pokemon da lista.

interface PokemonList {
  [id: number]: IPokemon
}

function App() {
  const [pokemonList, setPokemonList] = React.useState<PokemonList>();

  const removePokemonFromList = (id: number) => {
    if (!pokemonList){
      return;
    }
    setPokemonList(
      Object.keys(pokemonList)
      .filter((i) => Number(i) !== id)
      .reduce((list, id) => {
        const pokemon = pokemonList[Number(id)];
        return {
          ...list,
          [id]: pokemon
        }
      }, {}));
  }

  return (
    <main>
      <h1>Meus pokemons</h1>
      <SearchBar
        onClickAddPokemon={(pokemon) =>
          setPokemonList({ ...pokemonList, [pokemon.id]: pokemon })
        }
      />
      <div>
        <h2>Pokemons favoritos</h2>
        {pokemonList && Object.keys(pokemonList).map((id) => {
        const pokemon = pokemonList[Number(id)] as IPokemon;
        return (
          <div key={id}>
            {pokemon.name}
            <button onClick={() => removePokemonFromList(pokemon.id)}>Remover</button>
          </div>
        );
      })}
      </div>
    </main>
  );
}

export default App;
