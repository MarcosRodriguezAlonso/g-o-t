import { createKingCharacter } from "./charactersFactory";
import { type King } from "./types";

describe("Given the fucntion createKingCharacter", () => {
  describe("When it reciebes the name Marcos, the surname Rodríguez, the age 29, and the years reigning 2", () => {
    test("Then it should return a 29 years old King called Marcos Rodríguez, who has been reignin for 2 years", () => {
      const name = "Marcos";
      const surname = "Rodríguez";
      const age = 29;
      const yearsReigning = 2;
      const expectedKingToMatch: Omit<King, "die" | "speak" | "isAlive"> = {
        name,
        surname,
        age,
        yearsReigning,
        sentence: "Vais a morir todos",
      };

      const createdKing: King = createKingCharacter(
        name,
        surname,
        age,
        yearsReigning,
      );

      expect(createdKing).toMatchObject(expectedKingToMatch);
    });
  });

  describe("When it recibes the name Marcos, the surname Rodríguez, the  age of -10, and the years reigning 0", () => {
    test("Then it should throw the error 'Error: the amount of years must be a number bigger than 0'", () => {
      const yearsReigning = 0;
      const age = -10;
      const surname = "Rodríguez";
      const name = "Marcos";

      expect(() =>
        createKingCharacter(name, surname, age, yearsReigning),
      ).toThrow("Error: the amount of years must be a number bigger than 0");
    });
  });
});
