---
sidebar_position: 5
tags: ["callback function", "core"]
draft: true
---

# 콜백함수

## 콜백함수 및 제어권

콜백함수는 이미 많이 사용하고 있습니다. `setTimeout`, `forEach`처럼 함수 자체를 인자로 넣는 함수가 콜백함수입니다.

콜백함수의 특징을 배우다면 콜백지옥을 경험하게 됩니다. 그리고 이 콜백지옥을 어떻게 처리하고 또 비동기처리도 함께 학습하게 됩니다.

콜백함수를 대입한다는 것은 실행할 주체가 필요하다는 것입니다. 콜백함수를 필요에 따라 적절한 시점에 호출의 주체가 실행합니다. 이런 측면에서 제어권을 넘겨준다는 개념이 등장합니다.

콜백함수를 호출하는 함수는 적절한 시기를 결정하고 적절한 시기에 해당하면 제어권을 받은 콜백함수를 실행하게 됩니다.

콜백함수는 2가지 영단어로 조합되어 있습니다. call부르다 back 돌아오다입니다. 콜백함수는 제어권을 위임한 함수입니다. 콜백함수를 위임받은 코드는 자체적인 내부로직으로 실행을 결정합니다.

```js
var count = 0;
var cbFunc = function () {
  console.log(count);
  if (++count > 4) clearInterval(timer);
};
//timer : 콜백 내부에서 사용할 수 있는 '어떤 게 돌고있는지' 알려주는 id값
var timer = setInterval(cbFunc, 300);

// 실행 결과
// 0 (0.3sec)
// 1 (0.6sec)
// 2 (0.9sec)
// 3 (1.2sec)
// 4 (1.5sec)
```

위에서는 익명함수의 제어권을 받은 것은 `setInterval`입니다.

| code                      | 호출 주체   | 제어권      |
| ------------------------- | ----------- | ----------- |
| cbFunc();                 | 사용자      | 사용자      |
| setInterval(cbFunc, 300); | setInterval | setInterval |

map함수의 예시입니다. `callback` 함수 내의 원소를 순회하고 변형하고 반환합니다.

```js
var newArray = [10, 20, 30].map((elem, idx) => {
  console.log(elem, idx);
  return elem + 5;
});

console.log(newArray);

/*
10 0
20 1
30 2
[ 15, 25, 35 ]
*/
```

자리를 바꾸겠습니다.

```js
var newArray = [10, 20, 30].map((idx, elem) => {
  console.log(elem, idx);
  return elem + 5;
});

console.log(newArray);

/*
0 10
1 20
2 30
[ 5, 6, 7 ]
*/
```

자바스크립트는 함수인자의 순서가 중요합니다.

제어권을 넘길 함수의 규칙에 맞게 콜백함수를 작성해야 합니다.

## 콜백함수는 함수다

콜백함수가 this를 잃어버리는 경우도 언급했습니다. 콜백함수는 기본적으로 함수이기 때문에 전역객체를 참조합니다.

this는 함수로서 호출과 메서드로서 호출 2가지에 따라 바인딩이 달라집니다.

제어권을 넘겨 받을 코드에서 콜백함수에 별도의 this가 될 대상을 지정하는 경우는 그 대상을 참조합니다.

map을 직접 구현이 가능합니다.

```js
// Array.prototype.map을 직접 구현해봤어요!
// map 배열 메서드 덮어쓰기
Array.prototype.map = function (callback, thisArg) {
  var mappedArr = [];
  for (var i = 0; i < this.length; i++) {
    var mappedValue = callback.call(thisArg || window, this[i], i, this);
    mappedArr[i] = mappedValue;
  }
  return mappedArr;
};
// 이제 this에 다른 값이 담기는 이유를 알 수 있겠죠?
// [1, 2, 3].map(function() { ~~~~~ }, this);
```

`callback` 매개변수는 콜백함수입니다. `call` 메서드는 첫번째 인자로 `thisArg` 혹은 전역객체를 바인딩해달라고 요청하는 것입니다. 그리고 `this`는 `map`을 덮어쓸 `Array`입니다.

`call` 메서드를 통해서 `mappedValue`를 순회하면서 재정의하고 있습니다. `callback`함수 이후 call이 메서드로 붙여서 콜백함수 적용될 수 있도록 합니다. `mappedArr`는 콜백함수를 원소마다 대입해 얻은 새로운 값을 저장하고 `map`의 반환값이 되게 만듭니다.

