# 모던 마크업부터 시작하기

<script type=""></script>

여기서 모듈은 나중에 다루게 될 내용입니다.

외부 스크립트

```html
<script src="/path/to/script.js"></script>
```

이런 식으로 스크립트를 가져오는 것은 로컬에서 가져오는 것입니다.

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js"></script>
```

이런식으로 url로도 가져올 수 있습니다.

html에 스크립트를 작성하지 말고 파일을 분리해서 작성하는 것이 성능에도 유리합니다. 캐시(cache)에 저장하기 때문에 동일한 스크립트가 필요할 때 바로 전달할 수 있기 때문입니다.

```html
<script src="file.js">
  alert(1); // src 속성이 사용되었으므로 이 코드는 무시됩니다.
</script>
```

# 코드 구조

세미콜론은 문장의 종결을 의미합니다.

```txt
alert("에러가 발생합니다.")

[(1, 2)].forEach(alert)
```

하지만 명시하지 않으면 에러가 발생할 수 있습니다.

```txt
alert("에러가 발생합니다.")[(1, 2)].forEach(alert)
```

자바스크립트는 이렇게 읽게 됩니다. 이런 이유로 세미콜론을 넣는 편이 좋습니다. 생략은 가능하지만 넣어서 에러를 발생시키지 않도록 합니다.

# 엄격모드

use strict라는 특별한 지시자가 존재합니다. 기존 기능 변경으로 생긴 하위 호환성 문제를 해결하기 위해 생겨났습니다.

```js
"use strict";
```

코드 최상단에 이렇게 넣어주면 사용할 수 있지만 사용할 필요가 전혀 없습니다. 클래스와 모듈로 해결하고 있으면 특별히 사용할 필요는 없습니다.

```js
let name = "kim";
```

이렇게 작성해야 할 것을

```js
name = "kim";
```

이렇게 하면 에러를 돌려줍니다.

[use strict(Strict Mode)란?](https://ithub.tistory.com/162)

여기 자료를 찾아보고 더 음미하도록 합니다.

# 변수와 상수

```js
const COLOR_RED = "#F00";
const COLOR_GREEN = "#0F0";
const COLOR_BLUE = "#00F";
const COLOR_ORANGE = "#FF7F00";

// 색상을 고르고 싶을 때 별칭을 사용할 수 있게 되었습니다.
let color = COLOR_ORANGE;
alert(color); // #FF7F00
```

대문자 상수는 ‘하드 코딩한’ 값의 별칭을 만들 때 사용하면 됩니다.

변수를 재사용하면 변수 선언에 쏟는 노력을 좀 덜 순 있겠지만, 디버깅에 열 배 더 많은 시간을 쏟아야 합니다.

변수를 추가하는 것은 악습이 아닙니다. 좋은 습관입니다.
