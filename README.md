# JavaScript Cook Book
자바스크립트 활용법을 알려줍니다. 자바스크립트라는 프로그래밍 언어를 요리재료처럼 다루는 방법을 알려드리기 위한 리포지토리입니다. 절대 웹으로 봐주시길 바랍니다. 관련 유튜브 링크를 많이 포함하고 있습니다. 

작성시작: 2022.09.24.  
Status: meme 🫠  
Version: 0.02  

# 이것을 왜 작성하는가?
자바스크립트를 다루는 법을 정리하는 리포지토리입니다. MDN과 다른 이유는 MDN을 참고할 뿐입니다. 자바스크립트 전체에서 훨씬더 간소한 부분만 다루기 때문입니다.
최대한 개념을 학습하면 문제를 제공하려고 합니다.
개인적으로 자바스크립트를 다루었던 경험을 공유하고자 합니다.

자바스크립트를 다시 공부하는 게 쉽도록 하기 위해 작성합니다.

참고하는 아티클, 튜토리얼, 강연이 많이 있습니다. 가능하면 자바스크립트 중심으로 설명합니다. 

<p align="center">
<img src="./img/Soyjak_Meme_Javascript.png" width="400px">
</p>

자바스크립트는 웹 프론트엔드 엔지니어링할 때 사실상 표준입니다. 대체제가 있다고 합니다. Dart & Flutter, Rust & Yew, ELM이 경쟁관계라고 말만 합니다. 정말 말만입니다. 프론트엔드 엔지니어로 취업 혹은 최소한 외주라도 받고 싶으면 JavaScript 공부해야 합니다. 

# 목차

1. 자바스크립트에 대한 이런 저런 것들
2. 개발환경
3. 기본 문법
4. 심화 문법

<!-- TODO 예약어 & 키워드 스니펫 추가하기 -->
예약어, 키워드

```JS
abstract
boolean
byte
char
class
const
debugger
double
enum
export
extends
final
float
goto
** implements
import
int
interface
long
** native
package
private
protected
public
short
static
super
** synchronized
throws
** transient
** volatile
```

자바스크립트 키워드 입니다.

```JS
break
case
catch
continue
** default : 사용자가 특별히 명령을 내리지 않으면 시스템이 자동으로 적용하는 미리 정해진 값이나 조건.
** delete : 피연산자로 지정된 객체 프로퍼티, 배열원소, 변수의 삭제를 시도하는 단항연산자이다.
** do : while의 변형인 do~while 문을 의미한다. 내용을 먼저 실행한 후에 조건을 비교한다.
else
** finally : catch절 다음에 finally 블록이 이어지는데, 앞서 try 블록에서 일어난 일에 관계없이 항상 실행이 보장되어야 할 뒷정리용 코드가 포함된다.
for
function
if
in
** instanceof : A instanceof B의 형식으로 사용하며, A가 B의 인스턴스가 맞는지 판단한다.
new
return
switch
** this : 함수 내에서 함수 호출 맥락(context)를 의미한다. 함수를 어떻게 호출하냐에 따라서 대상이 달라진다.
throw
try
typeof
var
void
while
** with : 객체를 제어하는 명령어로, 특정 객체를 여러번 사용할 경우 생략할 수 있도록 해준다.

with(document){
  	write("document.write에서 document 생략")
}
```

자바스크립트 예약어입니다.

<!-- TODO 특수 객체 목록 정리하기 -->
특수 객체
다양한 특수 용어
클린코드

[![JavaScript meme](https://user-images.githubusercontent.com/84452145/191771735-24cd40b3-c899-44b8-a98b-d1f6247b1b62.jpeg)](https://www.youtube.com/watch?v=Uo3cL4nrGOk)
저의 목표는 이 개그의 모든 요소를 이해할 수 있게 여러분의 자바스크립트 지식을 끌어올리고자 합니다.


<!-- TODO 디버깅 방식 -->
<!-- TODO console 시리즈 -->

# 분류가 필요한 것들

<!-- TODO commonJS 정리하기 -->

<!-- TODO 호이스팅 개념 정리하기 -->

this 키워드

프로토타입 기반이란 무엇인가?

[Why I try to avoid the “this” keyword in javascript](https://www.youtube.com/watch?v=ZXlnqOGUb6c)

랙시컬 스코프

재귀함수

클로저

<!-- TODO 아일랜드 아키텍쳐 -->

<!-- TODO 하이드레이션 개념(프레임워크) -->

<!-- TODO 자바스크립트 런타임 개념 -->


<!-- TODO const, object.freeze(), concat(), 스프레드 연산자 -->
<!-- TODO 자바스크립트 메모리 동작방식 -->
immutable JavaScript

함수형 프로그래밍
<!-- TODO 데이터, 액션, 계산에 대한 개념추가 -->
<!-- TODO 선행학습 정리 -->

[JavaScript로 함수형 프로그래밍 배우기 - Anjana Vakil - JSUnconf](https://www.youtube.com/watch?v=e-5obm1G_FY)

선행학습: 고차함수

자료구조와 알고리즘

[TypedArray](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray)


[ArrayBuffer](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer)



```JavaScript
const buffer = new ArrayBuffer(8);
const view = new Int32Array(buffer);
```

tree array

자바스크립트에서 조심할 것들

[5 Things I Hate About JavaScript](https://www.youtube.com/watch?v=14jlIxVrcvo)


1. 커뮤니티
자바스크립트는 느리고, 메모리 비효율적이고, 버그가 가능하고, 이상한 API를 가지고 있습니다. 간단하고 빠르게 구현하기 좋은 언어입니다. 하지만 안 좋은 점이 너무 많습니다. 그리고 안 좋은데도 계속 사용하게 만들려고 커뮤니티가 엄청 노력합니다.

2. 네트워크랑 관련된 디버깅

`<<`연산자를 활용할 때입니다.

```JavaScript
const a = 10_000_000_000;
a = a + 1  // 10000000001
a | 0  // 1410065408
0x1 << 30  // 1073741824
0x1 << 31  // -2147483648
```


3. 객체 순회
map 고차함수는 key다음 value를 돌려줍니다.
forEach는 value다음 key를 돌려줍니다.

일관성이 없습니다.

4. uint8array

https://curryyou.tistory.com/441

타입스크립트로도 디버깅할 수 없습니다.

5. 정규표현식

상태값을 보관하고 있습니다.
정규표현식 자체를 피하기를 바랍니다. 물론 하라면 배워야 합니다.



비동기처리

<!-- TODO 코드퀄리티 기준에 대한 것 작성, 패턴 등... -->

