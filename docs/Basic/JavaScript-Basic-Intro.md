---
sidebar_position: 1
---

# JavaScript 기초

일단 JavaScript는 Java와 아무런 관련이 없습니다. 이거랑 관련된 전설은 아껴두겠습니다.

각설하고 자바스크립트는 시작하시 쉽고 잘하기 어려운 언어입니다. 다른 언어는 반대의 경우가 더 많습니다. 또 시작도 잘하기도 쉬우면서 생태계도 좋은 언어도 있습니다.

자바스크립트를 공부하기 시작하기 쉬운 이유가 있습니다. 처음에는 많은 자료형을 활용하지 않습니다. 어려운 이유는 나중에 알게 될 것입니다.

숫자형, 문자열, 배열, 객체, 반복문, 조건문, 함수 이 7개만 이해하면 브라우저는 당신의 계산기가 될 것입니다. 그것도 꽤 괜찮은 계산기가 될 것입니다. 우리는 여기서 시작할 것입니다.

간단한 실험을 해보고 싶다면 그리고 하기를 권장하는데 `cmd` + `option` + `i`로 브라우저 콘솔을 확성화 해보시기 바랍니다.

## 변수

변수는 수학적 의미와 프로그래밍적 의미가 있습니다. 프로그래밍적 의미에서 변수는 데이터를 저장하다는 의미를 갖습니다. 수학은 변화하는 수를 의미합니다. 사실 수학의 이 변화하는 수를 컴퓨터상 대수적으로 표현하기 위해 저장하는 것이기도 합니다. 간단한 문제입니다.

$$
x + 2 = 5
$$

프로그래밍적으로 위 식을 어떻게 표현할 수 있는가? 일단 암산으로는 x가 3이라는 것을 바로 알 수 있습니다.

```js
let x = 3;
```

하지만 위처럼 표현한다면 이렇게 될 것입니다.

```js
let x = 3; // 3을 x에 저장
x = x + 2; // x에서 3을 참조하고 2를 더합니다. 더한 새로운 값을 x에 할당합니다.
```

일반적으로 프로그래밍에서는 좌변에 변수를 두고 우변에 있는 데이터를 할당한다고 말합니다. 즉 x라는 변수에 3을 할당하고 할당된 변수에 2를 더하라는 의미를 갖습니다.

자바스크립트는 변수 키워드 3가지를 지원합니다. 변수를 만들 때는 변수 키워드를 활용해야 합니다.

```js
var a = 1;
let b = 2;
const c = 3;
```

`var`, `let`, `const` 3가지 키워드 중 갱신이 필요하면 `let` 갱신을 막고 싶으면 `const` 위주로 활용할 것을 권장합니다. `var`는 최대한 사용 안 하는 것이 좋습니다.

## 숫자형

숫자는 우리에게 익숙한 숫자만 생각하면 됩니다. 사칙연산은 당연히 활용할 수 있습니다.

만약 다른 언어를 공부해봤다면 자바스크립트는 정수와 소수를 구분하거나 비트단위로 구분하는 것이 없어서 이상할 수 있습니다. 처음 언어를 공부하는 사람은 이말을 무시해주시기 바랍니다.

자바스크립트의 숫자는 일단은 숫자형만 존재합니다. 나중에는 BigInt를 다룰 것이지만 실무자도 특수한 도메인이 아닌이상 별로 다룰일이 없습니다.

```js
console.log(2 + 2); // 4
console.log(2 - 2); // 0
console.log(2 * 2); // 4
console.log(2 / 2); // 1
console.log(2 % 2); // 0
console.log(2 ** 2); // 4
```

## 문자열

```js
"???";
"???";
"''";
"\n";
const num = 123;
`문자열 ${num}`;
```

