import { createFighterCharacter } from "./charactersFactory";
import { fighterSentence } from "./data";
import { type Fighter } from "./types";

describe("Given the function createFighterCharacter", () => {
  describe("When it recibes a 20 years old character called John Cena who uses an axe and has 5 points of dexterity", () => {
    test("Then it should return a 20 years old Fighter called John Cena who uses an axe and has 5 points of dexterity", () => {
      const name = "John";
      const surname = "Cena";
      const age = 20;
      const espectedFighter: Omit<Fighter, "die" | "speak" | "isAlive"> = {
        name,
        surname,
        age,
        dexterityLevel: 5,
        weapon: "Axe",
        sentence: fighterSentence,
      };

      const createdFighter = createFighterCharacter(
        { name, surname, age },
        5,
        "Axe",
      );

      expect(createdFighter).toMatchObject(espectedFighter);
    });
  });
});
