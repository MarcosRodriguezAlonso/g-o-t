import type {
  Adviser,
  Character,
  Fighter,
  King,
  Squire,
  Sentence,
} from "./types.js";

export const kingSentence = "Vais a morir todos";
export const fighterSentence = "Primero pego y luego pregunto";
export const squireSentence = "Soy un loser";
export const adviserSentence =
  "No sé por qué, pero creo que voy a morir pronto";

const jaimeLannister: Fighter = {
  name: "Jaime",
  surname: "Lannister",
  age: 45,
  isAlive: true,
  dexterityLevel: 8,
  weapon: "Espada",
  speak: () => fighterSentence,
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
  speak: () => fighterSentence,
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
  speak: () => adviserSentence,
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
  speak: () => squireSentence,
  die() {
    bronn.isAlive = false;
  },
};
