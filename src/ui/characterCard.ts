import { type Character } from "../characters/factories/types";

export const getCharacterCards = (character: Character): HTMLElement => {
  const card = document.createElement("li");
  const cardTitle = document.createElement("h2");
  const container = document.querySelector(".main-container")!;
  const fullName = `${character.name} ${character.surname}`;

  cardTitle.textContent = fullName;
  card.classList.add("character-card");

  card.appendChild(cardTitle);
  container.appendChild(card);

  return card;
};
