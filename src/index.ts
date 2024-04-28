import { renderGeneralLayout } from "./ui/index.js";
import { getCharacterCards } from "./characters/factories/characterCard.js";
import { characters } from "./characters/data.js";
import { getCardContainer } from "./characters/factories/cardsContainer.js";

renderGeneralLayout("Game of Thrones");

getCharacterCards(characters[0]);
getCharacterCards(characters[1]);

getCardContainer();
