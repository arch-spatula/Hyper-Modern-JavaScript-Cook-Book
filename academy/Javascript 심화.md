# 학습 시작하기

## 학습 목표

- [ ] 자바스크립트의 데이터 종류에 대해 이야기할 수 있고, 각각 메모리에 어떻게 저장되고 사용 되고, 수거 되는지를 이해 할 수 있다.
- [ ] 실행컨텍스트의 정의와, 실행컨텍스트를 이루는 요소 및 그 하위요소를 이해할 수 있다. 이를 통해 함수가 실행될 때 어떠한 과정이 일어나는지를 말할 수 있다.
- [ ] this가 어떤 환경에서는 무엇으로 채택되는지에 대한 일련의 과정을 설명할 수 있다.
- [ ] 콜백함수가 어떤 것인지, 어떤 역할을 통해 사용되는지를 이해할 수 있다. 콜백 함수의 필수 내용인 비동기 개념에 대해 이해할 수 있다.
- [ ] 클로저의 정의에 대해 이야기 할 수 있으며, 클로저가 실제 코드에서는 어떻게 활용되는지를 알 수 있다. 정보은닉 차원에서 클로저가 어떻게 활용되는지 또한 이해할 수 있다.
- [ ] 모던자바스크립트 튜토리얼(주어진 링크)를 모두 학습하고 관련된 내용을 조원들에게 설명할 수 있다. 이후 프로젝트에서도 활용할 수 있다.

## 목차

- 데이터 타입
  - 데이터 타입의 종류
  - 데이터 할당
  - 기본형 데이터와 참조형 데이터
  - 불변 객체
  - undefined와 null
- 실행 컨텍스트
  - 실행 컨텍스트란?
  - VariableEnvironment와 LexicalEnvironment의 간단 개요
  - EnvironmentRecord
  - outerEnvironmentReference
- THIS
  - 상황에 따라 달라지는 this
  - 명시적 this 바인딩
- 콜백함수
  - 콜백함수 및 제어권
  - 콜백 함수 내부의 this에 다른 값 바인딩하기
  - 비동기함수의 동기적 표현방법
- 클로저
  - 클로저의 정의
  - 렉시컬 스코프 복습
  - outer
  - LexicalEnvironment
  - 클로저의 활용
  - 캡슐화와 정보은닉
  - 자주 발생하는 실수

## 모던 자바스크립트 튜토리얼 읽는 순서

