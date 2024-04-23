export interface Character {
  name: string;
  surname: string;
  age: number;
  status: "Dead" | "Alive";
}

export interface King extends Character {
  yearsReigning: number;
  sentence: "Vais a morir todos";
}

export interface Fighter extends Character {
  weapon: string;
  dexterityLevel: 2;
  sentence: "Primero pego y luego pregunto";
}

export interface Squire extends Character {
  characterWhomServes: Fighter;
  asslickerLevel: 2;
  sentence: "Soy un loser";
}

export interface Adviser extends Character {
  characterWhomAdvises: Squire | Fighter | King | Adviser;
  sentence: "No sé por qué, pero creo que voy a morir pronto";
}