문자열은 사람이 읽고 쓰는 문자를 그대로 생각해조 괜찮기는 합니다. 큰따옴표(`""`), 작은따옴표(`''`), 백틱(`) 3가지 중 1개를 선택하고 감싸면 됩니다.

줄바꿈을 할 때는 `\` 백슬래쉬를 앞에 붙인 `\n`으로 붙여주면 구현됩니다.

백틱을 활용하면 `${변수명}`으로 문자열을 동적으로 만들 수 있습니다. 또 줄바꿈을 지원합니다.

```js
console.log(
  `
???
???
???
`
);
```

## 배열

배열은 순서가 중요한 데이터를 담을 때 사용할 것을 권장합니다. 또 한번에 변형을 가할 때 좋지만 나중에 그 이유를 알려드리겠습니다.

```js
const a = [];
```

이렇게 하면 비어있는 배열을 만드는 것입니다.

```js
const a = [1, 2, 3, "a", "b", "c", []];
```

이렇게 배열에 다양한 자료를 넣을 수 있습니다. 또 배열 속에 배열을 넣는 것도 가능합니다.

```js
const a = [1, 2, 3];
console.log(a[0]); // 1
```

프로그래밍에서는 숫자를 `0`부터 셉니다. 자바스크립트도 예외는 아닙니다.

```js
const a = [1, 2, 3];
a[1] = 4;
console.log(a[1]); // 4
```

주의할 점은 배열은 const로 변수를 선언해도 배열 속 원소를 갱신할 수 있습니다.

```js
const a = [];
a = {}; // TypeError: Assignment to constant variable.
```

하지만 이렇게 배열 자체를 갱신하는 것은 불가능합니다.

## 객체

순서는 별로 안 중요하고 이름과 값으로 저장하고 싶을 때 활용합니다.

```js
const a = {};
```

이렇게 하면 비어있는 객체입니다.

```js
const a = { name: "Jake", job: "The Dog" };
console.log(a.name);
```

객체는 키와 값으로 저장합니다. 여기서는 `name`이 키에 해당하고 `"Jake"`가 값인 문자열에 속합니다. 키를 통해 값을 접근하거나 쓰기도 가능합니다.

```js
const a = {};
a = []; // TypeError: Assignment to constant variable.
```

주의할 점은 배열과 동일하게 const로 선언해도 내용만 갱신할 수 있습니다.

## 조건문

조건문은 프로그램에 어떤 조건에 따라 실행 혹은 무시하게 만들 때 활용합니다.

```js
let a = 1;
if (a === 1) {
  console.log(1);
} else if (a === 2) {
  console.log(2);
} else {
  console.log(3);
}
```

`if` 뒤 괄호 속에 조건이 참이면 해당하는 코드 블럭이 실행됩니다. 거짓이면 무시합니다.

참거짓을 비교로 얻을 수 있습니다. 논리연산으로도 얻을 수 있습니다.

### 비교연산

```js
console.log(2 > 2); // false
console.log(20 > 2); // true
console.log(1 >= 2); //true
console.log(2 === 2); // true
```

### 논리연산

```js
// 논리합
console.log(true || true); // true
console.log(true || false); // true
console.log(false || true); // true
console.log(false || false); // false
// 논리곱
console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false); // false
// 부정
console.log(!true); // false
console.log(!false); // true
```

논리합, 논리곱, 부정으로 조건문에 적용해볼 수 있습니다.

## 반복문

특정 코드블럭의 실행을 원하는 만큼 반복시킬 때 많이 활용합니다.

for문은 보통 어떤 숫자부터 어떤 숫자까지 혹은 몇 회처럼 작성합니다.

```js
for (let i = 0; i < 10; i++) {
  console.log(i); // 0 1 2 3 4 5 6 7 8 9
}
```

여기는 0부터 10미만까지 반복합니다.

while문은 조건이 참인동안 계속 실행합니다.

```js
let a = 1;
let sum = 1;
while (a < 10) {
  a = a + 1;
  sum = sum + a;
}
console.log(sum); // 55
```

이렇게 1부터 10까지 더하는 기능을 만들 수 있습니다.

## 함수

함수는 실행할 코드 자체를 변수에 담아둔 것처럼 생각해도 좋습니다. 변수를 정의하는 것처럼 실행할 논리를 정의하고 실행하고 싶을 때 변수처럼 호출합니다.

함수는 입력과 출력을 갖게 만들 수 있습니다. 입력 값도 반환값도 무조건 갖을 필요는 없습니다.

```js
function addOne(a) {
  return a + 1;
}
console.log(addOne(2)); // 3
```

논리를 묶어놓고 원할 때 실행시키는 점도 중요합니다.

```js
let a = 0;
function addOne() {
  a = a + 1;
}
for (let i = 0; i < 10; i++) {
  addOne();
}
console.log(a); // 10
```

함수는 함수 밖에 있는 변수도 참조할 수 있습니다. 권장하지는 않습니다. 하지만 가능합니다. 그리고 실행하고 싶은 부분을 반복문에 호출해서 여러번 실행합니다.

함수에서 알아둬야 할점은 함수 내부에서는 외부를 참조할 수 있지만 외부에서 내부를 참조할 수는 없습니다.

---

# 여기까지

위 개념들을 조합해서 프로그래밍을 됩니다.

여기는 개발자가 아닌 사람을 위한 기초입니다. 직장인이 자바스크립트를 공부하고 싶은 상황이라면 여기서 더 깊게 가는 것을 권장하지는 않습니다. 구글 앱 스크립트(google apps script) 정도 다룰 정도의 지식입니다. 더 필요하면 계속 간단한 수준에서 학습하면 됩니다.

[구글 시트](https://developers.google.com/apps-script/guides/sheets?hl=ko)에 적극적으로 활용하고 일상 업무를 편하게 보기 바랍니다.