[모던 자바스크립트 튜토리얼 읽는 순서](https://iandonghun.notion.site/f5d5832c672049f5ae265076b03b0e61)

## 데이터 타입

### JS심화강의 1-2. 데이터타입의 종류

자료형은 원시형과 참조형 2가지가 존재합니다. 참조형은 다른 값들을 참조하고 있는 데이터 타입니다.

기본형입니다. number, string, boolean, null, undefined, symbol이 존재합니다.

참조형입니다. array, function, Date, RegExp, Map, Set입니다.

기본형과 참조형을 나누는 기준은 복제방식입니다. 기본형은 값이 담긴 주소를 바로 복제합니다. 값을 복제하는 것이 아니라 주솟값을 복제합니다.

값이 담긴 주솟값들로 이루어진 묶음을 가리키는 주솟값을 복제합니다. 식별자는 주솟값의 묶음을 참조하고 수좃값의 묶음이 다른 주솟값들을 복제합니다.

```js
a = [1, 2, 3, 4, 5];
```

`a`는 원시형 `1`, `2`, `3`, `4`, `5` 주소들의 묶음을 참조하는 방식입니다.

또 기본형은 불변입니다. 하지만 참조형은 가변형입니다.

메모리 구조를 식별자는 새로운 주소를 바라만 보면 값 자체는 변하지 않습니다. 하지만 참조형은 주소의 묶음이 변하기 때문에 가변형이라고 합니다.

컴퓨터는 비트, 바이너리로 말합니다. 가장 작은 메모리 조각은 0, 1로 구성된 것입니다. 비트는 작은 메모리 조각입니다. 비트들의 합은 메모리가 됩니다.

메모리의 의미를 파악해봅시다. 기억, 저장입니다. 비트는 메모리 조각입니다. 비트는 하나하나 각각 식별자를 갖습니다. 메모리는 모든 식별자의 모음입니다. 특정 식별자를 찾기 위해서는 메모리 전체를 찾아야 합니다. 하지만 0, 1만으로 찾는 것은 상당히 비효율적인 작업입니다. 그래서 비트로 묶어서 작업하기 시작합니다. 하지만 너무 작은 값에 큰 비트를 할당하는 것도 비효율적입니다. 대략 8비트가 효율적입니다.

모어의 법칙에 맞게 하드웨어 성능이 시간이 지날수록 좋아졌습니다. 하지만 과거 메모리 성능이 안 좋았던 시대에는 메모리 관리를 많이 해야 했습니다.

자바스크립트는 식별자에 값을 할당하고 메모리에 저장하고 간단하게 끝납니다. 하지만 자바는 다양한 저장 방식을 제공합니다. 자바는 byte, short, int, long으로 저장합니다. 자바는 메모리 저장방식을 관리하지만 자바스크립트는 딱히 관리하지 않습니다. 자바스크립트는 좋은 시대에서 사용할 수 있는 언어입니다.

식별자와 변수입니다. 변수를 이상하게 생각하는 사람이 많습니다.

```js
let testValue = 3;
```

여기서 `testValue`는 식별자입니다. 3은 데이터이고 값이고 변수입니다.

모든 데이터는 바이트 단위입니다. 비트는 너무작아서 비효율적이고 바이트는 적당합니다. 바이트 단위로 저장한다는 것은 이해를 못하면 외우기라도 합니다.

### 1-3. 데이터 할당

자바스크립트가 식별자에 데이터를 할당하는 방식을 다룹니다. 변수란 변할 수 있는 데이터 담긴 식별자입니다.

```js
let testValue = "test value!";
```

testValue는 할당하는 데이터가 업데이트될 수 있습니다.

```js
// 호이스팅을 표현한 코드
let testValue;
let testValue = "test value!";
```

식별자는 먼저 정의하고 다음에 식별자에 값을 할당하는 방식입니다.

| 주소   | …   | 1002                      | 1003 | 1004 | 1005 | …   |
| ------ | --- | ------------------------- | ---- | ---- | ---- | --- |
| 데이터 |     | `식별자: testValue` @5004 |      |      |      |     |

| 주소   | …   | 5002 | 5003 | 5004         | 5005 | …   |
| ------ | --- | ---- | ---- | ------------ | ---- | --- |
| 데이터 |     |      |      | `test value` |      |     |

식별자를 정의하는 순간 메모리에 비어있는 공간을 찾습니다.

식별자가 주소를 담고 주소로 데이터를 찾아가는 방식입니다. 바로 보면 비효율적으로 보입니다. 이렇게 하는 이유는 다양합니다. 하나는 자유로운 데이터 변환이 가능하도록 합니다. 주소만 바꾸면 되기 때문에 식별자의 데이터를 쉽게 바꿀 수 있습니다. 다른 하나는 메모리관리가 효율적입니다.

숫자는 8바이트입니다. 영어는 1글자에 1바이트 한글은 1글자에 2바이트입니다.

메모리공간에서 만약에 새로운 데이터가 생성되면 데이터 주소를 연속으로 한 칸식 밀어줘야 합니다. 상당히 비효율적입니다. 하지만 할당은 효율적입니다.

만약에 값이 동일한 숫자를 800번 저장하면 매번 메모리에 공간을 확보해야 합니다. 숫자 1글자는 8바이트면 `8*800(6400)` 바이트가 필요합니다. 하지만 식별자 바이트가 2바이트고 숫자 1개 8바이트만 사용하면 `2*800+8(1608)` 바이트가 필요합니다. 여러개의 식별자가 동일한 주솟값을 갖고 있는 구조입니다.

더 좋은 설명

```js
// 변수명(=식별자)과, 실제 그 변수에 할당된 데이터(값)는 구분이 필요해요!!
var a = 3; // 이라고 했을 때,
// var a를 저장하는 크기 -> 2byte(예를 들어)
// 3을 저장하는 크기 -> 8byte
// 로 이해하는게 좀 더 맞아요!
// 그래서
var a = 3;
var b = 3; // 을 했을 때
// a와 b를 위한 공간 각각 2바이트 -> 총 4바이트
// 그리구 3을 저장하기 위한 공간 8바이트
```

### 1-4. 기본형 데이터와 참조형 데이터

변수와 상수입니다. 변수와 상수를 구분하는 것은 변경 가능성입니다. 변경이 가능하면 변수이고 불가능하면 상수입니다. 변수와 상수를 구분하는 것을 변수 데이터의 식별자 값의 가변성입니다. 불변성을 구분하는 것은 변수의 값이 바뀔 수 있는가가 아니라 데이터 영역의 메모리가 바뀔 수 있고 없고입니다.

```js
let a = "abc";
a += "def";
```

위와 같은 코드를 표현하면 아래와 같습니다. 식별자 a는 메모리 주소 @5003에서 @5004를 바라보게 되는 것입니다. @5003의 데이터를 업데이트할 것이라고 많이 착각하는데 아니고 새로운 값을 메모리에 할당하고 새로 할당된 메모리 주소를 바라보게 식별자의 주소를 업데이트하는 방식입니다.

| 주소   | …   | 1002              | 1003 | 1004 | 1005 | …   |
| ------ | --- | ----------------- | ---- | ---- | ---- | --- |
| 데이터 |     | `식별자: a` @5004 |      |      |      |     |

| 주소   | …   | 5002 | 5003  | 5004     | 5005 | …   |
| ------ | --- | ---- | ----- | -------- | ---- | --- |
| 데이터 |     |      | `abc` | `abcdef` |      |     |

메모리에서 식별자 영역과 데이터 영역에서 데이터 영역은 새로운 데이터만 공간을 확보하고 기존 데이터는 변화가 없습니다.

불변성은 식별자 영역이 아니라 데이터 영역입니다. 데이터 영역의 가변성 및 불변성에 대한 것입니다.

가비지컬렉팅입니다. 가비지는 메모리에서 참조하지 않는 데이터입니다. 가비지를 컬랙팅하는 주체는 프로그램입니다. 위 예시에서 `abc`는 참조 카운트가 0이기 때문에 수거대상이 됩니다.

원시형은 불변, 참조형은 가변입니다. 참조형이 가변적이기 때문에 다양한 문제가 발생합니다.

```js
let obj1 = {
  a: 1,
  b: `abc`,
};
```

위 값은 참조형입니다.

| 주소   | …   | 1002                   | 1003 | 1004 | 1005 | …   |
| ------ | --- | ---------------------- | ---- | ---- | ---- | --- |
| 데이터 |     | `식별자: obj1` @5002 ~ |      |      |      |     |

| 주소   | …   | 5002          | 5003 | 5004  | 5005 | …   |
| ------ | --- | ------------- | ---- | ----- | ---- | --- |
| 데이터 |     | @7002 ~ @7003 | 1    | `abc` |      |     |

| 주소   | …   | 7002                      | 7003                      | 7004 | 7005 | …   |
| ------ | --- | ------------------------- | ------------------------- | ---- | ---- | --- |
| 데이터 |     | `프로퍼티 식별자 a` @5003 | `프로퍼티 식별자 b` @5004 |      |      |     |

원시형은 객체를 위 프로퍼티영역이 존재하지 않았습니다. 하지만 참조형은 층 1개가 더 있는 것입니다. 그리고 식별자가 메모리 주소를 1개 이상 갖고 있습니다.

참조형은 가변적입니다.

```js
let obj1 = {
  a: 1,
  b: `abc`,
};

obj1.a = 2;
```

위 값은 참조형입니다.

| 주소   | …   | 1002                   | 1003 | 1004 | 1005 | …   |
| ------ | --- | ---------------------- | ---- | ---- | ---- | --- |
| 데이터 |     | `식별자: obj1` @5002 ~ |      |      |      |     |

| 주소   | …   | 5002          | 5003 | 5004  | 5005 | …   |
| ------ | --- | ------------- | ---- | ----- | ---- | --- |
| 데이터 |     | @7002 ~ @7003 | 1    | `abc` | 2    |     |

| 주소   | …   | 7002                      | 7003                      | 7004 | 7005 | …   |
| ------ | --- | ------------------------- | ------------------------- | ---- | ---- | --- |
| 데이터 |     | `프로퍼티 식별자 a` @5005 | `프로퍼티 식별자 b` @5004 |      |      |     |

없으면 데이터 영역 주소에 새롭게 만들고 @5003에서 @5005로 업데이트합니다. 데이터 영역이 바뀌는 것은 불변성 식별자의 변수 영역이 상수 변수를 구분합니다.

변수 복사입니다.

```js
//기본형 데이터
var a = 10;
var b = a;

//참조형 데이터
var obj1 = { c: 10, d: "ddd" };
var obj2 = obj1;

b = 15;
obj2.c = 20;
```

| 주소   | …   | 1002              | 1003 | 1004                 | 1005 | …   |
| ------ | --- | ----------------- | ---- | -------------------- | ---- | --- |
| 데이터 |     | `식별자: a` @5002 |      | `식별자: obj1` @5004 |      |     |

| 주소   | …   | 5002 | 5003  | 5004          | 5005 | …   |
| ------ | --- | ---- | ----- | ------------- | ---- | --- |
| 데이터 |     | 10   | `ddd` | @7002 ~ @7003 |      |     |

| 주소   | …   | 7002                       | 7003                       | 7004 | 7005 | …   |
| ------ | --- | -------------------------- | -------------------------- | ---- | ---- | --- |
| 데이터 |     | `프로퍼티 식별자: c` @5002 | `프로퍼티 식별자: d` @5003 |      |      |     |

여기까지는 배운 내용 복습니다. 이제 값을 복사하는 영역입니다.

| 주소   | …   | 1002              | 1003              | 1004                   | 1005                 | …   |
| ------ | --- | ----------------- | ----------------- | ---------------------- | -------------------- | --- |
| 데이터 |     | `식별자: a` @5002 | `식별자: b` @5001 | `식별자: obj1` @5004 ~ | `식별자: obj2` @5004 |     |

| 주소   | …   | 5002 | 5003  | 5004          | 5005 | …   |
| ------ | --- | ---- | ----- | ------------- | ---- | --- |
| 데이터 |     | 10   | `ddd` | @7002 ~ @7003 |      |     |

| 주소   | …   | 7002                       | 7003                       | 7004 | 7005 | …   |
| ------ | --- | -------------------------- | -------------------------- | ---- | ---- | --- |
| 데이터 |     | `프로퍼티 식별자: c` @5002 | `프로퍼티 식별자: d` @5003 |      |      |     |

원시형을 복사할 때는 간단하게 바라보는 주소만 동일하게 만듭니다. 참조형도 원시형처럼 주소를 복사합니다. 하지만 `b = 15;`과 `obj2.c = 20;`으로 재할당하는 방식입니다.

| 주소   | …   | 1002              | 1003              | 1004                 | 1005                 | …   |
| ------ | --- | ----------------- | ----------------- | -------------------- | -------------------- | --- |
| 데이터 |     | `식별자: a` @5002 | `식별자: b` @5004 | `식별자: obj1` @5006 | `식별자: obj2` @5006 |     |

| 주소   | …   | 5002 | 5003  | 5004 | 5005 | 5006          | 5007 … |
| ------ | --- | ---- | ----- | ---- | ---- | ------------- | ------ | --- |
| 데이터 |     | 10   | `ddd` | 15   | 20   | @7002 ~ @7003 |        |     |

| 주소   | …   | 7002                       | 7003                       | 7004 | 7005 | …   |
| ------ | --- | -------------------------- | -------------------------- | ---- | ---- | --- |
| 데이터 |     | `프로퍼티 식별자: c` @5005 | `프로퍼티 식별자: d` @5003 |      |      |     |

원시형은 `15`를 @5004에 새롭게 공간을 확보하고 b 식별자의 주소를 업데이트합니다. 하지만 참조형 데이터의 복사는 조금 다릅니다. `20`은 새롭게 공간을 5005@에 확보합니다. 그리고 c프로퍼티 식별자의 주소는 `20`을 바라봅니다.

```js
a === b; // false
obj1 === obj2; // true
```

이렇게 된 이유는 참조형의 메모리 영역에서 프로퍼티 식별자의 주소를 업데이트하는데 식별자의 주소는 그대로이기 때문입니다. 이런 점이 자바스크립트의 단점입니다. 원시형처럼 개별 객체가 되는 것이 당연할 것이라고 생각하지만 아닙니다. obj2을 변경했지만 obj1도 같이 변하게 되었습니다. 의도하면 괜찮지만 의도하지 않으면 엄청난 사이드이팩트가 됩니다.

당연히 해결방법도 존재합니다. obj2를 할당 할 때 참조형인 주소의 묶음이 개별적인 존재로 할당하는 전략입니다.

```js
var obj1 = { c: 10, d: "ddd" };
var obj2 = { c: 20, d: "ddd" };
```

이렇게 정의하면 식별자는 각각 다른 주소의 묶음을 바라봅니다.

### 불변 객체

불변객체는 가변일수밖에 없는 참조형 자료형의 문제가 있습니다. 이런 것을 제거하기 위해서 탄생했습니다.

```js
var user = {
  name: "wonjang",
  gender: "male",
};
var changeName = function (user, newName) {
  var newUser = user;
  newUser.name = newName;
  return newUser; // 기존 객체
};
var user2 = changeName(user, "twojang");
if (user !== user2) {
  console.log("유저 정보가 변경되었습니다.");
}

console.log(user.name, user2.name); // twojang twojang
console.log(user === user2); // true
```

위 `changeName` 함수는 첫번째 인자로 객체를 받고 두번째 인자는 프로퍼티의 값을 업데이트할 자료를 넣습니다. 현재 `user` 객체는 가변객체입니다. 그래서 복사한 식별자의 데이터에 변형을 가했더니 원본에도 영향을 줍니다.

이런 문제를 해결하기 위한 전략입니다.

```js
var user = {
  name: "wonjang",
  gender: "male",
};
var changeName = function (user, newName) {
  return {
    // 새로운 객체
    name: newName,
    gender: user.gender,
  };
};
var user2 = changeName(user, "twojang");
if (user !== user2) {
  console.log("유저 정보가 변경되었습니다.");
}
console.log(user.name, user2.name); // wonjang twojang
console.log(user === user2); // false
```

새로운 객체를 반환한 상태로 식별자에 할당하면서 동일한 객체 문제를 해결할 수 있습니다.

하지만 문제가 여전히 있습니다. 만약에 프로퍼티가 1억개면 일일이 작성해야 합니다. 위 코드는 문제를 해결하지만 상당히 비효율적인 코드입니다. 유지보수 측면에서 상당히 나쁜 코드입니다.

```js
//이런 패턴은 어떨까요?
var copyObject = function (target) {
  var result = {};
  for (var prop in target) {
    result[prop] = target[prop];
  }
  return result;
};

//위 패턴을 우리 예제에 적용해봅시다.
var user = {
  name: "wonjang",
  gender: "male",
};
var user2 = copyObject(user);
user2.name = "twojang";
if (user !== user2) {
  console.log("유저 정보가 변경되었습니다.");
}
console.log(user.name, user2.name); // wonjang twojang
console.log(user === user2); // false
```

이렇게 작성하면 아까보다 더 좋은 코드입니다. 프로퍼티 1억개 문제를 해결했습니다. 다음 문제는 깊은 복사 얕은 복사 문제입니다.

현재는 참조형이 원시형들을 참조하고 있습니다. 만약에 참조형 속에 참조형을 참조하는 구조이면 문제가 발생합니다. 깊은 복사가 얼마나 깊을지 모르는 경우까지 해결해줘야 합니다. 이런 개념을 보고 얕은 복사와 깊은 복사라고 합니다.

얕은 복사는 참조형의 바로 아래 속한 값들입니다.

```js
a = [1, 2, 3];
```

문제는 참조형 데이터가 프로퍼티를 복사할 때 주소만 복사합니다.

깊은 복사는 내부의 모든 값을 하나하나 다 찾아 모두 복사합니다. 이런 깊은 복사를 구현하기 위한 전략은 재귀함수가 있습니다.

```js
var user = {
  name: "wonjang",
  urls: {
    portfolio: "http://github.com/abc",
    blog: "http://blog.com",
    facebook: "http://facebook.com/abc",
  },
};
var user2 = copyObject(user);
user2.urls = copyObject(user.urls);
user.urls.portfolio = "http://portfolio.com";
console.log(user.urls.portfolio === user2.urls.portfolio);
user2.urls.blog = "";
console.log(user.urls.blog === user2.urls.blog);
```

이런 전략은 하드코딩입니다. 권장하지 않습니다.

```js
var copyObjectDeep = function (target) {
  var result = {};
  if (typeof target === "object" && target !== null) {
    for (var prop in target) {
      result[prop] = copyObjectDeep(target[prop]);
    }
  } else {
    result = target;
  }
  return result;
};
//결과 확인
var obj = {
  a: 1,
  b: {
    c: null,
    d: [1, 2],
  },
};
var obj2 = copyObjectDeep(obj);
obj2.a = 3;
obj2.b.c = 4;
obj2.b.d[1] = 3;
console.log(obj); // { a: 1, b: { c: null, d: [ 1, 2 ] } }
console.log(obj2); // { a: 3, b: { c: 4, d: { '0': 1, '1': 3 } } }
```

위 코드는 재귀함수로 객체형을 판단합니다. 하지만 참조형이면 객체형으로 판단합니다. 참고로 array와 null도 객체형으로 자바스크립트가 판단합니다. 재귀함수로 또 호출하게 되는 구조입니다. 만약에 객체형이 아니면 반환값을 바로 할당하는 방식으로 동작합니다.

더 쉬운 방법은 JSON으로 다루는 것입니다. 당연히 단점도 있습니다.

```js
const obj1 = {
  a: 1,
  b: "string",
  c: {
    name: "Leon",
    age: "29",
  },
};

// Deep Copy 방법
const obj2 = JSON.parse(JSON.stringify(obj1));
```

이렇게 작성하면 성능이슈가 심각하지만 코드 자체는 엄청 단순해집니다.

### 1-7. undefined와 null

`undefined`와 `null` 모두 없음을 의미합니다.

```js
let a = undefined;
```

이렇게 작성하는 것은 당연히 바람직하지 못합니다.

```js
let a;
console.log(a); // undefined
```

이렇게 동작하기 때문에 `undefined`을 할당할 필요가 없습니다.

```js
let obj1 = { a: 1 };
console.log(obj1.a); // 1
console.log(obj1.b); // undefined

// console.log(b) // 참조 오류

var func = function () {};
var c = func();
console.log(c); // undefined
```

```js
/** 비어있는 요소와, undefined를 할당한 요소는 다른거에요! */
var arr1 = [];
arr1.length = 3;
console.log(arr1); // [ <3 empty items> ]
var arr2 = new Array(3);
console.log(arr2); // [ <3 empty items> ]
var arr3 = [undefined, undefined, undefined];
console.log(arr3); // [ undefined, undefined, undefined ]
```

`undefined`도 자료형으로 분류됩니다. 그래서 출력이 됩니다. 비어있는것과 없다는 것은 다른 의미입니다.

고차함수 배열 메서드는 `empty`는 skip합니다. 하지만 `undefined`은 수행합니다.

`undefined`는 할당한 것인지 자바스크립트가 반환해준 것인지 구분하기 어렵습니다. 그래서 없음을 명시할 때는 `null`로 지정하는 것이 많이 있습니다. 하지만 `null`에서 중요한점은 `null`은 객체가 되기 때문입니다.

```js
let var1 = null;
if (typeof var1 === "object" && var1 !== null) {
  console.log(var1);
}
```

이렇게 다루는 것도 하나의 전략입니다.

```js
var n = null;
console.log(typeof n); // object
//동등연산자(equality operator)
console.log(n == undefined); // true
console.log(n == null); // true
//일치연산자(identity operator)
console.log(n === undefined); // false
console.log(n === null); // true
```

null은 객체로 자바스크립트가 판단하기 때문에 주의가 필요합니다.

## 실행 컨텍스트

이전 시간은 자바스크립트 엔진이 데이터할당 로직을 배웠습니다.

### 2-1. 실행컨텍스트란

실행컨텍스트는 실행할 코드에 제공할 환경 정보를 모은 객체입니다. 여기서 객체라는 점이 중요합니다.

자바스크립트는 실행 컨텍스트가 활성화되는 시점에 3가지 현상이 발생합니다.

- 선언된 변수가 위로 끌어올라간 것처럼 로직을 처리합니다. 호이스팅 현상이라고 부릅니다.
- 외부 환경 정보를 구성합니다.
- this 값을 설정합니다.

이런 현상이 JS가 다른 언어랑 많이 드르게 만듭니다.

실행컨텍스트를 이해하기 위해서는 콜스택을 이해해야 합니다. 자료구조의 스택 맞습니다. LIFO으로 함수가 들어갑니다. 최근에 들어간 순서로 처리합니다. 큐는 반대로 순서대로 넣고 뺍니다. 나중에 포괄적으로 의미하는 테스크 큐에서 다룹니다.

콜스택은 실행할 코드에 제공할 환경정보를 모은 객체입니다.

가장 위에 쌓여있는 컨텍스트와 관련된 코드를 실행하는 방법으로 코드의 환경과 순서를 보장합니다. 이 특징이 제일 중요합니다.

컨텍스트를 구성하는 방법은 4가지이지만 프로그래머는 함수에 집중하기 바랍니다.

1. 전역공간(실행환경이 자동 부여합니다)
2. eval() 함수
3. 함수
4. 실행컨텍스트 구성 예시입니다.

```js
var a = 1;

function outer() {
  function inner() {
    console.log(a); // undefined
    var a = 3;
  }
  inner();
  console.log(a); // 1
}

outer();
console.log(a); // 1
```

전역 컨텍스트 -> outer 호출로 전역 컨텍스트 중단 -> outer 실행 컨텍스 -> inner 호출로 outer 실행컨텍스트 중단 -> inner 컨텍스트 실행 -> outer 재개 -> 전역 컨텍스트 재개 -> 실행 종료

`console.log(a)`도 함수이지만 이해를 위해 무시하기 바랍니다.

실행 컨텍스트 객체가 활성화되는 시점은 한 실행 컨텍스트가 콜 스택의 맨 위에 쌓이는 순간이 곧 현재 실행할 코드에 관여하게 되는 시점입니다.

생성 시점 즉 활성화 시점에서 자바스크립트 엔진이 해당하는 컨텍스트와 관련된 코드를 실행할 때 필요한 환경 정보들을 수집해서 실행 컨텍스트 객체에 저장합니다.

실행컨텍스트에 담기는 정보는 3가지입니다. 잊으면 큰일납니다.

1. VariableEnvironment

- 현재 컨텍스트 내의 식별자 정보를 파악합니다.
- 외부 환경 정보도 접근합니다.
- 선언 시점의 LexicalEnvironment의 스냅샷도 갖습니다. 하지만 Variable은 선언 시점이라는 점이 중요합니다. LexicalEnvironment는 계속 변화합니다.

2. LexicalEnvironment

- VariableEnvironment랑 동일하지만 변경사항이 실시간으로 반영합니다.

3. thisBinding

- this 식별자가 바라봐야할 객체에 대한 정보입니다. 객체의 this가 어떻게 바뀌는지 봅니다.

### 2-2. Environment와 LexicalEnvironment 개요

편의로 VE, LE라고 부르기도 합니다.

VE랑 LE의 차이는 스냅샷과 실시간 변경 차이라고 했습니다.

데이터의 특정 시점의 이력을 보관하기 위해 데이터마다 스냅샷을 찍는 업무도 있습니다. 스냅샷은 특정 시점에 정적인 정보를 보관하는 것입니다.

실행 컨텍스트를 생성할 때 VE에 정보를 담은 다음에 LE에 복사해서 만들고 LE를 계속 활용합니다.

VE, LE 모두 구성요소는 동일합니다. 구성요소는 2가지입니다.

1. environmentRecord
   - 현재 컨텍스트와 관련된 식별자 정보들을 저장합니다.
   - 함수에 지정된 매개변수 식별자와 함수 자체 var로 선언된 변수 식별자를 저장합니다.
2. outerEnvironmentReference

environmentRecord는 레코드라고 부르겠습니다. outerEnvironmentReferenced은 아우터라고 부르겠습니다.

### 2-3. LexicalEnvironment, EnvironmentRecord와 호이스팅

EnvironmentRecord를 이해하면 호이스팅 현상을 알 수 있습니다.

1. 레코드는 현재 컨텍스트와 관련되 코드의 식별자 정보를 저장합니다.

2. 수집 대상은 매개변수의 식별자, 함수 자체, var로 선언한 변수 3가지입니다.

3. 컨택스트 내부를 처음부터 끝까지 정보만 수집합니다. 코드를 실행하지는 않습니다.

호이스팅입니다. 식별자 정보만 수집하고 실행하기 전에 수집만 합니다. 자바스크립트 엔진은 변수정보만 알고 있습니다. 호이스팅은 가상 개념입니다. 실제로 코드가 위로 끌어올려진으로 컴파일하지 않습니다. 그런 것처럼 처리한다고 가정하고 이해하기 직관적이라서 활용하는 것 뿐입니다.

```js
function a(x) {
  console.log(x); // 예상: 1 실제: 1
  var x;
  console.log(x); // 예상: undefined 실제: 1
  var x = 2;
  console.log(x); // 예상: 2 실제: 2
}
a(1);
```

호이스팅이면 아래와 같은 코드가 됩니다.

```js
function a(x) {
  var x; // 함수 매개변수 식별자 정보 저장
  var x; // var x 식별자 정보 저장
  var x; // var x = 2 식별자 정보 저장
  x = 1; // 매개변수 데이터 할당
  console.log(x); // 예상: 1 실제: 1
  console.log(x); // 예상: undefined 실제: 1
  var x = 2; // 새로운 데이터 할당
  console.log(x); // 예상: 2 실제: 2
}
a(1);
```

위처럼 식별자 정보들을 먼저 저장하고 그 후에 식별자별로 할당하고 실행합니다. 그래서 `undefined`을 출력하지 않습니다.

함수표현식입니다. 매개변수 식별자, 함수자체, var로 선언된 변수를 저장하는데 여기서 함수 자체를 수집하는 것을 보겠습니다.

함수는 선언식, 함수 표현식, 익명함수와 기명함수 정의가 있습니다.

```js
// 함수선언식
function a() {}

// 익명함수 표현식
var b = function c() {};

// 기명함수 표현식
var c = function d() {};
```

기명함수 표현식의 함수명은 재귀함수로 사용할 때 이외에는 사용할 수 없습니다.

함수 선언문은 그 자체로 호이스팅 대상이 됩니다. 위 예시에서 `a`는 호이스팅 대상이 됩니다. 하지만 함수 표현식은 변수명이 호이스팅되기 때문에 함수 표현식을 전역으로 접근할 수 없습니다.

함수 선언문을 주의해야 하는 이유가 있습니다.

```js
console.log(sum(3, 4));

function sum(x, y) {
  return x + y;
}

var a = sum(1, 2);

function sum(x, y) {
  return x + " + " + y + " = " + (x + y);
}

var c = sum(1, 2);
console.log(c);
```

아래에서 작성한 선언식이 위에있는 sum을 덮어쓰기가 됩니다.

```js
console.log(sum(3, 4));

let sum = function (x, y) {
  return x + y;
};

var a = sum(1, 2);

let sum = function (x, y) {
  return x + " + " + y + " = " + (x + y);
};

var c = sum(1, 2);
console.log(c);
```

이렇게 작성하면 이미 정의된 식별자 이름이 에디터에서 에러를 돌려주고 덮어쓰기도 막을 수 있습니다. 식별자 정보만 저장하고 데이터로서 함수는 나중에 실행하면서 할당힉 때문에 발생하지 않습니다.

### 2-4. outerEnvironmentReference - 스코프, 스코프 체이닝

레코드는 식별자 정보를 담는다고 했습니다. 아우터랑 개념이 연결됩니다. 스코프라는 개념은 프로그래밍 언어의 범용적인 개념입니다. 스코프는 어떤 식별자, 변수가 유효한 범위라고 간단하게 이해할 수 있습니다.

```js
let b = 6;
const name = () => {
  let a = 3;
};
```

스코프는 다른 언어에도 존재하지만 자바스크립트에서는 조금 다릅니다.

ES6문법은 따로 다루겠습니다. 레거시 코드를 보면 var를 접할 때도 있을 것입니다. var의 특징해서 개발하는 개발자도 존재합니다.

스코프 개념이랑 연결되는 것은 스코프 체이닝입니다.

스코프 체인은 스코프가 연결되어 있다는 의미입니다. 식별자의 유효범위를 안에서부터 바깥으로 차례대로 검색해 나가는 것입니다. 스코프 체인이 외부 환경 정보를 참조하는 것입니다.

스코프 체인은 아우터는 현재 호출된 함수가 선언될 당시 LE를 참조합니다. A함수 내부 선언된 B함수는 Linked List로 연결됩니다. 외부함수에서 내부함수로 연결된 관계입니다.

```js
var a = 1;

var outer = () => {
  var inner = () => {
    console.log(a); // undefined
    var a = 3; // a 식별자만 찾아냅니다. 할당 전 출력하기 때문에 undefined입니다.
  };
  inner();
  console.log(a); // 1 외부 LE의 레코드를 참조하기 때문에 1을 출력합니다.
  // inner 함수 내부에서 a 식별자가 바라보는 메모리 주소를 바꿔도 소용없습니다. 찾은 것은 함수 내부부터가 아니라 외부부터입니다.
};
outer();
console.log(a); // 1
```

```js
var a = 1;

var outer = () => {
  var a;
  var inner = () => {
    console.log(a); // undefined
    a = 3; // 선언에서 할당으로 변경합니다.
  };
  inner();
  console.log(a); // 3
};
outer();
console.log(a); // 1
```

## THIS

대부분의 this는 객체지향 언어에서 클래스와 인스턴스를 말합니다. 하지만 자바스크립트는 조금 이상하게 this를 어디에서난 접근하고 사용할수 있습니다. 상황별로 달라지고 왜 달라지는지 알아야 합니다. 이번왜 달라지고 어떻게 추적하는지 배웁니다.

### 상황에 따라 달라지는 this

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

### 명시적 this 바인딩

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

## 콜백함수

### 콜백함수 및 제어권

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

### 콜백함수는 함수다

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

### 콜백 함수 내부의 this에 다른 값 바인딩하기

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

### 콜백지옥

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

### 비동기함수의 동기적 표현 방법

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

가장 많이 사용하는 async/await입니다. 비동기적으로 수행할 작업은 await 키워드를 붙입니다.

## 클로저

### 클로저의 개요

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

### 렉시컬 스코프 및 클로저와 렉시컬 환경

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

### 클로저와 아닌 것을 구분

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

### 클로저의 활용

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

### 캡슐화와 정보 은닉

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
