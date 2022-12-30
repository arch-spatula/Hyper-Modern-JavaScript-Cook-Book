let stringArr = ["one", "hey", "Jake"];

let guitars = ["Strat", "Les Paul", 5150];

let mixedData = ["EVH", 1984, true];

stringArr[0] = "asdf"; //문제 없는 코드
stringArr.push("asdf"); //문제 없는 코드
stringArr[0] = 24; //에러
stringArr.push(56); // 에러

guitars[0] = "asdf"; //문제 없는 코드
guitars[0] = 456; //문제 없는 코드
guitars[1] = true; // 에러

let test = []; // test:any[]로 추론

let bands: string[] = [];

bands.push("offspring");

let myTuple: [string, object] = ["Jake", {}];

myTuple.push(456); // 에러: 튜플은 자료 추가 불가능

let myObj: object;
myObj = [];
console.log(typeof myObj); // object 재할당 에러가 없습니다.

const exampleObj = {
  prop1: "Jake",
  prop2: true,
};

type Guitarist = {
  name: string;
  active: boolean;
  albums?: (string | number)[];
};

let evh: Guitarist = {
  name: "offspring",
  active: true,
};

const greetGuitarist = (greetGuitarist: Guitarist) =>
  `Hello, ${greetGuitarist.name}`;

enum Grade {
  U = 1,
  D,
  C,
  B,
  A,
}

console.log(Grade.U);
