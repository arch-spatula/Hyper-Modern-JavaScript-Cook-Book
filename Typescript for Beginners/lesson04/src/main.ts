type stringOrNumber = string | number;

type stringOrNumberArray = (string | number)[];

type Guitarist = {
  name?: string;
  active: boolean;
  albums: (string | number)[];
};

type userId = stringOrNumber;

// Literal type

let myName: "Jake";

let userName: "Dave" | "John" | "Amy";
userName = "Amy";

const logMsg = (message: string): void => console.log(message);
// function
const add = (a: number, b: number): number => {
  return a + b;
};

const subtract = (a: number, b: number): number => {
  return a - b;
};

type mathFunc = (a: number, b: number) => number;

// interface mathFunc {
//   (a: number, b: number): number;
// }

let multiply: mathFunc = (a, b) => {
  return a * b;
};

// 선택적으로 인자 대입가능하게 정의하기
const addAll = (a: number, b: number, c: number = 0): number => {
  // 타입 가드
  return a + b;
};

const total = (...nums: number[]): number =>
  nums.reduce((prev, curr) => prev + curr);

// 에러
const createError = (errMsg: string): never => {
  throw new Error(errMsg);
};

// 무한 루프
const infinite = (): never => {
  let i: number = 1;
  while (true) {
    i++;
  }
};

// 커스텀 타입 가드
const isNumber = (value: any): boolean => {
  return typeof value === "number";
};

// 응용해볼 수 있는 경우입니다.
const numberOrString = (value: number | string): string => {
  if (typeof value === "string") return "string";
  if (isNumber(value)) return "number";
  return createError("발생하면 안 됩니다.");
};
