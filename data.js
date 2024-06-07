export async function getAllPokemons() {
   const response = await fetch('https://pokeapi.co/api/v2/pokemon/') 
   const pokemon = await response.json()
  return pokemon.results
}

