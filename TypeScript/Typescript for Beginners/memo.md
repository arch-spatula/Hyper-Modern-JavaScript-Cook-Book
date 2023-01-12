# Typescript for Beginners

[Typescript for Beginners](https://github.com/gitdagray/typescript-course)

# Typescript for Beginners - Starter Lesson

[Typescript for Beginners - Starter Lesson](https://www.youtube.com/watch?v=MOO5vrtTUTE)

타입 스크립트란 무엇인가? 툴링과 정적 타입을 제공하는 자바스크립트입니다. 타입 스크립트는 더 좋은 툴링을 제공합니다. 그저 더 좋은 자바스크립트를 작성할 수 있게 해줍니다. C#개발자가 타입스크립트입니다.

관련 아티클
https://survey.stackoverflow.co/2022/#technology-most-popular-technologies

https://dev.to/destrodevshow/typescript-and-c-both-created-by-the-same-person-named-anders-hejlsberg-42g4

타입 스크립트는 자바스크립트로 컴파일 됩니다. 타입스크립트는 자바스크립트이지만 자바스크립트를 더 잘 작성할 수 있게 해주는 언어에 불과합니다.

타입스크립트를 배우기 전에 자바스크립트를 잘 해야 합니다. 마이크로 소프트에서 VScode도 개발하고 타입스크립트도 개발합니다.

```sh
npm i typescript -g
```

타입 스크립트 전역 설치입니다.

```ts
let username = "Jake";
console.log(username);
```

위 코드 main.ts가 있는 디렉토리에서 아래 코드를 실행합니다.

```sh
tsc main.ts
```

main.js로 컴파일해줍니다. 타입 스크립트는 옛날 브라우저를 기준으로 컴파일 시켜주기 때문에 아래처럼 컴파일 해줍니다.

```js
var username = "Jake";
console.log(username);
```

```html
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      body {
        background-color: #000;
      }
    </style>
    <script src="main.js"></script>
  </head>
  <body></body>
</html>
```

위 코드를 라이브 서버로 실행하면 컴파일 된 자바스크립트가 실행됩니다.

하지만 문제가 있습니다. 컴파일을 여러번 계속 다시 해줘야 합니다. 다른 방법이 있습니다.

```sh
tsc main.ts -w
```

위 명령으로 처리하면 됩니다. SCSS를 실시간 컴파일 하듯이 처리합니다.

일반적으로 프로젝트를 만들 때는 아래 디렉토리 구조를 갖고 있습니다.

```txt
빌드/
    index.html
src/
    main.ts
tsconfig.json
```

```sh
tsc --init # tsconfig.json 설치
```

tsconfig.json은 컴파일러 설정하는 파일입니다. 기준 위치와 출력 위치를 정하는 것으로 시작할 수 있습니다.

`"rootDir": "./src"`, `"outDir": "./build/js"`으로 입력과 출력 위치를 결정할 수 있습니다.

```json
"include": ["src"]
```

위로 설정하면 src 파일에서 생성한 것만 컴파일하도록 설정할 수 있습니다.

```ts
let a = 12;
let b = "6";
let c = 2;

console.log(a / b);
```

정적 언어에서는 불가능한 계산입니다. 자바스크립트는 가능하지만 타입스크립트는 에러를 돌려줍니다.

과거 자바스크립트 프로젝트랑 하위 호환하면서 작업 진행은 가능합니다.

`noEmitOnError` 설정을 확성화하는 것으로 에러가 발생할 때 컴파일을 정지시킬 수 있습니다.

```sh
tsc --noEmitOnError -w
```

으로 컴파일 설정을 해둘 수 있습니다.

# Typescript Basic Types - Beginners Lesson

타입 스크립트 용어들입니다. 강형 타입 언어는 자료형을 명시하면서 프로그래밍하는 언어입니다. 동적 자료형 언어는 자료형을 명시할 필요가 없습니다.

strictly typed와 strongly typed는 다릅니다. loosely typed는 dynamic typed랑 다릅니다.

타입 스크립트는 컴파일할 때 자료형을 검토합니다. 자바스크립트는 런타임에 자료형을 검토합니다.

타입 스크립트는 용어가 혼란스러울 수 있습니다. 또 타입 스크립트는 자료형을 추론할 수 있습니다.

```ts
let username = "Jake";
console.log(username);
```

이렇게 작성하면 문자열을 이미 암시만 하고 있습니다.

```ts
let username: string = "Jake";
console.log(username);
```

이렇게 하면 명시하는 것입니다. 이 자료형을 명시하면

```ts
let username: string = "Jake";

username = 24;
username = "";
console.log(username);
```

이렇게 하면 24에서 에러가 발생합니다. 오직 해당하는 식별자에 문자열만 재할당할 수 있습니다. 물론 이렇게 해서 데이터를 재할당하는 것을 막는 것은 전혀 아닙니다. 자료형이 의도한 자료형 한정으로 재할당이 가능합니다.

아주가끔 any를 사용해야 할 때는 있지만 가능하면 사용하지 않는 것이 좋습니다. 타입스크립트의 의미가 퇴색됩니다.

```ts
const num = (a, b) => {
  return a + b;
};
```

위처럼 작성하면 에러가 발생할 것입니다. 자바스크립트는 정상작동할 것이지만 함수 매개변수로 정의하면 매개변수의 자료형은 기본적으로 any에 해당하기 때문에 에러를 돌려줍니다.

```ts
const num = (a: number, b: number) => {
  return a + b;
};
```

이렇게 작성해야 정상 작동합니다.

```ts
let album: string | number; // 문자열 혹은 숫자형
```

이렇게 작성하면 2가지 자료형 모두 받을 수 있습니다. 유니언 타입이라고 부릅니다.

```ts
let postId: string | number; // id를 정의할 때 사용할 수 있습니다.
let isActive: number | boolean; // 사용자 수를 추적하기 위해 사용할 수 있습니다.
```

```ts
let re: RegExp = /\w+/g; // 정규표현식
```

특수한 자료형도 이렇게 표현할 수 있습니다.

# Typescript Objects, Arrays, Tuples & Enums | Basics Tutorial

타입스크립트 객체, 배열, 튜플, 이넘(Enums) 기본을 배웁니다.

```ts
let stringArr = ["one", "hey", "Jake"];

let guitars = ["Strat", "Les Paul", 5150];

let mixedData = ["EVH", 1984, true];
```

타입스크립트에서 지금 상태에서 자료를 추론할 때는 지금 입력한 자료를 유니언 타입으로 추론합니다.

```ts
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
```

처음 정의할 때 배열에 들어가 있는 자료형을 기준으로 추론합니다.

```ts
let test = []; // test:any[]로 추론
```

정의하면서 배열에 들어갈 수 있는 자료형을 다음과 같이 정의할 수 있습니다.

```ts
let bands: string[] = [];

bands.push("offspring"); // 자료형이 맞기 때문에 에러 없음
```

타입 스크립트에서 배열은 위치가 자유롭습니다.

더 엄격하게 위치와 배열 크기와 자료형을 정의하는 경우 튜플을 사용하면 됩니다.

```ts
let myTuple: [string, object] = ["Jake", {}];

myTuple.push(456); // 에러: 튜플은 자료 추가 불가능
```

useState처럼 정의할 수 있습니다.

```ts
let myObj: object;
myObj = [];
console.log(typeof myObj); // object 재할당 에러가 없습니다.
```

```ts
const exampleObj = {
  prop1: "Jake",
  prop2: true,
};
```

각각의 키별로 자료형이 정해집니다. 하지만 여기서 의문이 생길 수 있습니다. 자료형 주석을 추가하고 싶으면 어떻게 해야하는가?

```ts
type Guitarist = {
  name: string;
  active: boolean;
  albums: (string | number)[];
};

let evh: Guitarist = {
  name: "offspring",
  active: true,
  albums: ["kid's"],
};
```

`type`으로 객체의 각 자료형에 주석을 정의할 수 있습니다.

하지만 이렇게 정의하고 키와 값 중 하나를 배출하면 에러를 발생시킵니다. 또 추가도 못합니다.

이런 설정을 선택적으로 변경하는 방법이 있습니다.

```ts
type Guitarist = {
  name: string;
  active: boolean;
  albums?: (string | number)[];
};

let evh: Guitarist = {
  name: "offspring",
  active: true,
};
```

속성 하나를 삭제해도 에러가 발생하지 않습니다.

```ts
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
```

이렇게 매개 변수 말고 외부에 매개변수를 정의할 수 있습니다.

타입 스크립트를 배우기 시작할 때 `interface`랑 `type`는 개인 취향에 따라 알아서 사용합니다. 하지만 나중에 객체지향 패턴의 깊은 지식을 활용해서 구분합니다.

Enums는 일반적인 자바스크립트에서 당연히 본적없는 자료형입니다.

```ts
enum Grade {
  U = 1,
  D,
  C,
  B,
  A,
}

console.log(Grade.U);
```

배열의 시작과 끝을 정의하는 특수한 자료형입니다.

# Typescript Functions | Basics Tutorial for Beginners

type aliases, functions, literal types, never type을 공부합니다.

```ts
// type aliases
type Guitarist = {
  name?: string;
  active: boolean;
  albums: (string | number)[];
};
```

이것을 타입 에일리어스라고 합니다. 객체 이외 자료형에도 사용할 수 있습니다.

```ts
type stringOrNumber = string | number;

type stringOrNumberArray = (string | number)[];

type Guitarist = {
  name?: string;
  active: boolean;
  albums: (string | number)[];
};

type userId = stringOrNumber;
```

type으로 자료형을 유형을 정의하는 것입니다.

interface는 클래스의 인스턴스처럼 생각하도록 합니다.

```ts
// Literal type

let myName: "Jake";
```

리터럴로 자료형을 정의할 수 있습니다.

```ts
let userName: "Dave" | "John" | "Amy";
userName = "Amy"; // 에러 없음
```

재할당의 범위를 이렇게 축소하는 것으로 카테고리를 설정하는 것같은 로직을 만들 수 있습니다. 당연히 숫자에도 적용할 수 있습니다. 이런 방법으로 코드 재사용성을 높일 수 있습니다.

```ts
// function
const add = (a, b) => {
  return a + b;
};
```

타입 스크립트는 이럴 때 에러를 돌려줍니다.

```ts
const add = (a: number, b: number) => {
  // 에러가 사라집니다.
  return a + b;
};
```

```ts
const add = (a: number, b: number): number => {
  return a + b;
};
```

이렇게 작성해서 반환하는 저료형을 지정할 수 있습니다.

`void`는 반환 값이 없는 함수입니다. 즉 사이드이펙트를 발생시키는 함수입니다.

```ts
const logMsg = (message: string): void => console.log(message);
```

타입 스크립트는 자료형에 맞지 않는 값을 대입하면 피드백을 제공합니다.

```ts
const add = (a: number, b: number): number => {
  return a + b;
};

add("a", 3); // 에러가 발생합니다.
```

재사용할 type을 정의하고 호출하는 것도 가능합니다.

```ts
// function
const add = (a: number, b: number): number => {
  return a + b;
};

const subtract = (a: number, b: number): number => {
  return a - b;
};

// 타입 정의
type mathFunc = (a: number, b: number) => number;

// 타입 호출
let multiply: mathFunc = (a, b) => {
  return a * b;
};
```

함수의 입출력할 자료형을 정의하고 재사용할 수 있습니다.

```ts
type mathFunc = (a: number, b: number) => number;

interface mathFunc {
  (a: number, b: number): number;
}
```

둘은 동일한 기능을 하지만 독자로서 맥락에 따라 다르게 사용해야 한다는 것을 파악할 수 있습니다. 인터페이스 답게 메서드처럼 생겼습니다. 반면 함수 자료형은 함수처럼 생겼습니다.

```ts
// 선택적으로 인자 대입가능하게 정의하기
const addAll = (a: number, b: number, c?: number): number => {
  // 타입 가드
  if (typeof c !== "undefined") return a + b + c;
  return a + b;
};
```

당연히 매개변수의 순서가 영향을 주는 것은 자바스크립트랑 동일합니다.

```ts
const addAll = (a: number, b: number, c: number = 0): number => {
  return a + b + c;
};
```

이렇게 하면 타입 가드가 사라집니다.

Rest 매개변수입니다.

```ts
const total = (...nums: number[]): number =>
  nums.reduce((prev, curr) => prev + curr);
```

이렇게 Rest 자료형을 지정하면서 함수에 대입이 가능합니다. 하지만 여기서 콜백 함수에서는 자료형을 지정하지 않았는지 의문이 발생할 수 있습니다. 이미 자료형을 지정했기 때문에 괜찮습니다.

아주 가끔 필요하고 유용한 자료형이 있습니다.

```ts
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

// 응용해볼 수 있는 경우입니다.
const numberOrString = (value: number | string): string => {
  if (typeof value === "string") return "string";
  if (typeof value === "number") return "number";
  return createError("발생하면 안 됩니다.");
};
```

커스텀 타입 가드를 만드는 방법입니다.

```ts
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
```

이런 방법으로 커스텀 타입 가드를 만들 수 있습니다.

# Type Assertions & Type Casting | Typescript Tutorial for Beginners

타입 가정(Type Assertions)과 형변환(Type Casting)입니다.

웹에서 혼용해서 사용하는 경우가 많습니다. 잘못된 개념을 제공합니다. 공식 문서는 타입 가정이라고 합니다. 형변환으로 검색되는 경우도 많습니다.

타입스크립트가 알 수 없는 자료형이 생기는 경우가 생깁니다. DOM을 다룰 때 그렇습니다. 타입 가정은 프로그래머가 자료형을 더 잘알고 있다고 가정하고 실행하기 때문입니다.

```ts
// 구체적인 자료형 선언
type One = string;
type Two = string | number;
type Three = "hello";

// 자료형 덜 구체적인 선언

let a: One = "hello";
let b = a as Two; // Two 자료형을 바뀌고 할당합니다. 덜 구체적인 경우에 해당합니다.
let c = a as Three; // 더 구체적인 선언합니다.

// tsx에서 사용할 수 없는 문법입니다. 일반 타입스크립트에서 가능합니다.
let d = <One>"World";
let e = <string | number>"World";
```

```ts
const addOrConcat = (
  a: number,
  b: number,
  c: "add" | "concat"
): number | string => {
  if (c === "add") return a + b;
  return "" + a + b;
};

// let myVal: string = addOrConcat(2, 2, "concat"); // 에러를 돌려줍니다.
let myVal: string = addOrConcat(2, 2, "concat") as string; // 에러가 없습니다.
```

```ts
// 하지만 문제가 있습니다. 타입스크립트는 문제가 없다고 봅니다. 하지만 실제로는 문자열을 반환합니다.
let nextVal: number = addOrConcat(2, 2, "concat") as number;
```

이렇게 타입스크립트가 확인할 수 없는 경우도 존재합니다.

강제형변환하는 방법입니다.

```ts
10 as string; // 에러가 발생합니다.
10 as unknown as string; // 이중 형변환입니다.
```

가능하기는 하지만 절대 권장하지 않습니다.

이제 DOM을 다루는 방법입니다.

```ts
const img = document.querySelector("#myId");
```

타입 스크립트는 DOM을 선택할 때 자료형 정의에 한계가 있습니다.

HTMLElement라는 자료형이라는 것만 알고 있습니다.

```ts
const img = document.querySelector("img") as HTMLImageElement;

img.src; // src 속성 접근에 문제가 없습니다.
```

자료형을 구체적으로 지정해줘서 에러가 발생하지 않게 프로그래머가 뒤에 붙여줍니다.

# TypeScript Classes Tutorial | TS for Beginners Lesson

타입 스크립트 클래스를 다루고 프로그래밍 인터페이스를 구현하는 법을 배웁니다.

```ts
class Coder {
  name: string;
}
```

오류가 발생합니다. 생성자 함수가 필요합니다.

```ts
class Coder {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}
```

에러는 없지만 중복이 발생합니다. 클래스 속성 멤버로 만들고 생성자 함수에서 또 만들어야 합니다. 어떻게 할 수 없습니다.

```ts
class Coder {
  name: string;
  music: string;
  age: number;
  lang: string;
  constructor(name: string, music: string, age: number, lang: string) {
    this.name = name;
    this.music = music;
    this.age = age;
    this.lang = lang;
  }
}
```

이렇게 해야 에러가 더이상 없습니다. 여전히 중복이 많습니다. 코드는 dry해야 합니다(중복이 없어야 합니다).

피하는 방법이 있습니다. 가시 변형자를 활용합니다.

```ts
class Coder {
  constructor(
    public name: string,
    public readonly music: string,
    private age: number,
    protected lang: string
  ) {
    this.name = name;
    this.music = music;
    this.age = age;
    this.lang = lang;
  }
}
```

이제 중복이 많이 줄어들었습니다.

인스턴스를 생성하면서 바로 생성하지 않을 속성값을 만들고 싶을 경우가 있을 수 있습니다. 보통 외부 라이브러리에 의존할 때 그렇습니다.

```ts
class Coder {
  secondLang!: string;
  constructor(
    public name: string,
    public readonly music: string,
    private age: number,
    protected lang: string
  ) {
    this.name = name;
    this.music = music;
    this.age = age;
    this.lang = lang;
  }
}
```

이렇게 하면 됩니다. 하지만 초보자에게 권장하지 않습니다.

private과 protected의 차이는 private는 파생 클레스에서도 접근할 수 있습니다.

```ts
class Coder {
  secondLang!: string;
  constructor(
    public name: string,
    public readonly music: string,
    private age: number,
    protected lang: string = "TypeScript"
  ) {
    this.name = name;
    this.music = music;
    this.age = age;
    this.lang = lang;
  }

  public getAge() {
    return `Hello, I'm ${this.age}`;
  }
}

