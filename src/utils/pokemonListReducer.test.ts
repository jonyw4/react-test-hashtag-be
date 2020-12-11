import { pokemonListReducer } from './pokemonListReducer';

describe('utils > pokemonListReducer', () => {
  const testPokemon = { id: 1, name: 'test' };

  it('should try to add a pokemon', async () => {
    const result = await pokemonListReducer(
      {},
      {
        type: 'add',
        data: testPokemon
      }
    );
    expect(result[1].name).toBe(testPokemon.name);
  });
  it('should try to rem a pokemon', async () => {
    const result = await pokemonListReducer(testPokemon, {
      type: 'rem',
      data: testPokemon
    });
    expect(result).toEqual({});
  });
});
