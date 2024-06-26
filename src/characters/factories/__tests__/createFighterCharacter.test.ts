import { createFighterCharacter } from "../charactersFactory";
import { fighterSentence } from "../charactersFactory";
import { type Fighter } from "../types";

describe("Given the function createFighterCharacter", () => {
  describe("When it recibes a 20 years old character called John Cena who uses an axe and has 5 points of dexterity", () => {
    test("Then it should return a 20 years old Fighter called John Cena who uses an axe and has 5 points of dexterity", () => {
      const name = "John";
      const surname = "Cena";
      const age = 20;
      const weapon = "Axe";
      const dexterityLevel = 5;
      const espectedFighter: Omit<Fighter, "die" | "speak" | "isAlive"> = {
        name,
        surname,
        age,
        dexterityLevel,
        weapon,
        sentence: fighterSentence,
      };

      const createdFighter = createFighterCharacter(
        { name, surname, age },
        espectedFighter.dexterityLevel,
        espectedFighter.weapon,
      );

      expect(createdFighter).toMatchObject(espectedFighter);
    });
  });
  describe("When it recibes a 0 years old character called John Cena who uses an axe and has 0 points of dexterity", () => {
    test("Then it should throw the error 'Error: the numbers must be bigger than 0'", () => {
      const name = "John";
      const surname = "Cena";
      const age = 0;
      const dexterityLevel = 0;
      const weapon = "Axe";

      expect(() =>
        createFighterCharacter({ name, surname, age }, dexterityLevel, weapon),
      ).toThrow("Error: the numbers must be bigger than 0");
    });
  });
});