콜백함수를 받는 함수에서 this를 별도로 지정할 때만 this가 바라볼 대상을 설정할 수 있습니다. 이런 이유로 this 지정하는 방법과 제어권을 아는 것이 중요합니다.

```js
//setTimeout은 내부에서 콜백 함수를 호출할 때, call 메서드의 첫 번째 인자에
//전역객체를 넘겨요
//따라서 콜백 함수 내부에서의 this가 전역객체를 가리켜요

setTimeout(function () {
  console.log(this);
}, 300); // Window { ... }

//forEach도 마찬가지로, 콜백 뒷 부분에 this를 명시해주지 않으면 전역객체를 넘겨요!
const a = [1, 2, 3, 4, 5][(1, 2, 3, 4, 5)].forEach(function (x) {
  console.log(this); // Window { ... }
});

//addEventListener는 내부에서 콜백 함수를 호출할 때, call 메서드의 첫 번째
//인자에 addEventListener메서드의 this를 그대로 넘겨주도록 정의돼 있어요(상속)
document.body.innerHTML += '<button id="a">클릭</button';
document.body.querySelector("#a").addEventListener("click", function (e) {
  console.log(this, e);
});
```

`addEventListener`는 메서드의 this를 그대로 넘겨주도록 정의되어 있습니다. 이렇게 되면서 상속이 발생합니다.

```js
const a = [1, 2, 3, 4, 5];
a.forEach(function (x) {
  console.log(this); // [1, 2, 3, 4, 5] a.length번 출력
}, a);
```

이렇게 this를 지정할 수 있습니다.

콜백함수도 함수입니다. 콜백함수로 어떤 객체의 메서드를 전달하더라도 그 메서드는 함수가 아닌 함수로 호출하게 되는 것입니다.

```js
var obj = {
  vals: [1, 2, 3],
  logValues: function (v, i) {
    console.log(this, v, i);
  },
};
//method로써 호출
obj.logValues(1, 2);
//callback => obj를 this로 하는 메서드를 그대로 전달한게 아니에요
//단지, obj.logValues가 가리키는 함수만 전달한거에요(obj 객체와는 연관이 없습니다)
[4, 5, 6].forEach(obj.logValues);
// 메서드 속에 콜백함수로 함수로만 대입하게 되면서 this가 유실된 것입니다.
// 그래서 전역객체를 출력하게 됩니다.
```

## 콜백 함수 내부의 this에 다른 값 바인딩하기

콜백함수도 함수이기 때문에 this가 현재 문맥과 다르게 this가 유실될 수 있습니다. 객체를 바라보게 만드는 다양한 시도들이 존재합니다.

전통적인 방법은 self 식별자를 활용하는 전략입니다.

```js
var obj1 = {
  name: "obj1",
  func: function () {
    var self = this; //이 부분!
    return function () {
      console.log(self.name);
    };
  },
};
var callback = obj1.func();
setTimeout(callback, 1000); // obj1
//실제로는 this를 사용하는게 아니네!
//번거롭다 번거로워!!!!
```

이렇게 번거롭게 하지 않는 방법도 존재합니다.

```js
var obj1 = {
  name: "obj1",
  func: function () {
    console.log(obj1.name);
  },
};
setTimeout(obj1.func, 1000);
//위 예시보다는 훨씬 간결
//하지만 this를 쓴게 아니에요, 결과만을 위한 코딩 ㅠㅠ
//this를 이용해서 다양한걸 할 수는 없군요
```

이것은 하드코딩과 동일합니다. 하드코딩하고 혼나지말고 전통적인 방법으로 부장님을 기쁘게 해드립시다. 참고로 부장님은 머나먼 미래에 레거시코드를 보게되는 본인입니다.

