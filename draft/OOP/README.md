# 자바스크립트 객체지향 프로그래밍 시작하기

자바스크립트에서 객체지향 프로그래밍을 실천하기 전에 넘어야할 몇가지 관문이 있습니다.

# this 바인딩

상당히 이상하고 인지비용이 많이 필요하지만 기초 중 기초입니다. 메서드 체이닝 패턴을 구사할 수 있고 유사배열객체에 배열 메서드를 사용하게 하는 등 코드를 사람 비슷한 흉내 낼 수 있게 해줍니다.

```js
let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep() {
    alert(this.step);
    return this;
  },
};

ladder.up().up().down().up().down().showStep(); // 1
```

이런 코드로 작성하는 것이 가능합니다.

# `prototype` VS `__proto__` VS `[[Prototype]]`

## TL;DL

1. `prototype`은 new 연산자즉 함수를 생성자함수로 사용할 때 설정되어 있는 속성값입니다. 동적 메서드를 추가할 수 있고 생성될 객체의 `__proto__`가 바라볼 대상을 설정할 수 있습니다.
2. `__proto__`는 프로토타입을 가리키는 속성값입니다. 프로토타입 객체가 할당되어 있는 속성값입니다. 인스턴스가 가질 수 있습니다. 그리고 `Object.getPrototypeOf()`와 `Object.setPrototypeOf()`을 권장합니다.
3. `[[Prototype]]`은 하위 호환을 위해 남겨둔 것입니다. 코드로 접근할 수 있는 값이 아닙니다.

## 왜 배우는가?

최소한은 면접질문입니다. 면접질문까지만 활용하고 실제 코드베이스에서 node_module에 활용한 경우를 본적없으면 퇴사를 권장합니다. 현업자 사칭하는 사람들입니다. 현업자들은 이런것들 잘 활용합니다. 컨벤션에서 사용하지 말자고 합의하고 안 사용할 뿐이고 사실 사용할줄 압니다.

실무적으로 라이브러리 수정하는 경우 많습니다. 또 회사에서 라이브러리 코드 작성 안할 거라는 나약한 생각은 버리도록 합니다. 라이브러리 코드 폴리필할 때 무조건 알아야할 개념들입니다.

아래는 편집이 필요합니다. 잘못된 정보가 많습니다.

---

> `__proto__`는 `[[Prototype]]`용 getter·setter입니다.

이 명제로 우리가 유추할 수 있는 것이 있습니다. `__proto__`은 메서드이고 `[[Prototype]]`은 값입니다. `[[Prototype]]`은 상속 혹은 연결될 대상입니다.

```js
let animal = {
  eats: true,
};
let rabbit = {
  jumps: true,
};

rabbit.__proto__ = animal; // (*)

// 프로퍼티 eats과 jumps를 rabbit에서도 사용할 수 있게 되었습니다.
console.log(rabbit.eats); // true (**)
console.log(rabbit.jumps); // true
```

```js
let animal = {
  eats: true,
  walk() {
    console.log("동물이 걷습니다.");
  },
};

let rabbit = {
  jumps: true,
  __proto__: animal,
};

// 메서드 walk는 rabbit의 프로토타입인 animal에서 상속받았습니다.
rabbit.walk(); // 동물이 걷습니다.
```

이것은 직관적인 1세대 상속입니다. 한국인들이 좋아하고 저는 아메리칸 스타일이라 개인적으로 싫어하는 여러세대 상속입니다.

```js
let animal = {
  eats: true,
  walk() {
    console.log("동물이 걷습니다.");
  },
};

let rabbit = {
  jumps: true,
  __proto__: animal,
};

let longEar = {
  earLength: 10,
  __proto__: rabbit,
};

// 메서드 walk는 프로토타입 체인을 통해 상속받았습니다.
longEar.walk(); // 동물이 걷습니다.
console.log(longEar.jumps); // true (rabbit에서 상속받음)
```

프로토타입 체이닝엔 두 가지 제약사항이 있습니다.

1. 순환 참조(circular reference)는 허용되지 않습니다.
2. `__proto__`를 이용해 닫힌 형태로 다른 객체를 참조하면 에러가 발생합니다. `__proto__`의 값은 객체나 null만 가능합니다. 다른 자료형은 무시됩니다.
3. 객체엔 오직 하나의 `[[Prototype]]`만 있을 수 있습니다. 상속을 흉내내는 것이니 당연합니다.

