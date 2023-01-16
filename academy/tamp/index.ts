type Print = (name: string, age: number) => string;

const getNameAndAge: Print = function (name, age) {
  return `name: ${name}, age: ${age}`;
};