const Jake = new Coder("Jake", "Rook", 28);

console.log(Jake.getAge());
console.log(Jake.age); // 에러가 발생합니다.
console.log(Jake.lang); // 에러가 발생합니다.
```

하지만 타입스크립트가 정상 컴파일을 할 수 있게 만들 수 있습니다. 자바스크립트에서 타입스크립트로 리팩토링하는 상황에서만 권장합니다.

```ts
class WebDev extends Coder {
  constructor(
    public computer: string,
    name: string,
    music: string,
    age: number
  ) {
    super(name, music, age);
    this.computer = computer;
  }
  public getLang() {
    return `I write ${this.lang}`;
  }
}

const Fin = new WebDev("Mac", "Fin", "Lofi", 30);
console.log(Fin.getAge());
```

상속을 만드는 방법입니다. lang은 생략 가능한게 생략할 경우 부모의 정의랑 동일하게 TypeScript로 자동할 당되기 때문입니다.

클래스 적용할 인터페이스를 만드는 법입니다.

```ts
interface Musician {
  name: string;
  instrument: string;
  play(action: string): string;
}

class Guitarist implements Musician {
  name: string;
  instrument: string;
  constructor(name: string, instrument: string) {
    this.name = name;
    this.instrument = instrument;
  }
  play(action: string): string {
    return `${this.name} ${action} the ${this.instrument}`;
  }
}
```

클래스가 인터페이스를 적용하고 또 자료형에 맞게 자동완성도 도와줍니다.

```ts
class Peeps {
  static count: number = 0;
  static getCount(): number {
    return Peeps.count;
  }
}
```

static는 클래스 본인을 가리키게 만듭니다. 그래서 this 키워드 대신 사용할 수 있습니다.

```ts
class Peeps {
  static count: number = 0;
  static getCount(): number {
    return Peeps.count;
  }
  public id: number;
  constructor(public name: string) {
    this.name = name;
    // 인스턴스 생성과 동시에 더함
    // id를 생성할 때 사용할 수 있는 방법입니다.
    this.id = ++Peeps.count;
  }
}
```

```ts
// readonly
class Bands {
  private dataState: string[];
  constructor() {
    this.dataState = [];
  }
  public get data(): string[] {
    return this.dataState;
  }
}
```

```ts
class Bands {
  private dataState: string[];
  constructor() {
    this.dataState = [];
  }
  public get data(): string[] {
    return this.dataState;
  }
  public set data(value: string[]) {
    if (Array.isArray(value) && value.every((el) => typeof el === "string")) {
      this.dataState = value;
      return;
    } else throw new Error("인자가 문자열만 갖은 배열이 아닙니다.");
  }
}
```

업데이트도 가능한 클래스가 됩니다. get은 읽기 set은 수정 키워드입니다.

```ts
const MyBands = new Bands();
MyBands.data = ["Offsprings", "fallout boy"];
```

# Typescript Index Signatures, keyof Assertions & the Record Utility Type

인덱스 시그지처, 레코드 유틸형, keyof 추론을 다룹니다.

타입스크립트는 객체형을 동적으로 접근할 때 자료형을 정의하게 만듭니다.

```ts
// 인덱스 시그니처

