type Level = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

export interface Character {
  name: string;
  surname: string;
  age: number;
  isAlive: boolean;
  die: () => void;
  speak: () => string;
}

export interface King extends Character {
  yearsReigning: number;
  sentence: "Vais a morir todos";
}

export interface Fighter extends Character {
  dexterityLevel: Level;
  weapon: string;
  sentence: "Primero pego y luego pregunto";
}

export interface Squire extends Character {
  characterWhomServes: Fighter;
  asslickerLevel: Level;
  sentence: "Soy un loser";
}

export interface Adviser extends Character {
  characterWhomAdvises: Squire | Fighter | King | Adviser;
  sentence: "No sé por qué, pero creo que voy a morir pronto";
}
