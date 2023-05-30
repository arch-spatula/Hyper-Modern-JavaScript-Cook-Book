---
sidebar_position: 5
tags: ["this", "core", "this binding"]
draft: true
---

# THIS

대부분의 this는 객체지향 언어에서 클래스와 인스턴스를 말합니다. 하지만 자바스크립트는 조금 이상하게 this를 어디에서난 접근하고 사용할수 있습니다. 상황별로 달라지고 왜 달라지는지 알아야 합니다. 이번왜 달라지고 어떻게 추적하는지 배웁니다.

## 상황에 따라 달라지는 this

this는 실행 컨텍스트가 생성될 때 결정하는 것이 this binding입니다. 실행 컨텍스가 생성될 때 즉 함수가 호출될 때 this를 어디에 붙일지 결정합니다.

전역공간에서 this는 실행환경에 따라 다르지만 전역객체를 가르킵니다. 브라우저는 window, node.js에서는 global을 가리킵니다.

메서드로 호출할 때 그 내부의 this입니다.

메서드는 객체.함수명이 메서드입니다. 함수와 메서드의 차이는 독립성입니다. 함수는 독립적으로 호출하고 사용합니다. 매서드는 호출하는 객체에 의존해야 합니다. 그 객체와 관련되 동작을 수행합니다.

함수랑 메서드에 따라 this가 달라집니다.

```js
var func = function (x) {
  console.log(this, x);
};

// 함수로 호출한 경우입니다.
func(1); // Global { ... } 1

var obj = {
  method: func,
};

// 메서드로 호출하는 경우입니다.
obj.method(2); // { method: f } 2
```

메서드는 점(`.`) 혹은 대괄호(`[]`)로 호출합니다. 이렇게 하면 this 바인딩이 처리됩니다.

특별한 경우입니다. 객체 속의 객체의 메서드는 호출의 주체에 따라 바인딩이 됩니다.

```js
var obj = {
  methodA: function () {
    console.log(this);
  },
  inner: {
    methodB: function () {
      console.log(this);
    },
  },
};
obj.methodA(); // this === obj
obj["methodA"](); // this === obj
obj.inner.methodB(); // this === obj.inner
obj.inner["methodB"](); // this === obj.inner
obj["inner"].methodB(); // this === obj.inner
obj["inner"]["methodB"](); // this === obj.inner
```

함수로 호출할 때는 항상 독립적입니다. 함수는 호출 주체가 없습니다. 그래서 this 지정되지 않으면 전역 객체에 지정됩니다. 실행할 당시에 this가 지정하려면 주체가 명확해야 합니다.

함수로 독립적으로 호출할 때 this는 전역 객체입니다.

메서드 내부의 함수의 this는 조금 이상합니다.

```js
var obj1 = {
  outer: function () {
    console.log(this); // obj1 === this
    var innerFunc = function () {
      console.log(this); //
    };
    // 함수로 호출한 경우입니다. 메서드 내부에서도 호출 주체가 없으면 전역객체에 this가 할당됩니다.
    innerFunc();
    var obj2 = {
      innerMethod: innerFunc,
    };
    obj2.innerMethod();
  },
};
obj1.outer();
```

이런 부분이 다른 언어랑 상당히 많이 다릅니다. 언어 디자인이 잘 되어 있으면 가장 가까운 객체를 바로 찾을 텐데 자바스크립트는 조금 다르게 동작합니다.

중요한 것은 해당함수를 호출하는 구문앞이 중요합니다. 즉 호출의 주체가 어떤 객체가 존재하는가가 문제입니다.

```js
var obj1 = {
  outer: function () {
    console.log(this);
    var innerFunc1 = function () {
      console.log(this);
    };
    innerFunc1();
    // 메서드 내부의 함수로 호출해도 객체 this binding하는 방법
    var self = this;
    var innerFunc2 = function () {
      console.log(self);
    };
    innerFunc2();
  },
};
obj1.outer();
```

`self`는 키워드는 아닙니다. `self`는 식별자를 통해 우외할 수 있습니다. 간단하고 실제로 많이 사용하는 방법입니다.

다른 방법은 화살표함수를 사용하는 것입니다.

