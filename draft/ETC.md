# 학원 SPA 특강

자바스크립트로 하는 SPA만들기 입니다. 특강 이유는 SPA 프레임워크에 익숙해지기 전에 바닐라 SPA만드는 법을 알아야 합니다. Firebase도 이 예시로 만들었습니다.

- [ ] MPA, SPA 차이를 설명할 수 있어야 합니다.
- [ ]
- [ ]

MPA는 페이지가 여러개인 앱입니다. 동작과 의미가 상통합니다. 클라이언트가 페이지를 요청하면 HTML로 응답합니다. 하지만 SPA는 처음 이후부터는 JSON으로 통신합니다. 여기는 이론입니다.

```py
@app.route('/')
def home():
    return render_template('index.html')
```

크롬 네트워크 탭을 확인해보면 통신이 더 효율적이라는 것을 알 수 있습니다. 페이지 이동이 더욱더 자연스럽고 부드러운 느낌이 들 것입니다.

화면을 구성하는 것을 보고 랜더링이라고 합니다. SPA를 화면을 재구성을 할 때는 많은 경우 클라이언트 측에서 랜더링합니다.

랜더하고 HTML을 보내는 통신하는 방식을 보고 SSR이라고 합니다.

Hashed url을 알 필요가 있습니다. 도메인 이후 path name이 붙습니다. `#`없으면 non Hashed입니다. `#` 이후부터는 요청이 안 갑니다.

window.location으로 hash 존재를 확인할 수 있습니다. `#`는 로컬처럼 취급합니다. 서버에게 요청하지 않습니다. 이것은 새로고침 때문에 배울 것입니다.

새로고침은 무슨 문제인가? SPA를 구성하면 `#`이전까지만 요청할 수 있습니다.

상태 head가 304이면 캥싱된 것을 보여주는 것입니다.

브라우저는 기본적으로 url로 서버에 요청을 합니다.

`#`를 사용하지 않으면 404사 에러가 발생할 수 있습니다. 새로 고침하면 서버에서 찾을 수 없을 것입니다.

a태그에 #값을 onclick 했을 때 `window.location.hash`를 업데이트하는 방식입니다.

`href` 속성값에 `"#"`으로 되어 있으면 이벤트로 찾을 수 있습니다. 여기는 요청입니다.

응답입니다. `handleLocation` 함수를 분석하기 바랍니다.

```js

```

서버랑 통신 중에 JSON 통신 전까지해도 SPA가 될 수 있습니다. SPA 라이프사이클은 CSR이지만 모든 CSR은 SPA는 아닙니다.

대부분의 컴퓨터는 자기자신을 접근하는 것을 보고 Loopback이라고 합니다. 127.0.0.1을 보고 Loopback ip라고 합니다.

SPA는 깜빡인 현상이 없어서 앱과 유사한 경험을 제공합니다. 자연스러운 사용자경험, 성능향상도 가능합니다. 부분 리소스만 로딩하는 점도 성능향상에 기여합니다. 개발 상산성도 향상됩니다. 컴포넌트별로 쪼개고 업무 분담하기가 쉽습니다. 유지보수도 쉽습니다.

단점도 있습니다. 첫 랜딩 속도가 느립니다. 모든 파일은 한번에 다운받게 하기 때문에 느립니다. 그래서 나중에 배울 것은 레이지 로딩으로 성능향상을 배울 것입니다. SEO에 불리합니다. 검색엔지는 크롤링 봇이 있습니다. SPA에게 요청이 없기 때문에 검색엔진이 감지할 수 없습니다. Next.js로 보완할 수 있습니다. 보안문제가 큽니다. 사업아이템은 대부분 서버에서 처리합니다. 하지만 클라이언트측에서 다루면 노출위험이 큽니다. 사용자정보, 쿠키 등 저장하면서 보안문제가 발생할 수 있습니다.

리액트로 코드분할을 배우면 요청시점에 제공하는 방식으로 성능을 향상시킬 수 있습니다.

처음할 때는 SPA 라우팅을 익히고 그 다음에 더 심화자료를 공부하기를 권장합니다.

How to Use the Payment Request API in JavaScript

https://www.freecodecamp.org/news/payment-request-api-javascript/

https://stackoverflow.com/questions/35940290/how-to-convert-base64-string-to-javascript-file-object-like-as-from-file-input-f

https://stackoverflow.com/questions/27159179/how-to-convert-blob-to-file-in-javascript

https://ionic.io/blog/converting-a-base64-string-to-a-blob-in-javascript

## Parcel.js는 `fetch text`따위 지원하지 않습니다.

```js
const html = await fetch(route).then((data) => data.text());
```

## 유사 배열 순회

유사배열을 순회하는 전략이 있습니다.

```html
<ul class="list">
  <il class="item">
    <h3 class="item-header">고양이 밥주기</h3>
    <p class="item-description">고양이 물, 사료 챙겨주기</p>
    <button class="item-btn">완료</button>
  </il>
  <il class="item">
    <h3 class="item-header">장보기</h3>
    <p class="item-description">토마토, 계란, 초코렛 사기</p>
    <button class="item-btn">완료</button>
  </il>
  <il class="item">
    <h3 class="item-header">코딩하기</h3>
    <p class="item-description">리액트 강의 1주차 듣기</p>
    <button class="item-btn">완료</button>
  </il>
</ul>
```

```js
const $itemBTN = document.getElementsByClassName(`item-btn`);

const itemBTN = Array.from($itemBTN);
itemBTN.forEach((elem, idx) => {
  $itemBTN[idx].addEventListener("click", (event) => {
    const $item = (document.querySelectorAll(".item")[
      idx
    ].style.backgroundColor = "springgreen");
  });
});
```

`html`의 여러개의 노드를 동시선택하면 콘솔은 유사배열을 출력합니다. 이 유사배열을 `Array.from` 정적 메서드로 일반 배열로 만들고 순회할 수 있습니다.

순회가 가능하다고 했죠 권장하는 것은 아닙니다.

[addEventListener - MDN](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)

하지만 기본기가 부족합니다. `addEventListener`의 콜백함수로 속에 다른 DOM을 접근하는 함수를 넣을 수 없습니다.

```js
const $itemBTN = document.getElementsByClassName(`item-btn`);

const check = (event, idx) => {
  const $item = (document.querySelectorAll(".item")[idx].style.backgroundColor =
    "springgreen");
};

const itemBTN = Array.from($itemBTN);
itemBTN.forEach((elem, idx) => {
  $itemBTN[idx].addEventListener("click", (event) => {
    check(event, idx);
  });
});
```

이렇게 하면 책임을 분리할 수 있지만 에러가 발생합니다. 왜 이런 에러가 발생하는지 아직도 동작원리를 정확히 이해하고 있지 못합니다.

놀랍게도 튜터님에게 질문하러 갔더니 하이젠버그처럼 금방 사라졌습니다.
