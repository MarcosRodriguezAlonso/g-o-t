import type { BasicCharacter, Level, Fighter, King } from "./types";
import { fighterSentence, kingSentence } from "./data";

export const createKingCharacter = (
  name: string,
  surname: string,
  age: number,
  yearsReigning: number,
): King => {
  if (age <= 0 || yearsReigning <= 0) {
    throw new Error(
      "Error: the amount of years must be a number bigger than 0",
    );
  }

  return {
    name,
    surname,
    age,
    isAlive: true,
    sentence: "Vais a morir todos",
    yearsReigning,
    die(this: King) {
      this.isAlive = false;
    },
    speak() {
      return kingSentence;
    },
  };
};

export const createFighterCharacter = (
  character: BasicCharacter,
  dexterityLevel: Level,
  weapon: string,
): Fighter => {
  if (character.age <= 0 || dexterityLevel <= 0) {
    throw new Error(
      "Error: the amount of years must be a number bigger than 0",
    );
  }

  return {
    name: character.name,
    surname: character.surname,
    age: character.age,
    isAlive: true,
    sentence: fighterSentence,
    dexterityLevel,
    weapon,
    die(this: Fighter) {
      this.isAlive = false;
    },
    speak() {
      return fighterSentence;
    },
  };
};
