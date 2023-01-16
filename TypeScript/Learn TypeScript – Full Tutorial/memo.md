https://www.youtube.com/watch?v=30LWjhZzg50

# 타입스크립트 소개

타입스크립트는 자바스크립트의 수퍼셋이기는 하지만 자료형을 정적으로 만들어줄 뿐입니다. 에디터가 에러를 피드백해줘도 동작할지도 모릅니다. 잘 이해해야 할 것은 절대적인 방법은 아닙니다.

타입스크립트는 조금더 정교한 방법으로 작성하기 요청하는 것에 불과합니다.

코드가 엄청나게 길지 않으면 타입스크립트를 작성할 필요가 없습니다. 또 any 자료형 지정도 하지 않습니다. 디버깅은 괜찮습니다.

타입스크립트는 더욱더 강력하게 사용할 수 있습니다.

타입스크립트는 타입 안정성이 전부입니다.

```js
2 + "2";
```

정상적인 언어에서는 에러가 발생해야 합니다. 하지만 22가 나온다는 유명한 예지입니다. 자료형이 일관적이면 이런 문제가 발생하지 않을 것입니다. 타입스크립트는 이런 일관성을 유지하게 해줍니다.

타입 스크립트가 아닌것들입니다. 타입스크립트를 대하는 관점입니다.

타입스크립트의 기능부터 봅시다. 타입스크립트는 정적이게 자료형을 검증해줍니다. 많은 언어는 이런 기능을 지원해줍니다. IDE가 자주 검증합니다. 하지만 자바스크립트는 아닙니다. 런타임에 확인하게 됩니다. 정적이게 미리 분석해주고 바로 에러 피드백을 주면 훨씬더 생산적입니다.

타입스크립트는 코드를 분석하고 잠재적인 에러만 막아주는 정도입니다. 이것이 타입스크립트의 전부입니다.

오직이 힌트만 제공하지만 에러 피드백을 제공하지만 정상적으로 동작할 수 있습니다. 타입스크립트는 더 많은 코드를 작성하게 됩니다. 하지만 가치가 있습니다.

타입스크립트는 ts확장자입니다. tsx는 jsx에 대응하는 확장자에 불과합니다. ts는 자바스크립트는 컴파일됩니다.

타입스크립트는 개발도구에 불과합니다. 결국 프로덕션 코드는 순수 자바스크립트가 될 것입니다. 더 품질 좋은 코드를 작성할 수 있게 해주는 것에 불과합니다. 에러, 버그 발생 가능성만 줄여줄 뿐입니다. 규모가 큰 어플리케이션에서 엄청나게 생산성을 높여줄 수 있습니다.

하지만 새로운 특수해보이는 키워드들이 존재하기는 합니다. 인터페이스, 타입처럼 존재합니다.

```ts
let a = 3;
let b = "3";

console.log(a + b); // "33"
```

타입스크립트가 에러를 지금 잡아주지는 않습니다. 하지만 막는 방법은 나중에 배울 것입니다.

# How to install TypeScript

강의는 필기보단 작성과 설명이 더 효과적은 학습 방법입니다.

타입스크립트를 설치하는 방법입니다.

전역 설치하는 방법입니다. 타입스크립트 개념을 이해하기 좋습니다.

다른 방법은 실제 프로젝트를 위한 세팅하는 방법입니다.

https://www.typescriptlang.org/

```sh
npm install -g typescript
```

전역 설치하는 방법입니다.

```sh
npm install typescript --save-dve
```

프로젝트를 위한 설치방법입니다.

혹시 모르니까 Node 버전을 확인합니다.

```sh
node -v
```

```sh
npx tsc
```

타입스크립트 CLI를 사용할 수 있습니다.

tsx는 리액트 컴포넌트를 jsx로 컴파일할 때 사용하는 확장자입니다.

```ts
// intro.ts
let user = { name: "Jake", age: 20 };

console.log("Jake");
console.log(user.name);
```

프로덕션으로 나갈 수 없습니다.

```sh
tsc intro.ts
```

이렇게 컴파일하고 자바스크립트 파일을 열면 에러를 돌려주는 것을 알 수 있습니다.

```ts
let user = { name: "Jake", age: 20 }; // 에러

console.log("Jake");
console.log(user.email); // 에러
```

물론 동작하기는 합니다. 하지만 컴파일을 막을 수 있습니다.

타입스크립트는 더 많이 작성하지만 훨씬더 많은 안정성을 얻을 수 있습니다.

# Your first intro to TypeScript Docs

궁극적으로 줄 수 있는 지식은 공식 문서를 읽는 법입니다.

타입스크립트에서 제공하는 자료형은 상당히 다양합니다. Number, String, Boolean은 기본적입니다. Null, Undefined, Void도 존재합니다. Object, Array, Tuples도 존재합니다.

하지만 경계할 키워드가 있습니다. any입니다. 잠시 디버깅해야 할 때말고 사용하지 않습니다. 또 Never, unknown이랑 비슷한 자료형이 존재합니다. 타입스크립트의 특수 자료형입니다.