interface TransactionObj {
  Pizza: number;
  Books: number;
  Job: number;
}

const todaysTransactions: TransactionObj = {
  Pizza: -10,
  Books: -5,
  Job: 25,
};
```

이렇게 정의되어 있습니다. 여기서 인터페이스가 동적으로 정의될 수 있거나 인터페이스도 동적으로 생성되어야 하는 경우도 있습니다.

```ts
// 하지만 초보 타입스크립트 개발자가 자주하는 실수입니다.
let prop: string = "Pizza";

console.log(todaysTransactions[prop]); // 에러가 발생합니다.
```

이렇게 접근하는 경우가 많습니다. 동적으로 접근하면 에러가 발생합니다.

```ts
interface TransactionObj {
  // 이렇게 인덱스 시그니처를 정의합니다.
  [index: string]: number;
}

const todaysTransactions: TransactionObj = {
  Pizza: -10,
  Books: -5,
  Job: 25,
};

// 일반적으로 객체를 접근하는 방법입니다.
console.log(todaysTransactions.Pizza);
console.log(todaysTransactions["Pizza"]);

// 하지만 초보 타입스크립트 개발자가 자주하는 실수입니다.
let prop: string = "Pizza";

console.log(todaysTransactions[prop]);
```

참고로 타입 시그니처는 readonly를 권장합니다.

```ts
interface TransactionObj {
  readonly [index: string]: number;
}
```

```ts
// 인덱스 시그니처

