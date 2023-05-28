---
sidebar_position: 7
tags: ["closures", "core"]
draft: true
---

# 클로저

## 클로저의 개요

클로저는 처음 공부하는 사람에게는 어렵기 때문에 <모든 자바스크립트 deep dive>를 활용합니다.

클로저의 정의입니다. 영어입니다. 개발자는 영어를 잘해야 합니다.

> A closure is the combination of a function and the lexical environment within which that function was declared( `클로저` 는 함수와 그 `함수가 선언된 렉시컬 환경` 과의 조합입니다.) - MDN

사실 정의 그 자체로 유용하지 않습니다. 이 장을 마치고 다시보면 상당히 직관적인 정의로 음미할 수 있게 됩니다.

함수가 선언된 렉시컬 환경입니다.

```js
const x = 1;
function outerFunc() {
  const x = 10;
  function innerFunc() {
    console.log(x); // 10
  }
  innerFunc();
}
outerFunc();
```

중첩함수가 `x`식별자를 접근하고 `10`을 출력합니다. `x`는 `10`을 반환하는 이유는 함수가 정의된 실행 컨텍스트의 렉시컬 환경에 있는 식별자부터 접근하기 때문입니다. 만약 없었다면 아우터를 접근해서 `1`을 출력했을 것입니다. 당연히 스코프 체이닝 현상을 알아야 합니다.

```js
const x = 1;
// innerFunc()에서는 outerFunc()의 x에 접근할 수 없다.
// Lexical Scope를 따르는 프로그래밍 언어이기 때문이다.
function outerFunc() {
  const x = 10;
  innerFunc();
}
function innerFunc() {
  console.log(x); // 1
}
outerFunc();
```

함수가 정의된 렉시컬 환경을 외부 함수 전역 스코프에 되어있습니다. 직관적으로 1을 출력해야 할 것처럼 생겼습니다.

선언한 위치만 확인하면 되기 때문입니다.

## 렉시컬 스코프 및 클로저와 렉시컬 환경

렉시컬 스코프를 따르는 언어는 자바스크립트입니다. 함수를 어디서 실행하는 것과 무관합니다. 정의한 위치가 상위 스코프를 결정합니다.

스코프에 대한 참조는 함수 정의가 평가되는 시점에 함수가 정의된 환경에 의해서 결정됩니다.

클러조아 렉시컬 환경입니다. 외부 함수보단 중첩함수가 더 오래 유지되는 경우 중첩 함수의 이미 생명 주기가 종료한 외부 함수 내부의 식별자들을 접근할 수 있습니다. 이 중첩함수가 바로 클로저입니다.

```js
const x = 1;
// 1
function outer() {
  const x = 10;
  const inner = function () {
    console.log(x);
  };
  return inner;
}
const innerFunc = outer();
innerFunc();
// [친절한 설명이요]
// outer 함수를 호출하면 중첩 함수 inner를 반환한다.
// 그리고 outer 함수의 실행 컨텍스트는 실행 컨텍스트 스탭에서 팝되어 제거된다(역할을 다 했으니깐)
// inner 함수는 런타임에 평가된다.
// inner함수가 innerFunc에 전달되었는데, 이는 outer 함수의 렉시컬환경을 참조하고 있다.
// 즉, outer 함수의 실행 컨텍스트는 실행 컨텍스트 스택에서 제거되지만 outer 함수의 렉시컬 환경까지 소멸하는 것은 아니다.
```

`outer`함수를 호출하고 `innerFunc`에 반환값을 할당합니다. `inner` 식별자에 익명함수가 할당됩니다. innerFunc 식별자에 중첩함수를 반환값으로 할당하면서 `outer`는 콜 스택에서 `pop` 되었습니다. 하지만 클로저인 `inner`함수는 함수로 실행할 수 있습니다. `outer` 함수의 렉시컬 환경은 남겨지고 `inner`함수가 접근할 수 있습니다.

이런게 가능 한 이유는 자바스크립트의 가비지 컬렉터가 동작하는 원리 때문입니다. 간단하게 가비지 컬렉터는 참조카운터가 0이면 알게모르게 삭제하는 방식으로 동작합니다.

`inner` 함수가 선언된 렉시컬 환경은 참조하고 있기 때문에 수거 대상이 되지 않습니다.

## 클로저와 아닌 것을 구분

```js
function foo() {
  const x = 1;
  const y = 2;
  // 일반적으로 클로저라고 하지 않는다.
  function bar() {
    const z = 3;
    //상위 스코프의 식별자를 참조하지 않는다.
    console.log(z);
  }
  return bar;
}
const bar = foo();
bar();
```

