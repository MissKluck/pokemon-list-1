import { getAllPokemons } from "./data.js"

// Fetch and log Pokemon data
const pokemon = await getAllPokemons()
console.log(pokemon)

// Ensure getAllPokemons.results is an array (or iterable) before using it

if (pokemon && Array.isArray(getAllPokemons.results)) {
  for (const pokemon of getAllPokemons.results) {
    // Lage et html element
    const newElement = createPokemonCard(pokemon)
    // Sett inn i dokument
    const list = document.getElementById("pokemon-list")
    list.appendChild(newElement)
    if (list) {
      list.appendChild(newElement)
    }
  } 
}  else {
  console.error("getAllPokemons.results is not an array or not iterable");
  
}

function createPokemonCard(pokemon) {
  //Ensure all required properties are available
  const { name, type, shapeImage, homePage } = pokemon;
  if (!name || !type || !shapeImage || !homePage ) {
    console.error("Missing Pokemon properties:", pokemon);
    return document.createElement("div"); // Return and empty element or handle the error appropriately
  }

// Create a template string with the Pokemon's details
const template = `
  <article class="pokemon-card">
      <p>Name: ${name}</p>
      <p>Type: ${type}</p>
      <div>
        <p>Shape:</p> 
        <img id="data.js/Shape" src="${shapeImage}">
      </div>
      <a href="${homePage}>Profile</a>
    </article> 
  `;

  // Create a container to hold the HTML 
  const container = document.createElement("div");
  container.innerHTML = template;

  // Return the first child of the container, which is the article element
  return container.firstChild;
}
//
 // // Generere et html element
 // const articleElement = document.createElement("article");
//
 // // Lage alle elementene
 // const firstName = document.createElement("p");
 // const ageElement = document.createElement("p");
 // const profileLinkElement = document.createElement("a");
//
 // // Legg til innholdet i elementene
 // articleElement.className = "person-card";
 // firstName.textContent = sigrid.Name;
 // ageElement.textContent = sigrid.Age;
 // profileLinkElement.textContent = "Profile";
 // profileLinkElement.href = sigrid.homePage;
//
 // // Lagt de til containeren
 // articleElement.appendChild(firstName);
 // articleElement.appendChild(ageElement);
 // articleElement.appendChild(profileLinkElement);
 // return articleElement;
//