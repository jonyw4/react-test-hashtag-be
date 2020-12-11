import { searchPokemon } from './searchPokemon';
import { IPokemon } from '../types';

describe('utils > searchPokemon', () => {
  it('should try to request a wrong query and returns undefined', async () => {
    const result = await searchPokemon('');
    expect(result).toBe(undefined);
  });
  it('should try to request a valid query and returns a pokemon data', async () => {
    const result = (await searchPokemon('ditto')) as IPokemon;
    expect(result.name).toBeDefined();
    expect(result.id).toBeDefined();
  });
});
