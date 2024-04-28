import { type Character } from "./types";

export const getCharacterCards = (character: Character): HTMLElement => {
  const card = document.createElement("article");
  const cardTitle = document.createElement("h2");
  const container = document.querySelector(".main-container")!;

  cardTitle.textContent = character.name;
  card.classList.add("character-card");

  card.appendChild(cardTitle);
  container.appendChild(card);

  return card;
};
