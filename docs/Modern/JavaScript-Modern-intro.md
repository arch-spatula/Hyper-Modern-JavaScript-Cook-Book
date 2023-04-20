---
sidebar_position: 1
---

# JavaScript 의 모던한 부분 시작하기

나름 좋은 부분들도 있습니다. ~~제가 자바스크립트에 정든 것 같습니다.~~

`var` 키워드는 사용하지 않을 수 있습니다.

## let

갱신이 필요할 때 사용합니다. 하지만 자바스크립트 경험이 많은 프로그래머는 무지성 `let` 말고 무지성 `const` 키워드로 변수를 정의합니다. 그리고 문제가 생기고 갱신이 필요한 것을 확인했을 때 지성이 생겨서 `const`를 `let`으로 바꿉니다. 물론 컨디션이 좋고 코드 자각상태도 좋고 설계를 잘 했으면 그렇지 않지만 그냥 `const`부터 쓰면 생각이 편합니다.

let이 동작하는 방식은 식별자가 참조하고 있는 주소를 갱신할 수 있게 해줍니다.

```js
function createClosureFunction() {
  let count = 0;
  return function () {
    console.log(`Count is ${count}`);
    count++;
    if (count === 5) {
      count = null;
    }
  };
}

let closure = createClosureFunction();

// 1. 클로저 함수를 실행합니다.
closure(); // Count is 0

// 2. 클로저 함수가 GC의 대상이 되도록 null로 변수를 할당합니다.
closure = null;
```

이렇게 closure 식별자에 함수가 아닌 null로 갱신해서 GC의 수거 대상이 되게 만들 때 사용합니다. 팩토리 함수 패턴에 클로저 초기화인 예제입니다. 고급 기법 비슷해보이지만 사실 기초인데 딱히 해볼 일이 거의 없었습니다.

## const

보통은 읽기 전용으로 많이 활용합니다. 하지만 참조형 자료형은 `object.freeze()`와 함께 사용할 것을 권장합니다.

```js
const obj = { name: "Jake", job: "The Dog" };
Object.freeze(obj);
obj.name = "fin";
console.log(obj); // { name: "Jake", job: "The Dog" }
```

## 화살표 함수

```js
console.log([1, 2, 3].map((num) => num ** 2)); // [1, 4, 9]
```

일단 화살표 함수는 사실 람다함수 즉 익명함수입니다. 하지만 이 익명함수를 변수 식별자에 값으로 할당해 둔 것입니다.

```js
foo("a"); // caught ReferenceError: foo is not defined

const foo = (a) => {
  console.log(a);
};
```

```js
bar("a"); // a

function bar(a) {
  console.log(a);
}
```

`function` 키워드는 호이스팅 되지만 화살표함수 식별자에 값으로 할당하고 `let`과 `const`로 선언한 변수는 호이스팅 현상이 발생하지 않습니다. 함수를 정의한 뒤에 호출이 가능해지도록 작성할 수 있습니다. 호출하면 참조할 식별자가 있는 상태로 호출하기 때문에 현대적인 프로그랭 언어처럼 작성할 수 있게 됩니다.

조금 알아 둬야 할 점은 Top level 즉 모듈 스코프에 있는 함수들은 function 키워드를 의도적으로 많이 활용합니다.

## class

class는 문법적 설탕으로 보이지만 class 사실은 아닙니다.<sup>[1](#1)</sup>

```js
function ES5(name) {
  this.name = name;
  return name + " es5";
}

console.log(ES5("ES5")); // ES5 es5
console.log(ES5.prototype.constructor("ES5")); // ES5 es5
```

```js
class ES6 {
  constructor(name) {
    this.name = name;
    return name + " es6";
  }
}

console.log(ES6("ES6")); // Uncaught TypeError
console.log(ES6.prototype.constructor("ES6")); // Uncaught TypeError
```

```js
// ES5
var es5 = new ES5();
function ES5() {
  this.a = 1;
}
console.log(es5); // ES5 {a: 1}
```

```js
// ES6
const es6 = new ES6();
class ES6 {
  constructor() {
    this.a = 1;
  }
}
console.log(es6); // Uncaught ReferenceError
```

문법적 설탕 이외 부분을 다루려고 했지만 사실 그냥 class를 활용하지 굳이 생성자 함수를 사용할 일은 레거시 말고 볼일이 거의 없습니다.

---

참고문헌.

<a name="1">1</a> :

- [ES6 Class는 단지 prototype 상속의 문법설탕일 뿐인가?](https://roy-jung.github.io/161007_is-class-only-a-syntactic-sugar/)

- [[Javascript 미세팁] "function"은 아예 쓰지 마세요](https://www.youtube.com/watch?v=LPEwb5plEoU)
