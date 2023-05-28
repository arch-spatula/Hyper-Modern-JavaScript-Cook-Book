#

https://www.youtube.com/watch?v=u6QfIXgjwGQ

# 테스트란 무엇인가?

## 테스트를 하는 이유는 무엇인가?

## 테스트를 안해도 괜찮은 상황

프론트엔드 엔지니어로서 초기단계의 제품을 개발할 때 테스트의 효용은 작습니다. 제품의 변형을 많이 가하고 테스트할 만큼 코드베이스의 규모도 작습니다.

## 테스트를 해야 하는 상황

타입스크립트를 도입해도 버그가 많이 발생하면 TDD를 도입해야 하는 상황에 온 것입니다. 타입스크립트를 도입하고 점진적으로 버그가 발생할 때마다 시말서 대신 테스트코드를 작성하게 만드는 방법으로 해결할 수 있지만 사후 테스트만으로 부족하면 TDD로 움직이기 시작해야 합니다.

백엔드 엔지니어는 프론트엔드 엔지니어처럼 코드의 가변성이 높지는 않습니다. 또 코드 품질이 더 중요합니다. 때로는 성능을 위해 가독성을 지불하는 상황이 있습니다. 성능을 위해 가독성을 지불할 때 테스트를 도입하는 것은 좋습니다. 테스트 코드가 어떻게 동작할지 문서역할을 해줄 것입니다.

TDD 방식으로 분명한 요구사항을 정하고 달성하는 방식으로 업무를 관리하는 방식으로 접근해도 괜찮습니다.

코드 규모가 크고 오래된 경우라면 테스트를 잘 활용하는 것이 좋습니다. 리팩토링하면서 동일한 입출력 결과를 보증하기 위한 방법이 테스트입니다.

# 테스트 개념

테스트는 도구를 잘 다루기 위해 테스트를 위한 개념이 필요한 부분도 있습니다.

## test suite

## 유닛 테스트

# Jest

[Why Vitest Is Better Than Jest - Web Dev Simplified](https://www.youtube.com/watch?v=7f-71kYhK00)

[Jest 강좌 #1 소개, 설치 및 간단한 테스트 작성 - 자바스크립트 테스트 프레임워크](https://www.youtube.com/watch?v=g4MdUjxA-S4)
[Jest 강좌 #2 유용한 Matchers - 자바스크립트 테스트 프레임워크](https://www.youtube.com/watch?v=_36vt4fBjOQ)
[Jest 강좌 #3 비동기 코드 테스트 - 자바스크립트 테스트 프레임워크](https://www.youtube.com/watch?v=snFRUjYR6j4)
[Jest 강좌 #4 테스트 전후 작업 - 자바스크립트 테스트 프레임워크](https://www.youtube.com/watch?v=TRZ2XdmctSQ&t=611s)
[Jest 강좌 #5 목 함수(Mock Functions) - 자바스크립트 테스트 프레임워크](https://www.youtube.com/watch?v=9xBjErtlr1o)
[Jest 강좌 #6 리액트 컴포넌트 + 스냅샷 테스트 - 자바스크립트 테스트 프레임워크](https://www.youtube.com/watch?v=g4rMWtPNOr8)

https://www.youtube.com/watch?v=L1dtkLeIz-M&t=936s

https://www.youtube.com/watch?v=8vfQ6SWBZ-U

[Test-Driven Development // Fun TDD Introduction with JavaScript](https://www.youtube.com/watch?v=Jv2uxzhPFl4)

[[OKKYCON: 2018] 이규원 - 당신들의 TDD가 실패하는 이유](https://www.youtube.com/watch?v=UttzAcbuk5k)

[[OKKYCON: 2018] 양완수 - 테스트를 돌보기 위한 매우 간단한 실천 방법들, 그리고 효과](https://www.youtube.com/watch?v=KXxPzokPpbc)

# Vitest

Vitest를 사용하면 좋은 상황입니다. Jest는 성능 문제가 많이 있습니다.
