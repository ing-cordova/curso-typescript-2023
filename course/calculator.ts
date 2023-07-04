type Operation = "multiply" | "add" | "divide";

const calculator = (a: number, b: number, operation: Operation): number => {
  if (operation === "multiply") {
    return a * b;
  } else if (operation === "add") {
    return a + b;
  } else if (operation === "divide") {
    if (b === 0) {
      throw new Error("Can't divide by 0!");
    }
    return a / b;
  }

    throw new Error("Operation is not defined");
};

console.log(calculator(5, 3, "multiply"));
console.log(calculator(5, 3, "add"));
console.log(calculator(5, 3, "divide"));
