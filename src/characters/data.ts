import {
  createKingCharacter,
  createFighterCharacter,
} from "./factories/charactersFactory";
import { type Character } from "./factories/types";

export const kingSentence = "Vais a morir todos";
export const fighterSentence = "Primero pego y luego pregunto";
export const squireSentence = "Soy un loser";
export const adviserSentence =
  "No sé por qué, pero creo que voy a morir pronto";

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
