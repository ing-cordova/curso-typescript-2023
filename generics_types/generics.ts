//Tipos genericos en Typescript.

function getArray<T>(items: T[]): T[] {
  return new Array<T>().concat(items);
}

let numArray = getArray<number>([100, 200, 300]);
let strArray = getArray<string>(["hello", "world"]);

interface Identity<T, U> {
  value: T;
  message: U;
}

interface ProcessIdentity<T, U> {
  (value: T, message: U): T;
}

const identity: Identity<number, string> = {
  value: 123,
  message: "Hello world",
};

const identity2: Identity<boolean, string> = {
  value: true,
  message: "Hello world",
};

const processIdentity: ProcessIdentity<number, string> = (value, message) => {
  return value;
};

processIdentity(1, "2");
