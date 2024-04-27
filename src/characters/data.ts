import {
  createKingCharacter,
  createFighterCharacter,
} from "./factories/charactersFactory";
import { type Character } from "./factories/types";

const getCharactersSentences = (charactersList: Character[]): string[] => {
  const sentencesList: string[] = [];

  charactersList.forEach((character) => {
    sentencesList.push(character.sentence);
  });

  return sentencesList;
};

export const joffreyBaratheon = createKingCharacter(
  "Joffrey",
  "Baratheon",
  14,
  2,
);
export const jaimeLannister = createFighterCharacter(
  { name: "Jaime", surname: "Lannister", age: 40 },
  8,
  "Sword",
);

const characters: Character[] = [joffreyBaratheon, jaimeLannister];

export const characterSentences: string[] = getCharactersSentences(characters);
