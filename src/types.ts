interface Character {
  name: string;
  surname: string;
  age: number;
  status: string;
}

interface King {
  name: string;
  surname: string;
  age: number;
  status: string;
  yearsReigning: number;
}

interface Fighter {
  name: string;
  surname: string;
  age: number;
  status: string;
  weapon: string;
  dexterityLevel: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
}

interface Squire {
  name: string;
  surname: string;
  age: number;
  status: string;
  characterWhomServes: Fighter;
  asslickerLevel: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
}

interface Adviser {
  name: string;
  surname: string;
  age: number;
  status: string;
  characterWhomAdvises: Squire | Fighter | King | Adviser;
}
