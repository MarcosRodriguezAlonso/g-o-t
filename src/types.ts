type Level = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
export type Sentence = string[];

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
}

export interface Fighter extends Character {
  dexterityLevel: Level;
  weapon: string;
}

export interface Squire extends Character {
  characterWhomServes: Fighter;
  asslickerLevel: Level;
}

export interface Adviser extends Character {
  characterWhomAdvises: Squire | Fighter | King | Adviser;
}
