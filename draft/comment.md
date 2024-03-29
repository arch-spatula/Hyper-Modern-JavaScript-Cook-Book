# 스택오버플로우가 뽑은 최고의 주석(comment)들

학습 의존성: (없음)

아래는 스택오버플로우에서 뽑은 최고의 주석들입니다.

> When I wrote this, only God and I understood what I was doing.
>
> Now, only God knows.

> I dedicate all this code all my work to my wife Darlene who will have to support me in our three children and the dog once it gets released into the public.

> drunk, fix later

> <1nd dev> images are deleted by GDI plus
>
> \--------------------------------------\
>
> <2nd dev> I'm not sure about that some

> somedev 1 - 2002.06.07. Adding temporary tracking for logging screen.
>
> somedev 2 - 2007.05.22. Temporary my ass.

> This is not a useful comment, but you are useful and can do this <3
>
> -by Kelly Vaughn

# comment 주석

주석이란 프로그램(코드)에서 사람이 읽기 위해 남기는 정보입니다. 컴퓨터는 주석으로 표시된 정보를 무시합니다.

## 전통적인 주석들

주석을 따로 다루는 이유가 있습니다. 자바스크립트 주석은 생각보다 고급스럽습니다. JSDoc을 지원해주고 있기 때문입니다. 꼰대처럼 JSDoc 써보기 전에 먼저 전통적인 주석 작성부터 다루겠습니다.

또 주석을 다루는 방식도 같이 설명할 것이기 때문입니다. 프로그램에서 작성하기 위해 `//`, `/* */`, `/**` + `↵`로 치는 것은 쉬운데 무슨 내용을 담아야 할지 모르기 때문입니다.

```JavaScript
// 전통적인 1줄 주석
```

코드 시작 혹은 줄 끝에 작성하는 주석입니다.

```JavaScript
/*
전통적인 여러줄 주석
*/
```

긴줄로 코드에 대한 전반적인 설명이 필요할 때 작성하는 주석입니다.

주석은 여러분의 불량한 친구입니다. 학교 다닐 때 같이 있으면 재미있지만 인생 말아먹는 친구가 생각나나요? 주석은 이런 친구입니다. 어려분이 코드를 작성하면서 생각을 정리하기 좋은 수단입니다. 하지만 코드를 작성하고 나중에 꼭 지우도록 합니다. 주석으로 남아야 하는 정보는 이 코드가 왜 있는지, 왜 이렇게 작성했는에 대해서만 남아야 합니다. 어떻게 동작하는지는 처음에 주석으로 표시하고 네이밍과 구조로 직관적으로 이해할 수 있드면 어떻게 동작하는지는 삭제합니다.

<!-- 코드를 작성하는 순서 보여주기 -->

<!-- 무엇을 구현할지 정리, 왜 필요한지 작성하는 주석, pseudo code -->
<!-- 어떻게 동작하는지 그대로 구현 -->
<!-- 클린코드로 네이밍 수정 후 어떻게 동작하는지 주석 삭제 -->

## JS

이제 조금 고급스러운 주석 기능을 배워보겠습니다.

```JS
/**
 * JSDoc이라는 주석 기능입니다.
 * /
```

