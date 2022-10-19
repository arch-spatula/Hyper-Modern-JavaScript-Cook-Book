# 고차함수 시작하기

학습의존성: 함수 & 화살표함수, 참조형 자료, 제어문, 콜백의 존재에 대한 간단한 개념, 메서드가 무엇인지 간단한 개념

<!-- TODO 예시추가하기 -->

# ES6 array helper method
자바스크립트를 다룰 때 중요한 것 중 하나는 순회입니다.

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


---
코어 자바스크립트