원시형부터 참조형부터 다양한 자료형을 알려줍니다.

https://www.typescriptlang.org/docs/handbook/2/everyday-types.html

타입스크립트를 사용해야할 수 있는 상황들입니다. 함수가 2개의 인자를 받으면 자료형에 따라 예외처리를 해줄 필요가 없습니다.

단체로 개발을 하고 있을 때 타입스크립트를 사용하면 형변환으로 생기는 에러를 많이 막을 수 있습니다.

문법은 단순합니다.

```ts
let 변수명: 타입 = 변수값;
```

모든 타입스크립트의 타입은 소문자표기입니다.

```ts
let greetings: string = "Jake"; // 블록 스코프 에러가 발생한다고 피드백을 줍니다.

console.log(greetings);
```

```ts
let greetings: string = "Jake";

console.log(greetings);

export {};
```

잠시 에러를 없앨 수 있습니다.

타입스크립트에 타입을 정하는 행위가 중요합니다. 식별자에 다른 자료형을 할당하려고 하면 에러를 발생시킵니다. 또 개발 중에서는 확실하게 자료형이 결정되어 있어서 메서드, 프로퍼티같은 자동완성도 활용할 수 있습니다.

또 오타도 어느정도 찾아줍니다. 비슷한 함수이름을 찾아 추천해줍니다.

# Number, boolean, and type inference

간단한 자료형을 다룹니다. 타입 인프런스(추론)도 배웁니다.

타입스크립트에서 정수형, 부동소수를 면접에서 함정질문으로 자주 질문합니다. 답은 못합니다. 그냥 숫자형만 사용할 수 있다고 답합니다. 자료형 이름도 number입니다. 단수형입니다. 정수형(int), 부동소수(float)를 지원하면 numbers라고 복수형 속에 2가지 자료형이 속해있다고 했을 것입니다.

```js
let greetings: string = "Jake";

console.log(greetings.toLowerCase);

// number
let userID: number = 333444555;

// boolean
let isLoggedIn: boolean = false;

export {};
```

사실 이것은 안 좋은 패턴입니다. 이미 알고 있는 것에 타입을 명시하고 있습니다.

명시하지 않아도 이미 타입스크립트가 특정 자료형을 지정하고 있는지 스스로 알아냅니다. 이것을 보고 타입 인프런스라고 합니다. 즉 자료형을 스스로 추론하는 것입니다.

사용해야할 때와 말아야 할 때의 패턴은 나중에 다룹니다.

정의와 함께 할당하면 괜찮다고 하는 패턴입니다.

# Don't use ANY

ANY는 타입스크립트에서 타입스크립트 문법을 회피하기 위해 사용하는 키워드입니다. 의외로 꽤 많은 개발자들이 작성합니다.

하지만 공식문서에 사용을 권장하지 않습니다.

```ts
// any
let hero;

function getHero() {
  return "thor";
}

hero = getHero();
```

이런 상황에서는 문자열을 명시하는 것이 좋습니다.

`any`는 명시할 때 사용합니다. 특수한 자료형이 아닙니다. 그저 타입스크립트가 타입 검사를 무시해달라고 요청하는 것에 불과합니다.

https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#any

코드에서 사용하지 않기를 권장합니다.

# Do you really know functions

타입스크립트에서 함수를 사용할 때 항상 염두해야 할 것들입니다.

```ts
function addTwo(num) {
  return num + 2;
}

addTwo(5);
```

이렇게 해도 문제는 없습니다. 하지만 주의할 점들이 있습니다. 먼저 반환하는 값의 인프런스는 any입니다. 무엇을 반환할지 정의가 안 된 것입니다.

```ts
function addTwo(num) {
  num.toString();
  return num + 2;
}

addTwo(5);
```

나중에 이런 실수가 발생할 수 있습니다.

컴파일러가 느린 문제가 없다면 대부분의 경우 자료형과 관련된 메서드는 자동완성이 되어야 합니다.

```ts
// 숫자형을 받고 숫자형을 반환합니다.
function addTwo(num: number): number {
  return num + 2;
}

// 문자열을 받고 문자열을 반환합니다.
function getUpper(val: string): string {
  return val.toUpperCase();
}

function singUpUser(name: string, email: string, isPaid: boolean) {
  return;
}

// 타임주석을 추가하고 다음에 기본값을 설정하면 선택적으로 입력할 수 있는 매개변수를 작성할 수 있습니다.
let loginUser = (name: string, email: string, isPaid: boolean = false) => {};

addTwo(5); // 숫자형이 아니면 에러가 발생합니다.
getUpper("a"); // 문자열이 아니면 에러가 발생합니다.
singUpUser("Jake", "Jake.com", true); // 모두다 입력하기 전까지 에러가 발생합니다.

loginUser("Jake", "not Jake");

export {};
```

# A better way to write function