`/**`까지 키보드에 치고 `↵`를 눌러보시면 [JSDoc](https://jsdoc.app/)으로 작성될 것입니다.

<!-- TODO 생성 gif 넣기 -->

(시범 gif)

https://dev.to/paulasantamaria/document-your-javascript-code-with-jsdoc-2fbf

이 주석이 고급스러운 이유는 개발자 경험을 좋게 만들어주기 때문입니다.

<!-- TODO 자주쓰는 @??? 설명과 용례 추가하기 -->

<!-- TODO @see 를 스택 오버플로우에서 참고한 링크 넣기 -->
<!-- TODO @pram 무슨 내용이 들어 가는지 -->
<!-- TODO @author 누가 코드를 작성했는지 -->

코드가 클린하면 작성할 필요없다는 말이 많습니다.
코드는 어떻게 동작하는지 묘사할 수 있어도 왜 동작해야 하는지는 설명할 수 없습니다.
이분법적으로 클린하면 주석은 필요없다고 생각할 수 있습니다.

주석은 선언형 코드처럼 작성할 수 있습니다.

주석이 코드보다 더 길게 작성하는 경우도 있을 수 있습니다.

- 디버깅하면서 이렇게 말고 다른 방법이 없을 때 작성하는 경우도 있습니다. 이런 경우 왜 이렇게 작성했는가에 대한 것입니다.
- 코드가 직관적으로 이해가 안 가는 경우도 있습니다. 왜 필요한가?를 작성하는 것입니다.

주석으로 목차를 구분하기 위해 작성하는 경우도 있습니다.

sudo code를 작성하는 경우도 있습니다. 코드를 설계하기 위해서 작성하기 시작하고 작성을 하고나서 삭제를 하는 것입니다.

리팩토링을 해도 괜찮다고 작성하는 경우도 있습니다. 코드 퀄리티가 낮거나 삭제할 것 같은 기능에 표시하기도 합니다. 하지만 특이하게도 유지보수할 때 유용합니다. 물론 모든 코드에 작성하면 곤란합니다. 너무 극단적으로 마감이 짧을 때는 가끔 괜찮습니다.

튜토리얼로 배우고 있는 동안 어떻게 동작하는 것인지 작성할 수 있습니다. 학생에게 코드를 보내고 과제를 주거나 설명할 교육자료로 제공하는 기능도 있습니다.

주석에 StackOverFlow를 참고 했다면 가능하면 링크를 주석에 담기를 권장합니다. 나중에 다시 링크로 돌아가면 더 좋은 해결법도 찾을 수 있습니다.

```JS
/**
 * @see https://stackoverflow.com/questions/42695572/javascript-event-button-onclick-works-only-one-time
 * @param {Array} array toDoArray, doneArray 2개의 model을 가져온다.
 * @param {Any} columnContainer ToDoColumn, DoneColumn 중 하나를 인자로 받는다.
 * @param {String} leftIcon toDoIcon, doneIcon 중 하나를 넣는다.
 * @param {String} rightIcon removeIcon을 넣는다.
 * @returns none
 * @todo
 * @version 1.2.3
 * @author
 * [link text]{@link namepathOrURL}
 */

```

주석의 작성방식은 주관적입니다.
팀을 구성하는 사람마다 가진 능력과 의견이 모두 다릅니다.

나쁜 주석도 존재합니다.
직관적으로 이해되는데 어떻게 동작하는지 설명하는 경우 입니다.
더나쁜 코드는 동작과 다른 주석입니다.
주석은 코드의 일부입니다. 다음사람이 건드릴 때 즉 유지보수할 때 둬야 합니다. 유지보수할 필요가 없으면 주석을 삭제해도 됩니다.

주석을 잘 작성하면 주석도 리팩토링할 필요가 없습니다. 왜 작성했는지만 잘적으면 어떻게를 리팩토링해도 문제가 덜 있습니다.

코드에서 동작하는지 확인하기 위해 주석처리한 코드가 있습니다. 이런 주석은 삭제하기 겁납니다.

네이밍으로 설명할 수 없으면 네이밍을 제대로 못하고 있는 것입니다. 또 네이밍이 어려우면 너무 많은 책임을 가지고 있는 것입니다. 분할이 필요할 수 있습니다.

코드를 이상하게 작성하고 주석으로 이해하기 바란다면 더 좋은 프로그래머로 성장할 기회를 가로막는 것입니다.

미국권 통계에서 프로그래머는 30%를 코드를 작성하는데 사용하고 70%를 읽는데 사용한다고 합니다. 코드를 작성하면 주석과 가독성을 고민하도록 합니다. 문제를 해결하기 위한 관점에서 즉 동작을 위해 작성을 하고 PR을 던질 때는 코드 리뷰를 하는 사람입장에서 다시 작성하기를 권장합니다.

#

주석에 들어가면 좋은 내용

고차원 수준 아키텍처
함수 용례
당장 봐선 명확해 보이지 않는 해결 방법에 대한 설명
주석에 들어가면 좋지 않은 내용

'코드가 어떻게 동작하는지’와 '코드가 무엇을 하는지’에 대한 설명
코드를 간결하게 짤 수 없는 상황이나 코드 자체만으로도 어떤 일을 하는지 충분히 판단할 수 없는 경우에만 주석을 넣으세요.

# 참고 문헌.

[The art of code comments](https://www.youtube.com/watch?v=yhF7OmuIILc)\

[자바스크립트 20년차 개발자처럼 주석다는 법](https://www.youtube.com/watch?v=ORmnc-hLrYs)\

https://www.youtube.com/watch?v=HzWf-EeE3uI

https://www.youtube.com/shorts/kt0bfw4YkFk

https://ko.javascript.info/comments
