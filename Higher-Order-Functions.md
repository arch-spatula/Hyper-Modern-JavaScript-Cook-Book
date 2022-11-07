# 고차함수 시작하기

학습의존성: 함수 & 화살표함수, 참조형 자료, 제어문, 콜백의 존재에 대한 간단한 개념, 메서드가 무엇인지 간단한 개념

자바스크립트에서 함수는 일급객체입니다. 함수를 함수의 인자로 넘겨줄 수 있기 때문입니다. 이런 이유로 콜백함수도 존재합니다.

<!-- TODO filter, reduce, all, any, flatten, every -->

# ES6 array helper method
자바스크립트를 다룰 때 중요한 것 중 하나는 순회입니다.

`this`에 대해서 배우면 더 깊은 내용을 다룰 수 있습니다.

고차함수

```JS
forEach
map
filter
reduce
all
any
flatten
every
```

## forEach

`forEach`는 단순히 순회만 할 때 사용합니다.

```JS
const arr1 = [1, 2, 3, 4, 5];

const arr2 = arr1.forEach(ele => {
    console.log(ele)  //  1  2  3  4  5
    return ele + idx
})

console.log(arr2)  // undefined
```

`arr1`을 순회하지만 `arr2`의 `return`으로 새롭게 할당된 것이 없습니다.


## map

```JS
const arr1 = [1, 2, 3, 4, 5];

const arr2 = arr1.map(ele => ele * 2)

console.log(arr2)  //  2  4  6  8  10
```

배열의 원소별로 자료를 변형합니다.

## filter

```JS
const arr1 = [1, 2, 3, 4, 5];

const arr2 = arr1.filter(ele => ele % 2 === 1)

console.log(arr2)  //  1  3  5
```

각 배열의 원소를 판별하고 `true`면 남기고 `false`면 제거합니다. `return`자리에는 조건문이 들어와야합니다.



<details>
    <summary>연습 문제입니다.</summary>
    <div markdown="1">
        문제: 
        <details>
            <summary>정답</summary>
            <div markdown="1">
                풀이
            </div>
        </details>
    </div>
</details>



## reduce

```js
const arr1 = [1, 2, 3, 4, 5];

const arr2 = arr1.reduce((sum, cur) => sum + cur)

console.log(arr2)  //  15
```

## all

## any

## flatten

## every

# 그외

## sort
sort는 고차함수가 아닙니다. 암기가 필요한 메서드입니다.


---
코어 자바스크립트