실행이 종료된 함수의 렉시컬 환경에 접근하는 함수라고 한다면 당연히 실행이 종료된 상위 스코프를 접근하고 있지 않기 때문에 클로저가 아닙니다.

```js
function foo() {
  const x = 1;
  // bar 함수는 클로저였지만 곧바로 소멸한다.
  // 외부로 나가서 따로 호출되는게 아니라, 선언 후 바로 실행 + 소멸
  // 이러한 함수는 일반적으로 클로저라고 하지 않는다.
  function bar() {
    debugger;
    //상위 스코프의 식별자를 참조한다.
    console.log(x);
  }
  bar();
}
foo();
```

하지만 정의된 렉시컬 환경밖에서 호출되지 않습니다. 이런 이유로 클로저가 아닙니다. 정의된 렉시컬 환경 밖으로 내보네기 위해 `return`을 활용해서 유출 시킵니다.

```js
function foo() {
  const x = 1;
  const y = 2;
  // 클로저
  // 중첩 함수 bar는 외부 함수보다 더 오래 유지되며 상위 스코프의 식별자를 참조한다.
  function bar() {
    debugger;
    console.log(x);
  }
  return bar;
}
const bar = foo();
bar();
```

bar 식별자에 foo의 반환값을 할당하는 것으로 의도한 함수를 유출시키고 실행이 종료하고 정의된 렉시컬 환경의 `x` 식별자를 접근하고 활용하기 때문에 클로저입니다.

## 클로저의 활용

클로저를 사용하는 이유는 JS의 상당히 강력한 기능입니다. 클로저는 주로 상태를 안전하고 변경하고 유지하기 위해 사용합니다. 의도하지 않은 상태 변경을 차단하기 위해 사용합니다. 특정함수에게만 변경을 허용합니다.

클로저라는 단어는 무엇의 개방과 폐쇄를 의미합니다. 무엇을 폐쇄하는가? 상태를 지킵니다.

```js
// 함수가 호출될 때마다 호출된 횟수를 누적하여 출력하는 카운터
// 카운트 상태 변수
let num = 0;
// 카운트 상태 변경 함수
const increase = function () {
  // 카운트 상태를 1만큼 증가시킨다.
  return ++num;
};
console.log(increase());
// num = 100; // 치명적인 단점이 있다.
console.log(increase());
console.log(increase());
// 보완해야 할 사항
// (1) 카운트 상태(num 변수의 값)는 increase 함수가 호출되기 전까지 변경되지 않고 유지돼야 한다.
// (2) 이를 위해 카운트 상태(num 변수의 값)는 increase 함수만이
```

`num` 식별자를 덮을 가능성이 있는 코드입니다. 물론 변수명을 잘 작명하면 문제가 없지만 저는 창의력이 없기 때문에 클로저 사용하겠습니다.

클로저를 사용하면 함수 호출 전까지 변경되지 않고 유지할 수 있습니다. 상태를 제어하는 방법을 단일화 할 수 있습니다.

```js
// 카운트 상태 변경 함수
const increase = function () {
  let num = 0;
  // 카운트 상태를 1만큼 증가시킨다.
  return function () {
    return ++num;
  };
};
let countUp = increase();
console.log(countUp()); // 1
console.log(countUp()); // 2
console.log(countUp()); // 3
```

조근 더 우아하게 식별자에 한번 할당하지 않는 방법이 있습니다.

```js
// 카운트 상태 변경 함수
const increase = (function () {
  // 카운트 상태 변수
  let num = 0;
  // 클로저
  return function () {
    return ++num;
  };
})(); // 렉시컬 환경을 제공하는 함수에 괄호()으로 감쌉니다. 그리고 뒤에 괄호()를 붙입니다.
console.log(increase());
console.log(increase());
console.log(increase());
```

렉시컬 환경을 제공하는 함수는 괄호(`()`)으로 감쌉니다. 그리고 뒤에 괄호(`()`)를 붙입니다. 이렇게 하면 렉시컬 환경을 제공하는 함수를 콜스택에서 push하고 pop합니다. IIFE(Immediately Invoked Function Expression) 패턴을 사용하는 것으로 반환 `increase` 식별자는 반환값으로 익명함수를 받고 실행 컨텍스트에서 종료된 렉시컬 환경에 존재하는 데이터들을 접근하고 외부 변수명 덮어쓰기로 부터 보호할 수 있습니다. 대부분의 경우 보호가 가능합니다. 코드 이상하게 짜는 사람으로부터는 보호할 수 없습니다.

