import { renderGeneralLayout } from "./ui/index.js";
import { getCharacterCards } from "./ui/characterCard.js";
import { characters } from "./characters/data.js";
import { createCardContainer } from "./ui/cardsContainer.js";

renderGeneralLayout("Game of Thrones");

getCharacterCards(characters[0]);
getCharacterCards(characters[1]);

createCardContainer();