// interface TransactionObj {
//   Pizza: number;
//   Books: number;
//   Job: number;
// }

interface TransactionObj {
  readonly [index: string]: number;
}

const todaysTransactions: TransactionObj = {
  Pizza: -10,
  Books: -5,
  Job: 25,
};

// 일반적으로 객체를 접근하는 방법입니다.
console.log(todaysTransactions.Pizza);
console.log(todaysTransactions["Pizza"]);

// 하지만 초보 타입스크립트 개발자가 자주하는 실수입니다.
let prop: string = "Pizza";

console.log(todaysTransactions[prop]);

console.log(todaysTransactions["Dave"]); // 하지만 에러를 돌려줘야 하는데 안 돌려줍니다.
```

하지만 한계가 있습니다.

```ts
interface Student {
  [key: string]: string | number | number[] | undefined;
  name: string;
  GPA: number;
  classes?: number[];
}

const student: Student = {
  name: "Doug",
  GPA: 3.5,
  classes: [100, 200],
};
```

이렇게 제어합니다.

```ts
interface Student {
  [key: string]: string | number | number[] | undefined;
  name: string;
  GPA: number;
  classes?: number[];
}

const student: Student = {
  name: "Doug",
  GPA: 3.5,
  classes: [100, 200],
};

for (const key in student) {
  console.log(`${key}: ${student[key as keyof Student]}`);
}
```

keyof 키워드로 순회할 수 있습니다.

```ts
const logStudentKey = (student: Student, key: keyof Student): void => {
  console.log(`Student ${key}: ${student[key]}`);
};

