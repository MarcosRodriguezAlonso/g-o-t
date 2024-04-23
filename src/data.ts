import type { Adviser, Fighter, King, Squire } from "./types.js";

const joffreyBaratheon: King = {
  name: "Joffrey",
  surname: "Baratheon",
  age: 14,
  isAlive: true,
  yearsReigning: 3,
  sentence: "Vais a morir todos",
  speak: () => joffreyBaratheon.sentence,
  die() {
    joffreyBaratheon.isAlive = false;
  },
};

const jaimeLannister: Fighter = {
  name: "Jaime",
  surname: "Lannister",
  age: 45,
  isAlive: true,
  sentence: "Primero pego y luego pregunto",
  dexterityLevel: 8,
  weapon: "Espada",
  speak: () => jaimeLannister.sentence,
  die() {
    jaimeLannister.isAlive = false;
  },
};

const daenerysTargaryen: Fighter = {
  name: "Daenerys",
  surname: "Targaryen",
  age: 45,
  isAlive: true,
  sentence: "Primero pego y luego pregunto",
  dexterityLevel: 6,
  weapon: "Fire",
  speak: () => daenerysTargaryen.sentence,
  die() {
    daenerysTargaryen.isAlive = false;
  },
};

const tyrionLannister: Adviser = {
  name: "Tirion",
  surname: "Lannister",
  age: 30,
  isAlive: true,
  sentence: "No sé por qué, pero creo que voy a morir pronto",
  characterWhomAdvises: daenerysTargaryen,
  speak: () => tyrionLannister.sentence,
  die() {
    tyrionLannister.isAlive = false;
  },
};

const bronn: Squire = {
  name: "Broon",
  surname: "",
  age: 23,
  isAlive: true,
  sentence: "Soy un loser",
  characterWhomServes: jaimeLannister,
  asslickerLevel: 10,
  speak: () => bronn.sentence,
  die() {
    bronn.isAlive = false;
  },
};

const characters = [
  joffreyBaratheon,
  jaimeLannister,
  daenerysTargaryen,
  tyrionLannister,
  bronn,
];