[IIFE - MDN](https://developer.mozilla.org/ko/docs/Glossary/IIFE)

IIFE는 정의랑 동시에 실행하는 패턴입니다.

클로저는 상태가 의도지 않게 변경되지 않도록 정보를 은닉한다는 점이 중요합니다. 특정함수에게만 상태변경을 허용하는 방식입니다. 온전히 유출된 클로저 함수로만 변경을 제어할 수 있습니다.

```js
// 클로저 카운트 기능 확장(값 감소 기능 추가)
const counter = (function () {
  //카운트 상태 변수
  let num = 0;
  // 클로저인 메서드(increase, decrease)를 갖는 객체를 반환한다.
  // property는 public -> 은닉되지 않는다.
  return {
    increase() {
      return ++num;
    },
    decrease() {
      return num > 0 ? --num : 0;
    },
  };
})();
console.log(counter.increase()); // 1
console.log(counter.increase()); // 2
console.log(counter.decrease()); // 1
console.log(counter.decrease()); // 0
// 8번째 줄에서 { 가 있는데, 별도의 스코프를 생성하진 않나요?
```

이번에는 클로저가 객체의 메서드처럼 되어 원하는 방식으로 제어할 수 있게 됩니다.

즉시 실행함수가 객체메서드가 할당됩니다. 메서드도 지금 정의된 렉시컬 환경의 식별자 정보에 접근해서 동작할 수 있습니다. 정의한 객체메서드도 활용할 수 있습니다.

8번째 줄에 객체 할당의 객체가 스코프를 형성하지 않는가? 의문이 생길 수 있습니다. 사실 생기면 기초문법도 부족한 것입니다. 반복문, 조건문 같은 블록 스코프도 아니고 객체가 스코프를 생성한다는 착각은 다소 심각할 수 있습니다.

메서드를 정의한 함수 스코프토 개별 함수 스코프 생성이라는 것을 보여주는 예시입니다. 클로저에 공유하는 데이터와 함수를 다양하게 응용할 수 있다는 것을 보여주기 위한 예시입니다.

함수형 프로그래밍의 특징입니다.

1. 외부 상태 변경이나 가변 데이터를 피하고, 불변성을 지향
2. 외부 상태의 변경이 쉽게 일어날 경우, 프로그램 오류의 근본적 원인이 될 수 있음
3. 클로저를 활용하여, 예상치 못한 외부 영향 오류를 피하고 프로그램의 안정성을 높일 수 있음
4. 함수형 프로그래밍에서 클로저를 활용하는 예시

지금까지 개념은 자바스크립트 입문자가 초급자가 되기 위한 개념들이었습니다. 위 개념은 초급자가 중급자로 성장하기 위한 초석이 될 개념입니다.

고차함수는 중요합니다. 함수를 인자로 받아 함수를 반환하는 함수가 고차함수입니다.

```js
// 함수를 인수로 전달받고 함수를 반환하는 고차 함수
// 이 함수는 카운트 상태를 유지하기 위한 자유 변수 counter를 기억하는 클로저를 반환한다.

/**
 * makeCounter는 고차함수입니다.
 * @param {Function} aux
 * @returns {Function}
 */
let makeCounter = (function (aux) {
  // 카운트 상태를 유지하기 위한 자유 변수
  let counter = 0;
  // 클로저를 반환
  return function () {
    //인수로 전달받은 보조 함수에 상태 변경을 위임한다.
    counter = aux(counter);
    return counter;
  };
})();
// 보조 함수
function increase(n) {
  return ++n;
}
// 보조 함수
function decrease(n) {
  return --n;
}
// 함수로 함수를 생성
// makeCounter함수는 보조 함수를 인수로 전달받아 함수를 반환한다.
const increaser = makeCounter(increase);
console.log(increaser()); // 1
console.log(increaser()); // 2
// increaser 함수와는 별개의 독립된 렉시컬 환경을 갖기 떄문에 카운터 상태가 연동되지 않는다.
const decreaser = makeCounter(decrease);
console.log(decreaser()); // -1
console.log(decreaser()); // -2
// 그럼 어떻게 해야 하나요?
// -> key : makeCounter 함수를 1번만 호출할 것
```

이코드에서는 삼각한 문제가 있습니다. `increaser`, `decreaser` 각각 식별자에 할당된 클로저입니다. 그래서 각각의 클로저는 정보 공유를 못하고 있습니다.

이렇게 각각 정의하면 각각 독립적인 렉시컬 환경을 갖습니다. 각각 독립적인 렉시컬 환경이라는 것은 초깃값과 변형을 할 때 각각 독립적이라는 것입니다.

상태를 공유하게 만드는 전략은 상당히 단순합니다.

```js
/**
 * makeCounter는 즉시 실행 함수입니다.
 * @returns {Function}
 */
let makeCounter = (function () {
  // 카운트 상태를 유지하기 위한 자유 변수
  let counter = 0;
  /**
   * 고차함수 클로저입니다.
   * @param {Function}
   * @returns {Function}
   */
  return function (aux) {
    //인수로 전달받은 보조 함수에 상태 변경을 위임한다.
    counter = aux(counter);
    return counter;
  };
})();
// 보조 함수
function increase(n) {
  return ++n;
}
// 보조 함수
function decrease(n) {
  return --n;
}

// 함수를 대입하고 대입한 함수로 값을 처리하면서 클로저 속의 값을 접근하고 변형합니다.
console.log(makeCounter(increase));
console.log(makeCounter(increase));
console.log(makeCounter(decrease));
console.log(makeCounter(decrease));
```

즉시 실행함수의 반환값으로 클로저함수를 바로 할당하고 클로저 함수가 고차함수로서 데이터 변형할 함수를 인자로 받아서 처리하면 됩니다. 이렇게 되면 클로저를 할당받은 식별자의 렉시컬 환경을 공유할 수 있습니다.

## 캡슐화와 정보 은닉

클로저의 마지막은 개념적입니다.

클로저라는 말은 개방과 폐쇄를 의미합니다.

영단어에 다른 좋은 단어도 있습니다. 객체지향 프로그래밍 개념 중에 캡슐화가 존재합니다. 자바스크립트의 캡슐화는 객체의 상태 값인 프로퍼티와 프로퍼티를 참조하고 조작하는 메서드를 하나로 묶는 것입니다.

객체의 특정 프로퍼티나 메서드를 감출 목적으로 사용하기 때문에 정보를 은닉할 수 있습니다. 정보를 보호하고 다른 객체 간의 의존성(결합도)을 낮출 수 있습니다. 상호 의존성이 낮으면 프로그램의 유연성이 높아집니다.

자바스크립트는 특별한 조치를 취하지 않으면 외부 공개가 됩니다.

```js
function Person(name, age) {
  this.name = name; //public
  let _age = age; //private
  //인스턴스 메서드
  //따라서, Person 객체가 생성될 때 마다 중복 생성됨 : 해결방법 -> prototype
  this.sayHi = function () {
    console.log(`Hi! My name is ${this.name}. I am ${_age}.`);
  };
}
const me = new Person("Choi", 33);
me.sayHi(); // Hi!, My name is Choi. I am 33.
console.log(me.name); // Choi
console.log(me._age); // undefined
const you = new Person("Lee", 30);
you.sayHi(); // Hi! My name is Lee. I am 30.
console.log(you.name); // Lee
console.log(you.age); // undefined
```

생성한 인스턴스의 특정 정보를 이렇게 은닉할 수 있습니다. `this`값으로 `age`가 바인딩이 안 되어 있기 때문에 `undefined`을 반환합니다.

자주 발생하는 실수들입니다.

```js
var funcs = [];
for (var i = 0; i < 3; i++) {
  funcs[i] = function () {
    return i;
  };
}
for (var j = 0; j < funcs.length; j++) {
  console.log(funcs[j]());
}
// for 문의 변수 선언문에서 var 키워드로 선언한 i 변수는 "블록 레벨 스코프"가 아닌
// "함수레벨 스코프"이다.
// expectation
// 0, 1, 2
// result
// 3, 3, 3
```

우리는 위와 같은 코드를 보면 `0`, `1`, `2`를 예상합니다. 하지만 모두 `3`을 출력합니다. 이유는 다시보면 상당히 또 간단히 알아챌 수 있습니다. `var i = 0;`로 `i`가 함수 스코프에 해당한다는 것입니다. `i`는 `for문` 블록스코프 외부에서 조건문을 순회하고 3으로 업데이트 됩니다. `funcs[i]`의 함수는 `i` 식별자의 값인 `3`을 반환합니다.

이런 것은 면접 질문입니다.

[Closures Explained in 100 Seconds // Tricky JavaScript Interview Prep - Fireship](https://www.youtube.com/watch?v=vKJpN5FAeF4)

```js
var funcs = [];
for (var i = 0; i < 3; i++) {
  funcs[i] = (function (id) {
    return function () {
      return id;
    };
  })(i);
}
for (var j = 0; j < funcs.length; j++) {
  console.log(funcs[j]());
}
```

이렇게 클로저로 정상동작하게 만들 수 있지만 굳이 더 편한 방법을 두고 이렇게 하지맙시다.

```js
var funcs = [];
for (let i = 0; i < 3; i++) {
  funcs[i] = function () {
    return i;
  };
}
for (let i = 0; i < funcs.length; i++) {
  console.log(funcs[i]()); // 0 1 2
}
```

언어가 제공하는 let을 잘 사용하도록 합시다. 그리고 순회는 최대한 고차함수 활용합시다.
