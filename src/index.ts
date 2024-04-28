import { renderGeneralLayout } from "./ui/index.js";
import { getCharacterCard } from "./characters/factories/characterCard.js";
import { characters } from "./characters/data.js";

renderGeneralLayout("Game of Thrones");

getCharacterCard(characters[0]);
getCharacterCard(characters[1]);
