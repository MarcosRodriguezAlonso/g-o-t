import type {
  Adviser,
  Character,
  Fighter,
  King,
  Squire,
  Sentence,
} from "./types.js";

const sentences: Sentence = [
  "Vais a morir todos",
  "Primero pego y luego pregunto",
  "Soy un loser",
  "No sé por qué, pero creo que voy a morir pronto",
];

export const createKingCharacter = (
  name: string,
  surname: string,
  age: number,
  yearsReigning: number,
): King => ({
  name,
  surname,
  age,
  isAlive: true,
  yearsReigning,
  die(this: King) {
    return this.isAlive;
  },
  speak() {
    return sentences[1];
  },
});

/* Const createFighter = (name: string, surname: string, ); */

const joffreyBaratheon: King = createKingCharacter(
  "Joffrey",
  "Baratheon",
  14,
  2,
);

const jaimeLannister: Fighter = {
  name: "Jaime",
  surname: "Lannister",
  age: 45,
  isAlive: true,
  dexterityLevel: 8,
  weapon: "Espada",
  speak: () => sentences[2],
  die(this: Fighter) {
    jaimeLannister.isAlive = false;
  },
};

const daenerysTargaryen: Fighter = {
  name: "Daenerys",
  surname: "Targaryen",
  age: 45,
  isAlive: true,
  dexterityLevel: 6,
  weapon: "Fire",
  speak: () => sentences[2],
  die() {
    daenerysTargaryen.isAlive = false;
  },
};

const tyrionLannister: Adviser = {
  name: "Tyrion",
  surname: "Lannister",
  age: 30,
  isAlive: true,
  characterWhomAdvises: daenerysTargaryen,
  speak: () => sentences[4],
  die() {
    tyrionLannister.isAlive = false;
  },
};

const bronn: Squire = {
  name: "Broon",
  surname: "",
  age: 23,
  isAlive: true,
  characterWhomServes: jaimeLannister,
  asslickerLevel: 10,
  speak: () => sentences[3],
  die() {
    bronn.isAlive = false;
  },
};

export const characters: Character[] = [
  joffreyBaratheon,
  jaimeLannister,
  daenerysTargaryen,
  tyrionLannister,
  bronn,
];
