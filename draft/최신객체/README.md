# 시작하기

Symbol, Map, Set, WeakMap, WeakSet 등 존재합니다. 자주 사용할일이 없습니다. 애플리케이션 코드만 작성하는 코더는 다룰일이 없습니다.

# Symbol

```js
let id = Symbol("id");
console.log(id.toString()); // Symbol(id)
```

```js
let id = Symbol("id");
console.log(id.description); // id
```

```js
// 이름을 이용해 심볼을 찾음
let sym = Symbol.for("name");
let sym2 = Symbol.for("id");

// 심볼을 이용해 이름을 얻음
console.log(Symbol.keyFor(sym)); // name
console.log(Symbol.keyFor(sym2)); // id
```

```js
let range = {
  from: 1,
  to: 5,

  [Symbol.iterator]() {
    this.current = this.from;
    return this;
  },

  next() {
    if (this.current <= this.to) {
      return { done: false, value: this.current++ };
    } else {
      return { done: true };
    }
  },
};

for (let num of range) {
  console.log(num); // 1, then 2, 3, 4, 5
}
```