```js
var obj1 = {
  name: "obj1",
  // obj1.func()의 반환값은 function () {console.log(self.name)}입니다.
  func: function () {
    var self = this; //이 부분!
    return function () {
      console.log(self.name);
    };
  },
};
// ---------------------------------
var obj2 = {
  name: "obj2",
  // obj1.func 메서드의 반환값인 function () {console.log(self.name)} 함수로 대입해서 메서드가 되게 합니다.
  func: obj1.func,
};
var callback2 = obj2.func();
// callback2 식별자의 값인 함수 obj2.func()을 대입합니다.
setTimeout(callback2, 1500); // obj2
var obj3 = { name: "obj3" };
var callback3 = obj1.func.call(obj3);
setTimeout(callback3, 2000); // obj3
//위 방법은 번거롭긴 해도 this를 우회적으로나마 활용하여 원하는 객체를 바라보게 할 수 있었어요!
//c의 예제에서는 그게 안되네요. 재활용의 여지가 없어요.
```

바인드 메서드를 활용하는 전략도 있습니다.

```js
var obj1 = {
  name: "obj1",
  func: function () {
    console.log(this.name);
  },
};
//함수 잡채를 obj1에 바인딩
setTimeout(obj1.func.bind(obj1), 1000);
var obj2 = { name: "obj2" };
//함수 잡채를 obj2에 바인딩
setTimeout(obj1.func.bind(obj2), 1500);
```

문법적으로 가장 명료합니다. `obj1`의 메서드 `func`의 메서드로 `bind`를 사용하고 `bind` 메서드로 this 바인딩할 객체를 지정합니다.

## 콜백지옥

콜백지옥은 콜백함수를 익명함수로 연속해서 들여쓰기를 하면서 엄청나게 가독성을 해치는 코드베이스에서 일할 때의 경험을 말합니다.

콜백함수 속에서 계속 호출하면서 발생하는 문제입니다.

콜백지옥을 이해하기 위해서는 동기와 비동기 프로그래밍을 공부해야 합니다. 동기란 synchronous로 현재 실행하는 코드가 끝나야 다음 코드를 실행할 수 있는 방식입니다.

비동기는 이와 반대로 실행완료와 무관하게 다음 코드로 넘어가서 실행하는 것입니다.

비동기 함수로 setTimeout은 예시로 자주드는 대표적인 함수입니다.

하지만 주로 서버통신할 때 비동기처리합니다.

동기처리는 실행할 때 서로 완료의 의존성이 있습니다. 하지만 비동기는 무관하게 실해하기 때문에 총 대기시간이 더 짧습니다.

콜백지옥인 코드베이스에서 일하기 어려운 이유는 위아래로 계속 오가면서 읽어야 하기 때문입니다.

```js
setTimeout(
  function (name) {
    var coffeeList = name;
    console.log(coffeeList);
    setTimeout(
      function (name) {
        coffeeList += ", " + name;
        console.log(coffeeList);
        setTimeout(
          function (name) {
            coffeeList += ", " + name;
            console.log(coffeeList);
            setTimeout(
              function (name) {
                coffeeList += ", " + name;
                console.log(coffeeList);
              },
              500,
              "카페라떼"
            );
          },
          500,
          "카페모카"
        );
      },
      500,
      "아메리카노"
    );
  },
  500,
  "에스프레소"
);
```

이런 코드베이스는 지옥입니다.

```js
var coffeeList = "";
var addEspresso = function (name) {
  coffeeList = name;
  console.log(coffeeList);
  setTimeout(addAmericano, 500, "아메리카노");
};
var addAmericano = function (name) {
  coffeeList += ", " + name;
  console.log(coffeeList);
  setTimeout(addMocha, 500, "카페모카");
};
var addMocha = function (name) {
  coffeeList += ", " + name;
  console.log(coffeeList);
  setTimeout(addLatte, 500, "카페라떼");
};
var addLatte = function (name) {
  coffeeList += ", " + name;
  console.log(coffeeList);
};
setTimeout(addEspresso, 500, "에스프레소");
```

이런 코드베이스는 지옥이 아닙니다. 하지만 근본적인 해결책이 아닙니다. 비동기 작업을 동기적 표현하는 것이 필요합니다. 위 코드는 모두 동기적으로 처리합니다.

## 비동기함수의 동기적 표현 방법

`Promise`는 약속입니다. 무엇을 하면 무엇을 해준다는 것입니다. `Promise`는 콜백을 대입하고 바로 실행합니다. 성공하면 `resolve` 혹은 `reject`합니다. 비동기 통신에서 `then`, `catch`까지 연결됩니다. 성공은 `then`, 실패는 `catch`를 실행합니다.

`Promise`는 다루기 쉽게 바꾼 것입니다.

