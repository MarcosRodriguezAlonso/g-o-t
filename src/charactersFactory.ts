import { type King } from "./types";
import { kingSentence } from "./data";

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
  } else {
    return {
      name,
      surname,
      age,
      isAlive: true,
      yearsReigning,
      die(this: King) {
        this.isAlive = false;
      },
      speak() {
        return kingSentence;
      },
    };
  }
};

console.log(createKingCharacter("Marcos", "Rodr", 0, 0));
