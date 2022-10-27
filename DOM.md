# DOM

학습의존성: HTML, CSS 선택자 및 일부 속성

DOM은 Document Object Model의 약자입니다. 그림으로 설명하면 꽤 직관적입니다.

자바스크립트의 핵심은 DOM를 통해서 웹을 동적으로 만드는 것입니다. 자바스크립트 언어를 만든의도이고 자바스크립트 언어의 도메인 분야입니다.

자바스크립트에서 가장 핵심적으로 배워야 할 것은 DOM과 관련된 메서드들입니다. 개념적인 이해가 가장 중요한 부분입니다.

node랑 object 개념부터 출발합니다. JavaScript의 본래 자연스러운 용도인 DOM 조작을 이해하기 위해서는 HTML과 CSS를 이해해야 합니다.

---

# DOM에 대한 개괄
```html
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="test.js" defer></script>
</head>
<body>

</body>
</html>
```

DOM은 Document Object Model의 약자입니다. 여기서 Document는 HTML 파일을 말합니다. html파일은 문서입니다~~팀버너스리의 의도를 보면 태생적으로 문서가 맞기는 합니다~~. Object는 가시적으로 보이는 각각의 tag입니다. Model은 이 태그들의 부모 자식, 남매 관계입니다. Node랑 어떻게 다른지는 아직 모르겠습니다.




# 제이쿼리의 유산
```html
<div id="something"></div>
```

```js
const $something = document.createElement("#something")
```

대상을 `something`로 선택하면 `$(아이디 이름)`이 관례입니다. 더이상 제이쿼리는 사용하지 않지만 네이밍 방식은 관례로 굳었습니다.



# innerHTML
```JavaScript
div.innerHTML = null;  // 문자열을 통해 직접 html을 작성하는 유일한 방법입니다. 하지만 보안위험이 크기 때문에 자제합니다. 번거롭지만 createElement, append를 활용하도록 합니다.
```

`innerHTML`같은 어트리뷰트는 사용하지 않습니다. 보안문제를 만들 수 있습니다. 간단한 방법으로 코드를 작성할 수 있어서도 크로스 사이트 스크립팅 취약점을 제공합니다.

[MDN - Element.innerHTML](https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML)



# append vs appendChild

```js
const body = document.body;

// Create
body.append("hello, Document Object Model!");  // append, appendChild 2가지 가있습니다. 
// append는 문자열 같은 콘텐츠를 추가할 수 있습니다. 여러 append를 추가할 수 있습니다.
// appendChild는 Node를 추가합니다. 1개만 추가할 수 있습니다.

```


## innerText vs textContent
```js
const div = document.createElement("div"); // div를 생성합니다. 생성하고나서는 붙여야 합니다.
div.innerText = "hello Div";   // innerText는 CSS처럼 화면에서 보이는 기준으로 합니다.
div.textContent = "hello Div";  // textContent는 포함된 정보 전체를 보여줍니다. 태그 사이 콘텐츠 정보 모두를 보여줍니다.
body.append(div);
```

```js
// Delete
div.remove() // element를 삭제하는 방법입니다.

div.removeChild() // 자식에 해당하는 element를 삭제하는 방법입니다.


```


## Attribute
```js
// Read
div.getAttribute();  // object의 매서드, 프로퍼티랑 동일하게 가져올 수 있습니다.

div.classList // class 정보를 배열로 받을 수 있습니다.
div.classList.add() // class에 추가할 수 있습니다.

div.style.color = 'red'; // 스타일을 자바스크립트로 제어하는 방법입니다.

div.setAttribute("class", "wrapper"); // html 어트리뷰트를 추가하는 방법입니다.
div.removeAttribute() // 
```



https://www.youtube.com/watch?v=y17RuWkWdn8