```js
//new 연산자로 호출한 Promise의 인자로 넘어가는 콜백은 바로 실행돼요
//그 내부의 resolve(또는 reject) 함수를 호출하는 구문이 있을 경우
//resolve(또는 reject) 둘 중 하나가 실행되기 전까지는
//다음(then), 오류(catch)로 넘어가지 않아요
//따라서, 비동기작업이 완료될 때 비로소 resolve, reject 호출하는 방법으로
//비동기 -> 동기적 표현이 가능합니다
new Promise((resolve) => {
  setTimeout(() => {
    var name = "에스프레소";
    console.log(name);
    resolve(name);
  }, 500);
})
  .then((prevName) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        var name = prevName + ", 아메리카노";
        console.log(name);
        resolve(name);
      }, 500);
    });
  })
  .then((prevName) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        var name = prevName + ", 카페모카";
        console.log(name);
        resolve(name);
      }, 500);
    });
  })
  .then((prevName) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        var name = prevName + ", 카페라떼";
        console.log(name);
        resolve(name);
      }, 500);
    });
  });
```

`Promise` 종말의 탑입니다.

```js
var addCoffee = function (name) {
  return function (prevName) {
    return new Promise(function (resolve) {
      setTimeout(function () {
        var newName = prevName ? prevName + ", " + name : name;
        console.log(newName);
        resolve(newName);
      }, 500);
    });
  };
};
addCoffee("에스프레소")()
  .then(addCoffee("아메리카노"))
  .then(addCoffee("카페모카"))
  .then(addCoffee("카페라떼"));
//직전 예제의 반복부분을 함수화 한 코드에요
//클로저 개념이 나왔지만, 여기서는 skip 하고, 다음 chapter에서 다루게 될거에요
```

클로저만 잘 알면 참 우아한 문법입니다.

제너리이터는 무조건 읽어보도록 합니다.

```js
var addCoffee = function (prevName, name) {
  setTimeout(function () {
    coffeeMaker.next(prevName ? prevName + ", " + name : name);
  }, 500);
};
var coffeeGenerator = function* () {
  var espresso = yield addCoffee("", "에스프레소");
  console.log(espresso);
  var americano = yield addCoffee(espresso, "아메리카노");
  console.log(americano);
  var mocha = yield addCoffee(americano, "카페모카");
  console.log(mocha);
  var latte = yield addCoffee(mocha, "카페라떼");
  console.log(latte);
};
var coffeeMaker = coffeeGenerator();
coffeeMaker.next();
//*가 붙은 함수가 제너레이터 함수
//제너레이터 함수 실행 시, Iterator 반환(next()를 가지고 있음)
//iterator 은 객체를 next 메서드로 순환 할 수 있는 객체다.
//next 메서드 호출 시, Generator 함수 내부에서 가장 먼저 등장하는 yield에서 stop
//이후 다시 next 메서드를 호출하면 멈췄던 부분 -> 그 다음의 yield까지 실행 후 stop
//즉, 비동기 작업이 완료되는 시점마다 next 메서드를 호출해주면 Generator 함수 내부
//소스가 위 -> 아래 순차적으로 진행
```

iterator는 순회를 넘어 순환하는 객체입니다. 객체는 `yield`로 제어할 수 있습니다.

```js
var addCoffee = (name) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(name);
    }, 500);
  });
};
var coffeeMaker = async () => {
  var coffeeList = "";
  var _addCoffee = async (name) => {
    coffeeList += (coffeeList ? ", " : "") + (await addCoffee(name));
  };
  await _addCoffee("에스프레소");
  console.log(coffeeList);
  await _addCoffee("아메리카노");
  console.log(coffeeList);
  await _addCoffee("카페모카");
  console.log(coffeeList);
  await _addCoffee("카페라떼");
  console.log(coffeeList);
};
coffeeMaker();
//ES2017에서 새롭게 추가된 async/await 문을 이용했어요
//비동기 작업을 수행코자 하는 함수 앞에 async
//함수 내부에서 실질적인 비동기 작업이 필요한 위치마다 await
//Promise ~ then과 동일한 효과를 얻을 수 있어요
```

가장 많이 사용하는 `async/await`입니다. 비동기적으로 수행할 작업은 `await` 키워드를 붙입니다.
