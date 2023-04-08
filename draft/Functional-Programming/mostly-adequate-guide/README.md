https://github.com/MostlyAdequate/mostly-adequate-guide

mostly-adequate-guide

<대부분 적당한 가이드>입니다.

# 1장: 우리는 무엇을 하는가?

# 2장: 일급함수

https://github.com/MostlyAdequate/mostly-adequate-guide/blob/master/ch02.md

```js
const hi = (name) => `Hi ${name}`;
const greeting = (name) => hi(name);
```

이렇게 함수를 보면 불필요하게 감싸져있습니다. 왜 이렇게 감싸는 함수를 사용하는가? greeting을 호출하고 hi를 호출하는 수고를 왜 들여야 하는가?

한국인 정서에 맞게 verbose합니다.

의도는 그저 평가릴 지연시키기 위한 것 뿐입니다. 평가를 지연시킵니다.

```js
// 무식한 사람의 코드입니다.
const getServerStuff = (callback) => ajaxCall((json) => callback(json));

// 정상인입니다.
const getServerStuff = ajaxCall;
```

놀랍게도 이것은 단축입니다.

```js
// 여기 줄을 보면
ajaxCall((json) => callback(json));

// 위의 줄과 동일합니다.
ajaxCall(callback);

// 여기도 같습니다.
const getServerStuff = (callback) => ajaxCall(callback);

// 또 위와 동일합니다.
const getServerStuff = ajaxCall; // <-- look mum, no ()'s
```

대입하는 매개변수와 반환값이 되는 함수의 매개변수가 일치하면 함수자체를 호출이 아닌 값으로 대입하는 것이 가능합니다.

## 왜 일급함수를 선호하는가?

유지보수의 문제입니다. 매개변수의 가변성을 유지할 수 있는 코드를 작성할 수 있게 됩니다.

예를 들어

```js
httpGet("/post/2", (json) => renderPost(json));
```

이런 코드가 있습니다. 하지만 요구사항에 변경이 생겼습니다.

```js
// go back to every httpGet call in the application and explicitly pass err along.
httpGet("/post/2", (json, err) => renderPost(json, err));
```

이렇개 매개변수 2개가 생겼습니다. 그리고 이런 코드가 30곳 이상이라고 생각해보면 유지보수가 상당히 어려울 것입니다.

```js
// renderPost is called from within httpGet with however many arguments it wants
httpGet("/post/2", renderPost);
```

그래서 처음부터 이렇게 작성했으면 요구사항 변경이 생겨도 이부분은 손도 안대고 반영이 가능했을 것입니다.

당연히 단점이 있습니다. 명시성입니다. 무슨 자료를 어떻게 처리하는지 이름이 있으면 알기 쉽습니다.

객체지향-프로그래밍처럼 this는 함수형 프로그래밍에서도 동일하게 정복해야 합니다.

# 3강: 순수한 함수로 순수한 행복
