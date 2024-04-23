type LevelRange = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

type Character = {
  name: string;
  surname: string;
  age: number;
  status: "Dead" | "Alive";
};

type King = Character & {
  yearsReigning: number;
  sentence: "Vais a morir todos";
};

type Fighter = Character & {
  weapon: string;
  dexterityLevel: LevelRange;
  sentence: "Primero pego y luego pregunto";
};

type Squire = Character & {
  characterWhomServes: Fighter;
  asslickerLevel: LevelRange;
  sentence: "Soy un loser";
};

type Adviser = Character & {
  characterWhomAdvises: Squire | Fighter | King | Adviser;
  sentence: "No sé por qué, pero creo que voy a morir pronto";
};