logStudentKey(student, "GPA");
```

keyof 키워드에 인터페이스를 지정하면 인터페이스에 해당하는 key를 넣게 만들어서 엄격하게 만들 수 있습니다.

```ts
interface Student {
  [key: string]: string | number | number[] | undefined;
  name: string;
  GPA: number;
  classes?: number[];
}

const student: Student = {
  name: "Doug",
  GPA: 3.5,
  classes: [100, 200],
};

for (const key in student) {
  console.log(`${key}: ${student[key as keyof Student]}`);
}

const logStudentKey = (student: Student, key: keyof Student): void => {
  console.log(`Student ${key}: ${student[key]}`);
};

logStudentKey(student, "GPA");
```

레코드를 정의하는 방법입니다.

```ts
// interface Incomes {
//   [key: string ]: number
// }

type Streams = "salary" | "bonus" | "sideHustle";

type Incomes = Record<Streams, number>;
```

```ts
type Streams = "salary" | "bonus" | "sideHustle";

type Incomes = Record<Streams, number | string>;

const monthlyIncomes: Incomes = {
  salary: 500,
  bonus: 100,
  sideHustle: 250,
};

for (const revenue in monthlyIncomes) {
  console.log(monthlyIncomes[revenue]);
}
```

이렇게 순회하면 에러가 발생합니다.

```ts
type Streams = "salary" | "bonus" | "sideHustle";

