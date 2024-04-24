import { createKingCharacter, sentences } from "../data";
import { type King } from "../types";

describe("Given the fucntion createKingCharacter", () => {
  describe("When it reciebes the name Marcos, the surname Rodríguez, the age 29, and the years reigning 2", () => {
    test("Then it should return a 29 years old King called Marcos Rodríguez, who has been reignin for 2 years", () => {
      const name = "Marcos";
      const surname = "Rodríguez";
      const age = 29;
      const yearsReigning = 2;
      const expectedKing: King = {
        name,
        surname,
        age,
        yearsReigning,
        isAlive: true,
        die(this: King) {
          this.isAlive = false;
        },
        speak() {
          return sentences[0];
        },
      };
      const expectedKingToMatch = {
        name: expectedKing.name,
        surname: expectedKing.surname,
        age: expectedKing.age,
        yearsReigning: expectedKing.yearsReigning,
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
});
