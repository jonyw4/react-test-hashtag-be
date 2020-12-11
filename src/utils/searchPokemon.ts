import { client } from './client';
import { IPokemon } from '../types';

/**
 * Search a Pokemon
 */
export async function searchPokemon(query: string): Promise<IPokemon | void> {
  if (query.length < 2) {
    return;
  }
  const { data } = await client.get<IPokemon>(`/pokemon/${query}`);
  return data;
}
