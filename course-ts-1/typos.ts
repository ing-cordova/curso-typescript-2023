let person: string = "Julia";
person = "Alonso";

const saludar = ({ name, age }: { name: string; age: number }) => {
  console.log(`${name} and you are ${age} years old.`);
};

saludar({ name: "Juan", age: 3 });

const hero = {
  name: "Thor",
  age: 23,
};

type Hero = {
  readonly id?: number;
  name: string;
  age: number;
};

saludar(hero);

const languages: string[] = [];
languages.push("JavaScript");
languages.push("TypeScript");

interface Heroes {
  id: number;
  name: string;
  age: number;
}

interface Mario {
  company: "nintendo";
  name: string;
  jump: () => void;
}

interface Sonic {
  company: "sega";
  name: string;
  run: () => void;
}

type Personaje = Mario | Sonic;

function jugar(personaje: Personaje) {
  if (personaje.company === "nintendo") {
    personaje.jump(); //-> este es mario.
  } else {
    personaje.run(); //-> este es sonic
  }
}
