import { IPokemon } from '../types';

type State = {
  [id: number]: IPokemon
}
type Action = { type: 'add', data: IPokemon } | { type: 'rem', data: IPokemon }

export function pokemonListReducer(state: State, {type, data}: Action): State {
  switch (type) {
    case 'add':
      return { ...state, [data.id]: data };
    case 'rem':
      return Object.keys(state)
        .filter((i) => Number(i) !== data.id)
        .reduce((list, id) => {
          const pokemon = state[Number(id)];
          return {
            ...list,
            [id]: pokemon
          }
        }, {});
  }
 }