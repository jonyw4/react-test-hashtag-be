import axios from 'axios';

const ENDPOINT = 'https://pokeapi.co/api/v2/';

export const client = axios.create({
  baseURL: ENDPOINT,
});