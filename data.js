export async function getAllPokemons() {
  try {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/');
    
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json()
    return data.results
  } catch (error) {
    console.error('Failed to fetch Pokémon data:', error);
    return [];
  }
}

