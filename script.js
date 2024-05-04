import { pokemon } from "./data.js";

function createPokemonCard(pokemon) {
  // Generere et html element
  const articleElement = document.createElement("article");

  // Lage alle elementene
  const firstName = document.createElement("p");
  const ageElement = document.createElement("p");
  const profileLinkElement = document.createElement("a");

  // Legg til innholdet i elementene
  articleElement.className = "person-card";
  firstName.textContent = sigrid.Name;
  ageElement.textContent = sigrid.Age;
  profileLinkElement.textContent = "Profile";
  profileLinkElement.href = sigrid.homePage;

  // Lagt de til containeren
  articleElement.appendChild(firstName);
  articleElement.appendChild(ageElement);
  articleElement.appendChild(profileLinkElement);

  return articleElement;
}