type Incomes = Record<Streams, number | string>;

const monthlyIncomes: Incomes = {
  salary: 500,
  bonus: 100,
  sideHustle: 250,
};

for (const revenue in monthlyIncomes) {
  console.log(monthlyIncomes[revenue as keyof Incomes]);
}
```

이렇게 또 keyof로 간단하게 해결할 수 있습니다.

# Typescript Generics | Beginners Tutorial with Examples

타입 스크립트는 제네릭을 허용합니다. 언제 무엇이 들어올지 프로그래머도 모를 수 있습니다.

```ts
const stringEcho = (arg: string): string => arg;
```

오직 문자열만 대입할 수 있습니다.

```ts
const Echo = <T>(arg: T): T => arg;
```

이렇게하면 제네릭하게 함수를 정의하는 것입니다. 제네릭을 정의하고 다른 곳에 붙여 사용합니다.

```ts
const isObj = <T>(arg: T): boolean => {
  return typeof arg === "object" && !Array.isArray(arg) && arg !== null;
};

console.log(isObj(true));
console.log(isObj("John"));
console.log(isObj([1, 2, 3]));
console.log(isObj({ name: "John" }));
console.log(isObj(null));
```

이렇게 하면 함수는 다양한 자료형을 인자로 대입할 수 있습니다. 자료형이 무엇인지 알아내기 위해 사용하는 것과 일치합니다.

진짜 any를 대입할 수 있게하는 것은 아닙니다.

```ts
const isObj = <T>(arg: T): boolean => {
  return typeof arg === "object" && !Array.isArray(arg) && arg !== null;
};