```js
var obj1 = {
  outer: function () {
    console.log(this); // { outer: [Function: outer] }
    var innerFunc1 = () => {
      console.log(this); // { outer: [Function: outer] }
    };
    innerFunc1();
    var innerFunc2 = () => {
      console.log(this); // { outer: [Function: outer] }
    };
    innerFunc2();
  },
};
obj1.outer();
```

화살표함수는 this 바인딩 과정 자체가 없습니다.

콜백함수 미리보기입니다. 콜백함수에서 this 바인딩 처리를 어떻게 하는지 알아보겠습니다.

```js
setTimeout(function () {
  console.log(this); // global
}, 300);

[1, 2, 3, 4, 5].forEach(function (x) {
  console.log(this, x); // global
});

document.body.innerHTML += '<button id="a">클릭</button>';
document.body.querySelector("#a").addEventListener("click", function (e) {
  console.log(this, e); // button
});
```

`setTimeout`은 함수라서 this는 전역객체를 바라본다고 생각할 수 있습니다. 하지만 틀렸습니다. 그런 원리면 `forEach` 메서드는 `array`를 바라봐야 합니다. 둘다 똑 같이 전역객체를 바라봅니다. 중요한 것은 콜백함수도 함수고 콜백함수의 주체가 없다는 것입니다.

하지만 addEventListener도 콜백함수로 호출했지만 this 바인딩이 되어 있습니다. 콜백함수 호출시 this를 상속하기 때문에 가능합니다.

생성자함수입니다. 영어로 Constructor라고 부릅니다.

```js
// 생성자함수
var Cat = function (name, age) {
  this.bark = "야옹";
  this.name = name;
  this.age = age;
};

var choco = new Cat("초코", 7); //this : choco
var nabi = new Cat("나비", 5); //this : nabi
```

생성자함수 내부에서 this는 인스턴스를 의미합니다. 인스턴스를 동적으로 바라보게 만들기 위해 존재합니다.

## 명시적 this 바인딩

콜백함수의 this를 다시 다루겠습니다.

```js
setTimeout(function () {
  console.log(this); // global
}, 300);

[1, 2, 3, 4, 5].forEach(function (x) {
  console.log(this, x); // global
});

document.body.innerHTML += '<button id="a">클릭</button>';
document.body.querySelector("#a").addEventListener("click", function (e) {
  console.log(this, e); // button
});
```

`addEventListener`는 this를 상속한다고 합니다. 하지만 `forEach`와 `setTimeout`은 this가 유실됩니다. 콜백함수로 호출하면서 그때그때 다릅니다. 하지만 `addEventListener`의 콜백 함수는 아닙니다.

콜백함수로 유실되는 경우 아닌 경우가 존재합니다.

this를 명시적으로 바인딩하는 전략이 있습니다. `call`, `apply`, `bind` 3가지입니다.

```js
var func = function (a, b, c) {
  console.log(this, a, b, c);
};
func(1, 2, 3); // global { ... } 1 2 3
func.call({ x: 1 }, 4, 5, 6); // { x: 1 } 4 5 6
```

`call`의 첫번째 인자는 바인딩할 임의의 객체를 넣습니다.

```js
var obj = {
  a: 1,
  method: function (x, y) {
    console.log(this.a, x, y);
  },
};
// this.a로 1을 출력하게 됩니다.
obj.method(2, 3); // 1 2 3
// this.a = 1에서 4로 업데이트했습니다.
obj.method.call({ a: 4 }, 5, 6); // 4 5 6
```

`apply`메서드는 `call` 메서드랑 비슷합니다.

두번째 인자가 배열이라는 차이만 존재합니다.

```js
var func = function (a, b, c) {
  console.log(this, a, b, c);
};
func.apply({ x: 1 }, [4, 5, 6]); // { x: 1 } 4 5 6
var obj = {
  a: 1,
  method: function (x, y) {
    console.log(this.a, x, y);
  },
};
obj.method.apply({ a: 4 }, [5, 6]); // 4 5 6
```

call과 apply로 많은 이점을 확보할 수 있습니다. 유사배열객체를 얻을 수 있습니다. 배열은 아니지만 배열과 유사한 객체를 얻을 수 있습니다.

유사배열의 조건이 있습니다.

1. length가 반드시 존재해야 합니다.
2. index가 0부터 시작해서 1씩 증가합니다.

`slice()` 함수는 새로운 배열을 생성합니다. 시작부터 종료인덱스까지 값을 복사하고 반환합니다. 복사라는 점이 중요합니다.

