---
sidebar_position: 2
---

# Console API

```js
console.log("hello, world!");
```

자바스크립트로 프로그래밍을 처음하면 이 명령부터 봤을 것입니다. 터미널에 출력하고 보는 기능입니다.

여기서 의문이 들 수 있습니다. `console`은 무엇인가? 단순하게 생각하면 객체입니다. 그리고 우리는 `log`라는 정적 메서드를 사용하고 있습니다.

그렇다면 `log` 이외 정적 메서드가 있는가?

넹.[^1]

지금 여기서는 단순한 `log`보다 더 우아한 출력 방법을 배울 것입니다.

## time()

```js
function addUpTo(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}
```

```js
function addUpTo(n) {
  return (n * (n + 1)) / 2;
}
```

```js
const time1 = performance.now();
funcName(1000000000);
const time2 = performance.now();
console.log(`Time Elapsed: ${(time2 - time1) / 1000} seconds.`);
```

옛날 강의에서 이렇게 성능을 측정해볼 수 있었습니다. 조금더 우아한 문법을 활용해볼 수 있습니다.[^2]

```js
function addUpTo1(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}

function addUpTo2(n) {
  return (n * (n + 1)) / 2;
}

console.time("addUpTo1");
addUpTo1(1000000000);
console.timeEnd("addUpTo1");

console.time("addUpTo2");
addUpTo2(1000000000);
console.timeEnd("addUpTo2");

// addUpTo1: 913.000244140625 ms
// addUpTo2: 0.027099609375 ms
```

소수점 맞추기는 안 맞지만 더 깔끔한 문법입니다. 중간 로깅도 가능합니다.

```js
function addUpTo(n) {
  let total = 0;
  console.time("addUpTo");
  for (let i = 1; i <= n; i++) {
    total += i;
    console.timeLog("addUpTo");
  }
  return total;
  console.timeEnd("addUpTo");
}

addUpTo(5);
```

이렇게 하면 중간 로깅이 가능합니다. 반복문 사이에 끼워 넣어서 성능 측정을 해볼 수 있습니다.

```js
function addUpTo(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}

const time1 = performance.now();
addUpTo(1000000000);
const time2 = performance.now();
console.log(`Time Elapsed: ${(time2 - time1) / 1000} seconds.`);

console.time("addUpTo");
addUpTo(1000000000);
console.timeEnd("addUpTo");

// 위에 주석을 걸고 아래를 풀어보세요

// console.time("addUpTo");
// addUpTo(1000000000);
// console.timeEnd("addUpTo");

// const time1 = performance.now();
// addUpTo(1000000000);
// const time2 = performance.now();
// console.log(`Time Elapsed: ${(time2 - time1) / 1000} seconds.`);
```

이렇게 직접비교해보기 바랍니다. 놀랍게도 순서가 중요합니다. 성능차이는 별로 없어 보입니다.

## table()

## dir()

## count()

## group()

들여쓰기를 표현할 수 있습니다.

---

## 참고문헌

[^1]: [Console API - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Console_API)

<!--  -->

[^2]: [【한글자막】 JavaScript 알고리즘 & 자료구조 마스터클래스 - 유데미](https://www.udemy.com/course/best-javascript-data-structures/)