```js
let animal = {
  eats: true,
};

let rabbit = {
  jumps: true,
  __proto__: animal,
};

// Object.keys는 객체 자신의 키만 반환합니다.
console.log(Object.keys(rabbit)); // jumps

// for..in은 객체 자신의 키와 상속 프로퍼티의 키 모두를 순회합니다.
for (let prop in rabbit) console.log(prop); // jumps, eats
```

```js
const obj1 = {};

console.log(obj1);
```

> [[Prototype]]:Object
> constructor: ƒ Object()
> hasOwnProperty: ƒ hasOwnProperty()
> isPrototypeOf: ƒ isPrototypeOf()
> propertyIsEnumerable: ƒ propertyIsEnumerable()
> toLocaleString: ƒ toLocaleString()
> toString: ƒ toString()
> valueOf: ƒ valueOf()
> `__defineGetter__`: ƒ `__defineGetter__()` > `__defineSetter__`: ƒ `__defineSetter__()` > `__lookupGetter__`: ƒ `__lookupGetter__()` > `__lookupSetter__`: ƒ `__lookupSetter__()` > `__proto__`: (...)
> `get __proto__`: ƒ `__proto__()` > `set __proto__`: ƒ `__proto__()`

https://www.youtube.com/watch?v=RYxgNZW3wl0

`__proto__`는 모든 객체가 갖고 있는 속성입니다. 객체를 생성하면 항상 존재합니다. prototype과 연관되어 있지만 prototype은 기초 개념입니다.

공부 안하면 저한테 혼날 것입니다. prototype을 클래스의 상속만 설명합니다. 혼납니다. prototype 상속은 클래스 상속이 아닙니다. 자바스크립트는 프로토타입 기반언어입니다. 클래스가 원래는 없고 흉내내는 것입니다. prototype 클래스 혹은 객체를 내용복사 없는 상속입니다. 더 단순한 이해방법은 연결입니다.

프로토타입이 없으면 객체를 어떻게 설계하고 만들 수 있는가? 자바스크립트는 클래스가 없고 함수를 활용해서 클래스처럼 동작하게 만듭니다. 물론 클래스자체가 무조건 문법적 설탕은 아닙니다.

https://www.youtube.com/watch?v=LPEwb5plEoU

탑레벨은 function 키워드 사용하는게 좋은 것 같다는 생각도 듭니다. 모든 부분을 동의하는 것은 아닙니다.

함수에서 new 연산자를 사용하면 새로운 객체를 생성하게 됩니다.

복사없이 어떻게 상속하는가?

일반적으로 부모클래스의 자식 클래스에 복사되고 자식 인스턴스에 복사됩니다. 하지만 자바스크립트의 상속에서 복사를 의미하면 복사될 수 없습니다. 자바스크립트는 원시값과 객체의 참조값만 복사하는 것이 가능합니다. 하지만 자바스크립트는 상속을 흉내내기 위해 객체 연결을 `__proto__`로 객체간 연결합니다. 자신의 원형을 가리키게 됩니다.

객체가 아니라 함수라면 생성자함수와 인스턴스 객체 그리고 인스턴스 객체의 prototype은 생성자함수를 순환참조하게 됩니다.

```js
let animal = {
  eats: true,
};

function Rabbit(name) {
  this.name = name;
}

Rabbit.prototype = animal;

let rabbit = new Rabbit("흰 토끼"); //  rabbit.__proto__ == animal

console.log(rabbit.eats); // true
```

`prototype`은 `[[Prototype]]`을 설정하는 속성값입니다. 생성자 함수에 사용합니다. 혹은 정적메서드를 접근할 때 사용합니다. 함수만 가질 수 있는 프로퍼티입니다.

## 결론

`Object.prototype.__proto__`은 지원합니다. 하지만 사용하지 말아야 할 이유는 크지 않습니다. `function` 키워드도 하위 호환성을 위해 유지할 수 있게 해준다고 해도 안 사용하는 것은 아닙니다.

`Object.create()`을 활용할 것을 더 권장하기 때문에 활용하는 것 뿐입니다. MDN은 99% 신뢰할 수 있고 만약 1% 오류도 존재할 수 있는 가정으로 접근하기 바랍니다.

## 참고

https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/proto

https://www.youtube.com/watch?v=LPEwb5plEoU

https://ko.javascript.info/prototype-inheritance

## `[[Environment]]` `[[Scope]]`

자바스크립트의 함수는 숨김 프로퍼티인 `[[Environment]]`를 이용해 자신이 어디서 만들어졌는지를 기억합니다. 함수 본문에선 `[[Environment]]`를 사용해 외부 변수에 접근합니다.

https://ko.javascript.info/closure

# 클래스