```js
var obj = {
  0: "a",
  1: "b",
  2: "c",
  length: 3,
};
Array.prototype.push.call(obj, "d");
console.log(obj); // { 0: 'a', 1: 'b', 2: 'c', 3: 'd', length: 4 }
var arr = Array.prototype.slice.call(obj);
console.log(arr); // [ 'a', 'b', 'c', 'd' ]
```

`Array.prototype`으로 배열 메서드를 접근하는 것도 가능합니다. push 메서드를 사용하고 `call`메서드로 바인딩할 객체를 지정하고 추가한 문법입니다.

`slice` 메서드를 `call`메서드로 접근하고 사용할 수 있습니다. 원래 유사배열은 DOM으로 접근하고 배열메서드가 존재하지 않지만 이렇게 변환 과정없이 배열메서드를 적용할 수 있습니다.

```js
function a() {
  console.log("a 메서드 호출");
  console.log(arguments); // [Arguments] {}
  var argv = Array.prototype.slice.call(arguments);
  console.log("a 메서드 종료");
}

a();
```

```js
function a() {
  console.log("a 메서드 호출");
  console.log(arguments); // [Arguments] { '0': 1, '1': 2, '2': 3 }
  var argv = Array.prototype.slice.call(arguments);
  console.log("a 메서드 종료");
}

a(1, 2, 3);
```

인자는 함수에 대입하는 값입니다.

함수 속에서 `arguments`객체처럼 활용할수 있습니다.

```js
function a() {
  console.log("a 메서드 호출");
  console.log(arguments); // [Arguments] { '0': 1, '1': 2, '2': 3 }
  // 유사배열에서 slice로 복사하면서 배열로 자료형을 변환했습니다.
  var argv = Array.prototype.slice.call(arguments);
  argv.forEach((elem) => {
    console.log(elem); // 1, 2, 3
  });
}

a(1, 2, 3);
```

`arguments`는 객체이지만 배열로 변환하여 사용할 수 있습니다.

node.js 환경에서는 `document` 객체를 접근할 수 없습니다.

```js
document.body.innerHTML = `
<div>a</div>
<div>b</div>
<div>c</div>
`;

let nodeList = document.querySelectorAll(`div`);
console.log(nodeList);
```

`nodeList`는 유사배열객체입니다. `array`로 변환할 수 있습니다.

```js
document.body.innerHTML = `
<div>a</div>
<div>b</div>
<div>c</div>
`;

let nodeList = document.querySelectorAll(`div`);
let nodeArr = Array.prototype.slice.call(nodeList);
nodeArr.forEach((elem) => {
  console.log(elem);
});
```

NodeList라는 객체도 따로 존재합니다.

