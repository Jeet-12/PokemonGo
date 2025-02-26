import axios from 'axios';

const POKEAPI_BASE_URL = 'https://pokeapi.co/api/v2';

interface PokemonListResponse {
  results: { name: string; url: string }[];
}

interface PokemonDetails {
  id: number;
  name: string;
  sprites: { front_default: string };
  types: { type: { name: string } }[];
  // Add more fields as needed
}

export const fetchPokemons = async (limit: number = 20): Promise<{ name: string; url: string }[]> => {
  try {
    const response = await axios.get<PokemonListResponse>(`${POKEAPI_BASE_URL}/pokemon?limit=${limit}`);
    return response.data.results;
  } catch (error) {
    console.error('Error fetching Pokémon list:', error);
    return [];
  }
};

export const fetchPokemonDetails = async (id: string | number): Promise<PokemonDetails | null> => {
  try {
    const response = await axios.get<PokemonDetails>(`${POKEAPI_BASE_URL}/pokemon/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching details for Pokémon ID ${id}:`, error);
    return null;
  }
};