console.log(isObj(true));
console.log(isObj("John"));
console.log(isObj([1, 2, 3]));
console.log(isObj({ name: "John" }));
console.log(isObj(null));

const isTrue = <T>(arg: T): { arg: T; is: boolean } => {
  if (Array.isArray(arg) && !arg.length) {
    return { arg, is: false };
  }
  if (isObj(arg) && !Object.keys(arg as keyof T).length) {
    return { arg, is: false };
  }
  return { arg, is: !!arg };
};

console.log(isTrue(false));
console.log(isTrue(0));
console.log(isTrue(true));
console.log(isTrue(1));
console.log(isTrue("Dave"));
console.log(isTrue(""));
console.log(isTrue(null));
console.log(isTrue(undefined));
console.log(isTrue({})); // modified
console.log(isTrue({ name: "Dave" }));
console.log(isTrue([])); // modified
console.log(isTrue([1, 2, 3]));
console.log(isTrue(NaN));
console.log(isTrue(-0));
```

```ts
interface HasID {
  id: number;
}

const processUser = <T extends HasID>(user: T): T => {
  return user;
};

console.log(processUser({ id: 1, name: "Jake" })); // 문제없습니다.
console.log(processUser({ name: "Jake" })); // 에러가 발생합니다.
```

이렇게 대입하면서 자료형 상속을 만들 수 있습니다.

```ts
interface HasID {
  id: number;
}

const getUsersProperty = <T extends HasID, K extends keyof T>(
  users: T[],
  key: K
): T[K][] => {
  return users.map((user) => user[key]);
};

const usersArray = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Gwenborough",
      zipcode: "92998-3874",
      geo: {
        lat: "-37.3159",
        lng: "81.1496",
      },
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: {
      name: "Romaguera-Crona",
      catchPhrase: "Multi-layered client-server neural-net",
      bs: "harness real-time e-markets",
    },
  },
  {
    id: 2,
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv",
    address: {
      street: "Victor Plains",
      suite: "Suite 879",
      city: "Wisokyburgh",
      zipcode: "90566-7771",
      geo: {
        lat: "-43.9509",
        lng: "-34.4618",
      },
    },
    phone: "010-692-6593 x09125",
    website: "anastasia.net",
    company: {
      name: "Deckow-Crist",
      catchPhrase: "Proactive didactic contingency",
      bs: "synergize scalable supply-chains",
    },
  },
];

console.log(getUsersProperty(usersArray, "email"));
console.log(getUsersProperty(usersArray, "username"));
```

이렇게 통신하면서 검증할 수 있습니다.

객체형에 key에 지정할 자료형을 상속으로 보냅니다.

복잡한 예시입니다.

클래스를 위한 제네릭입니다.

```ts
class StateObject<T> {
  private data: T;

  constructor(value: T) {
    this.data = value;
  }

  get state(): T {
    return this.data;
  }

  set state(value: T) {
    this.data = value;
  }
}

const store = new StateObject("John");
console.log(store.state);
store.state = "Dave";
//store.state = 12

const myState = new StateObject<(string | number | boolean)[]>([15]);
myState.state = ["Dave", 42, true];
console.log(myState.state);
```

인스턴스를 생성하면서 제네릭에서 구체적인 자료형을 지정할 수 있습니다.

# Typescript Utility Types | TS Beginners Tutorial

유틸리티 타입을 공부합니다.

유틸타입입니다. 흔한 타입변환을 다룰 때 유용합니다.

```ts
// Partial

interface Assignment {
  studentId: string;
  title: string;
  grade: number;
  verified?: boolean;
}

const updateAssignment = (
  assign: Assignment,
  propsToUpdate: Partial<Assignment>
): Assignment => {
  return { ...assign, ...propsToUpdate };
};

// 인스턴스 생성
const assign1: Assignment = {
  studentId: "compsci123",
  title: "Final Project",
  grade: 0,
};

