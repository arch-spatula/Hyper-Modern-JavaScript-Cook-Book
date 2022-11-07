# 함수형 프로그래밍

학습 의존성: 함수, 콜백, 클로저

# 6대 함수형 프로그래밍 자바스크립트 라이브러리

[lodash](https://lodash.com/)

[underscore](https://underscorejs.org/)

[Ramda](https://ramdajs.com/)

[sugar](https://sugarjs.com/)

[Lazy.js](https://danieltao.com/lazy.js/)

[Mout](http://moutjs.com/)


<!-- TODO 라이브러리 선택기준 정리하기 -->
선택 기준은 모두 맥락에 달려있습니다. 저는 선택 기준을 나중에 정리하겠습니다.

[Differences between Lodash and Ramda](https://stackoverflow.com/questions/71401443/differences-between-lodash-and-ramda)

compose pipe curry


[함수형 프로그래밍 영문 위키피디아](https://en.wikipedia.org/wiki/Functional_programming)

[번역이 미약한 함수형 프로그래밍 국문 위키피디아](https://ko.wikipedia.org/wiki/%ED%95%A8%EC%88%98%ED%98%95_%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%B0%8D)

[나무위키](https://namu.wiki/w/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%B0%8D%20%EC%96%B8%EC%96%B4?from=%ED%95%A8%EC%88%98%ED%98%95%20%EC%96%B8%EC%96%B4#s-4.5.3.1)

https://github.com/lodash/lodash/wiki/FP-Guide

# 

[Web Village Voyage](https://www.youtube.com/channel/UCrYp-z-6BvFC6P3009q0peg)


# 

[Practical Functional Programming in JavaScript - Ben Katz](https://www.youtube.com/watch?v=zeZOPB9uxdE)

# Envato Tuts+
[Learn Functional Programming With JavaScript | FREE COURSE - Envato Tuts+ ](https://www.youtube.com/watch?v=XvLMO2wE3OQ)

리액트와 스펠트의 영향으로 자바스크립트 개발자 커뮤니티는 함수형 프로그래밍을 추구하기 시작했습니다.

https://github.com/tutsplus/learn-functional-programming-in-javascript

## Introduction

환결설정

```shell
npm init -y
```
기본설정입니다.

```shell
npm install lite-server --save-dev
```
간단한 http 서버입니다. 파일의 변화를 자동감지합니다.

```shell
npm run start
```

## 기본 개념 Basic Concepts


### 일급 클래스 함수 First-Class Functions

함수형 프로그래밍에서 함수는 중요합니다. 당연합니다. 자바스크립트에서 함수는 일급 클래스입니다. 

```js
function add(a, b) {
    return a + b
}
```
자바스크립트에서 함수는 객체이고 자료형입니다. 변수에 할당이 가능합니다.

```js
const add = function (a, b) {
    return a + b
}
```

이것은 함수 표현식입니다. 함수를 변수에 할당한 것입니다. 그리고 이렇게 되면 자바스크립트의 동작방식에도 영향을 줍니다.

이렇게 되면 함수 자체를 함수에 인자로 넣을 수 있습니다.

```js
const greet = function(salutation) {
    return function(firstName) {
        return `${salutation} ${firstName}`;
    };
}

const howdy = greet('Howdy');
const hello = greet('Hello');


howdy('Jim');
howdy('Bob');
hello('Jim');
```

만약에 객체지향으로 만들었다면 클래스로 만들고 각 인사방식을 메서드로 만들었을 것입니다.

함수형 프로그래밍은 함수를 객체로 취급하는 사고방식을 가져야 합니다. 즉 `greet`이라는 부모 함수이자 부모 객체는 `howdy`라는 자식 함수이자 자식 객체를 만든 것입니다.

In JavaScript, functions are first-class objects. They are a type of data we can assign to variables, pass to other functions, and even return functions from within another function. It's a powerful feature and is central to functional programming.

### 선언형 프로그래밍 Declarative Programming

함수형 프로그래밍 자체는 아니지만 자바스크립트 커뮤니티에 떠도는 개념입니다. 대부분 엔지니어는 UI를 만들 때 선언형으로 만들려고 합니다.

함수형 프로그래밍도 비슷합니다.

```js
const numbers = [1, 2, 3, 4, 5, 6];

for(let i = 0; i < numbers.length; i ++) {
    numbers[i]
}
```

전통적인 명령형 프로그래밍은 이런 방식으로 배열을 순회했을 것입니다. 하지만 함수형 프로그래밍은 다릅니다.

함수형 프로그램의 명령형은 가독성이 훨씬더 좋습니다.

```js
const numbers = [1, 2, 3, 4, 5, 6];

numbers.forEach((item) => {})
```

선언형은 역시 전통적인 명령형 보다 가독성이 좋습니다. 여기서도 더 좋게 만들 수 있습니다.

```js
const numbers = [1, 2, 3, 4, 5, 6];

for (let ii = 0; ii < numbers.length; ii++) {
    numbers[ii]
}

const output = item => console.log(item);

numbers.forEach(output);

forEach(output, numbers); // 가장 가독성이 좋습니다.
```

함수형 프로그래밍은 보일러 플레이트로 제어하는 것을 기피합니다. `for-while`, `do-while`, `if`, `else`, `switch`를 피합니다. 만약에 조건문을 사용하면 삼항연산자를 사용합니다.

```js
const value = true ? 'this value' : 'that value';
```

선언형 프로그래밍 스타일 덕분에 함수형 프로그래밍은 코드 가독성이 더 좋습니다.

Functional programming takes a declarative approach for writing code. It's a common (and very trendy) way of writing code. We'll examine declarative programming and compare it to imperative programming in this lesson.

### 순수 함수와 비순수 함수 Pure and Impure Functions

순수함수는 작성, 테스트 하기 쉽습니다. 인자가 같다면 매번 실행할 때마다 같은 결과를 돌려줍니다. 외부 데이터로 부터 격리 되어 영향을 받지 않습니다.
```js
function add(a, b) {
    return a + b
}

add(1, 2) // 3
add(1, 2) // 3
add(1, 2) // 3
```
이것은 순수합수 입니다.

```js
function add(a, b) {
    console.log(a + b) // 순수하지 못하게 만든 요소. 출력하면서 사이드 이펙트를 발생시킵니다.
    return a + b
}

add(1, 2) // 3
add(1, 2) // 3
add(1, 2) // 3
```
이렇게 되면 비순수함수입니다. 하지만 사이드 이펙트를 관측가능한 비순수함수입니다.

프로그래밍적으로 최대한 순수함수를 추구하지만 무엇을 이루기 위해서는 비순수함수도 작성하고 사이드이펙트를 발생시켜야 합니다.

There are two types of functions in functional programming: pure and impure. You'll learn the difference between the two in this lesson.

### 불변성 Immutability

불변성이란 바뀔 수 없다는 것입니다. 순수함수랑 유사합니다. 일관되면 예측하기 쉽고 예측하기 쉬우면 테스하기도 쉽습니다.

```js
let salutation = 'Hello';

salutation = 'bye'; 
```

다른 엔지니어가 실수로 `salutation`을 덮었습니다. 

데이터 뮤테이션이 발생했습니다. 물론 실수입니다.

```js
const salutation = 'Hello';

salutation = 'bye'; // Error
```
이렇게 해결할 수 있습니다. 하지만 한계가 있습니다. 이것은 식별자가 참조하는 대상만 고정시킵니다. 식별자가 바라보는 참조형이 참조하는 것은 여전히 유동적입니다.

```js
const person = {
    firstName : 'Jake',
};

person.firstName = 'Jake the Dog'
```
참조형이 참조하고 있는 대상도 고정시킬 수 있습니다.

```js
const person = Object.freeze({
    firstName : 'Jake',
})

person.firstName = 'Jake the Dog'
console.log(person)
```
`Object.freeze`는 참조형인 배열과 객체에게 주로 사용합니다. 

```js
const indexes = Object.freeze([...Array(6).keys()]);

function addElement(arr) {
    // indexes.push(arr.length)
}
```

`push`는 피합니다. 데이터에 뮤테이션이 발생합니다. 대규모 프로젝트에서는 의도하지 않은 에러가 발생하기 쉽습니다. 일관성을 깨면서 문제를 야기할 것입니다.

해결책은 있습니다. 함수 속에 넣고 복사하고 돌려주는 값도 `Object.freeze`로 고정시킵니다.

```js
const indexes = Object.freeze([...Array(6).keys()]);

function addElement(arr) {
    // indexes.push(arr.length)
    return Object.freeze([...arr, arr.length])
}

console.log(
    addElement(addElement(addElement(indexes)))
)

// [
//     0, 1, 2, 3, 4,
//     5, 6, 7, 8
// ]
```

함수를 다시 함수에 넣어서 데이터를 변형합니다.

We typically work with immutable data in functional programming. It may seem like more work to program immutably, and inefficient to boot, but there are benefits to using immutable data. You'll learn why in this lesson.

## 프로젝트 Building a Functional Project

### 컴포지션 입문하기 Introducing Composition

함수형으로 프로젝트를 접근할 때는 사고방식을 바꿔야 합니다. 하지만 DOM은 지극히 객체지향적입니다. 그래서 우회할 방법이 필요합니다. 리액트, 스펠트는 지극히 함수형 프로그래밍에 상당히 좋습니다. 뷰(Vue)는 조금 부족합니다.

함수형 프로그래밍에서는 객체의 메서드를 사용하지 않습니다. 하지만 논리적인 컴포지션으로 동일한 기능을 구현합니다.

compose 함수를 만들어 여러개의 함수를 넣습니다. 읽는 순서도 아래에서 위로 읽습니다.

pipe 함수도 유사합니다. 하지만 위에서 아래로 읽습니다.

[lodash](https://lodash.com/), [Ramda](https://ramdajs.com/) 라이브러가 있습니다. Ramda는 함수형 프로그래밍을 위해 이미 설계되었습니다.

One key aspect of functional programming is the concept of composition: composing multiple functions into one. You'll learn the two types of composition in this lesson.

### 컴포지션 사용하기 Using Composition

Now that you know the types of composition, we'll compose multiple functions together to build an HTML element.

```js
const elem = tag => document.createElement(tag);

function addClass(className) {
    return function (element){
        element.classList.add(className);
        return element
    }
}

const el = R.compose(
    addClass('bg-light'),
    addClass('p-2'),
)(elem('div'));

document.body.appendChild(el) // <div class="p-2 bg-light"></div>
```
지금까지 함수형 개념을 활용해서 DOM을 생성했습니다. 그리고 Ramda.js의 CDN으로 compose메서드를 가져왔습니다. DOM 생성을 보면 여러개의 class를 동시에 생성해줄 수 있습니다. 함수를 넣은 인자의 역순인것으로 클래명이 붙는 것을 알 수 있습니다.

### 커링 Currying Functions 00:41:11

compose함수는 함수를 인자로 받아야 합니다. 하지만 `addClass`는 가독성을 해칩니다.

커리잉은 모든 매개변수를 위한 함수를 만들 수 있습니다.

```js
const addClass = R.curry((className, element) => {
    element.classList.add(className);
    return element
});
```
이런식으로 리팩토링할 수 있습니다. 여기서 중요한 것은 반환값의 존재입니다. `return element`가 존재해야 `compose`함수에 넣고 연속으로 사용할 수 있습니다.

```js
const elem = tag => document.createElement(tag);
const text = content => document.createTextNode(content);

const addClass = R.curry((className, element) => {
    element.classList.add(className);
    return element
});

const append = R.curry((node, element) => {
    element.appendChild(node);
    return element
})

const attr = R.curry((attributeName, attributeValue, element) => {
    element.setAttribute(attributeName, attributeValue);
    return element
});

const message = (content) => {
    return R.compose(
        append(text(content)),
        attr('data-message', 'whatever'),
        addClass('bg-light'),
        addClass('p-2'),
    )(elem('div'));
};

document.body.appendChild(message('this is some text')) // <div class="p-2 bg-light" data-message="whatever">this is some text</div>
```
기존 프로그래밍 방식과 다르게 중복이 적습니다.

Currying can be a difficult concept to grasp at first, but it is extremely powerful and lets us create partial functions.

### 함수형 웹 어플리케이션 만들기 Writing a Functional Web App

지금까지는 기반을 마련해주는 함수들을 만들었습니다.

```js
const elem = tag => document.createElement(tag);
const text = content => document.createTextNode(content);
const getElem = id => document.getElementById(id);

const addClass = R.curry((className, element) => {
    element.classList.add(className);
    return element
});

const append = R.curry((node, element) => {
    element.appendChild(node);
    return element
})

const attr = R.curry((attributeName, attributeValue, element) => {
    element.setAttribute(attributeName, attributeValue);
    return element
});


const message = (content) => {
    return R.compose(
        append(text(content)),
        attr('data-message', 'whatever'),
        addClass('bg-light'),
        addClass('p-2'),
    )(elem('div'));
};

const view = state => {
    const el = elem('div')
    return state.length > 0 ?R.pipe(
        ...state.map((content, idx) => append(message(content, idx)))
    )(elem('div')) : el;
};


const app = (state, output) => {
    append(view(state), output)
};

app(
    Object.freeze([]),
    getElem('message-list')
);
```

삼항연산자로 조건부 랜더링이랑 유사한 방식으로 화면에 보여줍니다. app은 view를 디커플시켰습니다.

Most of the code we've written just creates helper functions. In this lesson, we'll start writing our application code to display messages on the page.

### Handling Events 00:56:53

Handling events in a functional way is not very different from the procedural way, except now we curry our event setup functions. I'll show you how to do that so we can complete our application in this lesson.

## Working With Arrays

### Understanding map()

map함수를 통과시키면 다른 원본 정보를 변형하지 않고 새로운 정보를 만듭니다.

자바스크립트 `Array`의 `map` 메서드의 인자는 (현재 배열의 원소, 배열의 인덱스, 배열 그자체)가 됩니다.

One of the most useful and underused operations in all programming is the idea of a map—transforming an array into another array. I'll show you how to do that with JavaScript's map() method.

### Filtering Arrays 01:16:11

It's very common to want to filter an array into a smaller set of data. In this lesson, you'll learn how with the filter() method.

### Reducing Arrays 01:22:18

Reduce는 배열을 하나의 값으로 변환합니다.
The reduce() operation is very useful, and you'll learn how it works and how to apply it in this lesson.

## Conclusion

### Conclusion 01:32:15

Functional programming with JavaScript is a completely different paradigm than what we're used to, and it requires us to rethink how we approach common problems. Functional programming can be elegant and expressive, and with concepts like composition and currying, we have some pretty ingenious ways of reusing code.