[NodeList - MDN](https://developer.mozilla.org/ko/docs/Web/API/NodeList)

```js
function Person(name, gender) {
  this.name = name;
  this.gender = gender;
}
function Student(name, gender, school) {
  // console.log(this); //Student {}
  Person.call(this, name, gender);
  this.school = school;
}
function Employee(name, gender, company) {
  // console.log(this); //Employee {}
  Person.apply(this, [name, gender]);
  this.company = company;
}
var wj = new Student("원장", "male", "서울대");
var tj = new Employee("투장", "female", "삼성");
```

생성자 함수는 `call`, `apply`로 상속을 만들 수 있습니다.

여기서 `Student`, `Employee`의 `Person` 생성자 함수에 붙어있는 메서드의 인자 `this`는 생성자함수를 말하는 것이 아니라 생성할 인스턴스를 가리킵니다.

최대값, 최솟값 구하기

```js
//비효율
var numbers = [10, 20, 3, 16, 45];
var max = (min = numbers[0]);
numbers.forEach(function (number) {
  if (number > max) {
    max = number;
  }
  if (number < min) {
    min = number;
  }
});
console.log(max, min);
```

```js
var numbers = [10, 20, 3, 16, 45];
var max = Math.max.apply(null, numbers);
var min = Math.min.apply(null, numbers);
console.log(max, min);
```

더 효율적으로 처리할 수 있습니다. 여기서 의의는 apply로 일반적으로 접근하기 어려운 메서드를 쉽게 접근해서 활용할 수 있다는 것입니다. 자바스크립트 자유도가 제공하는 장점입니다. 할당할 것이 없으면 `null`로 넣고 사용하면 됩니다.

하지만 ES6 문법을 활용하도록 합니다. 언어가 제공하는 기능을 잘 활용하는 게 더 좋습니다.

```js
//Spread Operation(ES6)
const numbers = [10, 20, 3, 16, 45];
const max = Math.max(...numbers);
const min = Math.min(...numbers);
console.log(max min);
```

`bind` 메서드는 `call`과 비슷하지만 즉시 호출하지 않습니다. `this` 및 인수들을 바탕으로 새로운 함수를 반환하는 메서드입니다.

```js
var func = function (a, b, c, d) {
  console.log(this, a, b, c, d);
};
func(1, 2, 3, 4); // 전역객체
var bindFunc1 = func.bind({ x: 1 });
bindFunc1(5, 6, 7, 8); // { x: 1 } 5 6 7 8
var bindFunc2 = func.bind({ x: 1 }, 4, 5);
bindFunc2(6, 7); // { x: 1 } 4 5 6 7
bindFunc2(8, 9); // { x: 1 } 4 5 8 9
```

`func`의 `this`는 전역객체를 바라봅니다. 하지만 `bind` 메서드에 `{ x: 1 }` 객체를 대입한 식별자 `bindFunc1`는 함수이고 바라보고 있는 `this`는 `{ x: 1}`입니다.

`bind` 메서드의 장점은 `name`이라는 속성값에 `bound`가 접두어로 붙어있습니다.

```js
var func = function (a, b, c, d) {
  console.log(this, a, b, c, d);
};
var bindFunc = func.bind({ x: 1 }, 4, 5);
console.log(func.name); // func
console.log(bindFunc.name); // bound func
```

참고로 함수의 프로퍼티에는 기본적으로 `name` 프로퍼티가 존재합니다. 하지만 `bind`메서드를 사용하면 함수의 `name` 프로퍼티가 업데이트됩니다.

기존의 `var self = this`를 사용했습니다. 앞으로는 더욱더 세련된 `call`, `apply`, `bind`를 사용하면 됩니다.

```js
var obj = {
  outer: function () {
    console.log(this); // { outer: [Function: outer] }
    var innerFunc = function () {
      console.log(this); // { outer: [Function: outer] }
    }.bind(this);
    innerFunc();
  },
};
obj.outer();
```

콜백함수로 전달할 때는 `this`가 유실됩니다 하지만 `bind`를 활용하면 보존하고 원하는 방식으로 변경도 가능합니다.

```js
var obj = {
  logThis: function () {
    console.log(this);
  },
  logThisLater1: function () {
    setTimeout(this.logThis, 500); // 전역객체. 콜백함수를 함수로 할당하고 this를 유실하게 된 경우
  },
  logThisLater2: function () {
    setTimeout(this.logThis.bind(this), 1000); // 올바른 방법
  },
};
obj.logThisLater1();
obj.logThisLater2();
```

```js
var obj = {
  outer: function () {
    console.log(this); // { outer: [Function: outer] }
    var innerFunc = () => {
      console.log(this); // { outer: [Function: outer] }
    };
    innerFunc();
  },
};
obj.outer();
```

화살표함수를 사용하면 this 바인딩하는 과정을 생략하기 때문에 사실 제일 많이 사용하고 있는 방법입니다. 하지만 자바스크립트 입문자는 동작원리를 모르고 사용합니다.

콜백함수의 this입니다.

콜백함수를 인자로 받는 메서드들 중 일부는 `this`를 지정할 객체를 인자로 받는 경우가 있습니다. 고차함수에 많이 볼 수 있습니다.

```js
// forEach 예시
var report = {
  sum: 0,
  count: 0,
  add: function () {
    var args = Array.prototype.slice.call(arguments);
    args.forEach(function (entry) {
      this.sum += entry;
      ++this.count;
    }, this);
  },
  average: function () {
    return this.sum / this.count;
  },
};
report.add(60, 85, 95);
console.log(report.sum, report.count, report.average());
// 콜백 함수와 함께 thisArg를 인자로 받는 메서드
// forEach, map, filter, some, every, find, findIndex, flatMap, from, forEach(Set, Map)
```

`forEach`의 두번째 인자로 `this`를 대입했습니다. 그래서 `report`객체를 바라보게 됩니다.