console.log(updateAssignment(assign1, { grade: 95 }));
const assignGraded: Assignment = const assignGraded: Assignment = updateAssignment(assign1, { grade: 95 });
```

Partial 유틸형을 활용한 경우입니다.

Required and Readonly 유틸타입입니다.

모든 자료형을 확인하고 다른 자료형 설정을 강제합니다.

```ts
// Required and Readonly

// Required
const recordAssignment = (assign: Required<Assignment>) => {
  return assign;
};

// Readonly: 업데이트를 막습니다.
const assignVerified: Readonly<Assignment> = {
  ...assignGraded,
  varified: true,
};
```

```ts
// Required
const recordAssignment = (assign: Required<Assignment>) => {
  return assign;
};

// Readonly: 업데이트를 막습니다.
const assignVerified: Readonly<Assignment> = {
  ...assignGraded,
  varified: true,
};
// assignVerified가 없으면 에러가 발생합니다.
// recordAssignment(assignGraded);

recordAssignment({ ...assignGraded, varified: true });
```

가장 인기많은 유틸타입은 Record입니다.

```ts
// Record
const hexColorMap: Record<string, string> = {
  red: "FF0000",
  green: "00FF00",
  blue: "0000FF",
};

type Students = "Sara" | "Kelly";
type LetterGrades = "A" | "B" | "C" | "D" | "U";

const finalGrades: Record<Students, LetterGrades> = {
  Sara: "B",
  Kelly: "U",
};

interface Grades {
  assign1: number;
  assign2: number;
}

const gradeData: Record<Students, Grades> = {
  Sara: { assign1: 85, assign2: 93 },
  Kelly: { assign1: 76, assign2: 15 },
};
```

객체형 자료형에 키랑 값의 자료형을 지정할 수 있습니다. 인터페이스랑 타입키워드로 모두 사용할 수 있습니다.

```ts
interface Assignment {
  studentId: string;
  title: string;
  grade: number;
  verified?: boolean;
}

// Pick and Omit

type AssignResult = Pick<Assignment, "studentId" | "grade">;

const score: AssignResult = {
  studentId: "k123",
  grade: 85,
};

type AssignPreview = Omit<Assignment, "grade" | "verified">;

const preview: AssignPreview = {
  studentId: "k123",
  title: "Final Project",
};
```

pick은 키와 값을 넣도록 추가설정하고 Omit은 역으로 제외하고 모두 지정하도록 합니다.

문자열에 넣고 빼도록 할 수 있습니다.

```ts
// Exclude and Extract

type adjustedGrade = Exclude<LetterGrades, "U">;

type highGrades = Extract<LetterGrades, "A" | "B">;
```

null과 undefined 지정 불가 설정도 가능합니다.

```ts
// Nonnullable

type AllPossibleGrades = "Dave" | "John" | null | undefined;
type NamesOnly = NonNullable<AllPossibleGrades>;
```

ReturnType입니다.

```ts
// ReturnType

//type newAssign = { title: string, points: number }

const createNewAssign = (title: string, points: number) => {
  return { title, points };
};

type NewAssign = ReturnType<typeof createNewAssign>;

const tsAssign: NewAssign = createNewAssign("Utility Types", 100);
console.log(tsAssign);
```

함수가 반환하는 자료형으로 자동업데이트하도록 하는 기능입니다.

타입을 파생시키는 방법입니다.

```ts
// ReturnType

//type newAssign = { title: string, points: number }

const createNewAssign = (title: string, points: number) => {
  return { title, points };
};

type NewAssign = ReturnType<typeof createNewAssign>;

const tsAssign: NewAssign = createNewAssign("Utility Types", 100);
console.log(tsAssign);

// Parameters

type AssignParams = Parameters<typeof createNewAssign>;

const assignArgs: AssignParams = ["Generics", 100];

const tsAssign2: NewAssign = createNewAssign(...assignArgs);
console.log(tsAssign2);
```

역으로 대입하는 부분을 지정하는 방법입니다.

프로미스에 활용할 수 있는 유틸타입입니다.

```ts
// Awaited - helps us with the ReturnType of a Promise

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

const fetchUsers = async (): Promise<User[]> => {
  const data = await fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => {
      return res.json();
    })
    .catch((err) => {
      if (err instanceof Error) console.log(err.message);
    });
  return data;
};

type FetchUsersReturnType = Awaited<ReturnType<typeof fetchUsers>>;

fetchUsers().then((users) => console.log(users));
```
