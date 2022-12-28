# Typescript for Beginners

[Typescript for Beginners](https://github.com/gitdagray/typescript-course)

# Typescript for Beginners - Starter Lesson

[Typescript for Beginners - Starter Lesson](https://www.youtube.com/watch?v=MOO5vrtTUTE)

타입 스크립트란 무엇인가? 툴링과 정적 타입을 제공하는 자바스크립트입니다. 타입 스크립트는 더 좋은 툴링을 제공합니다. 그저 더 좋은 자바스크립트를 작성할 수 있게 해줍니다. C#개발자가 타입스크립트입니다.

관련 아티클
https://survey.stackoverflow.co/2022/#technology-most-popular-technologies

https://dev.to/destrodevshow/typescript-and-c-both-created-by-the-same-person-named-anders-hejlsberg-42g4

타입 스크립트는 자바스크립트로 컴파일 됩니다. 타입스크립트는 자바스크립트이지만 자바스크립트를 더 잘 작성할 수 있게 해주는 언어에 불과합니다.

타입스크립트를 배우기 전에 자바스크립트를 잘 해야 합니다. 마이크로 소프트에서 VScode도 개발하고 타입스크립트도 개발합니다.

```sh
npm i typescript -g
```

타입 스크립트 전역 설치입니다.

```ts
let username = "Jake";
console.log(username);
```

위 코드 main.ts가 있는 디렉토리에서 아래 코드를 실행합니다.

```sh
tsc main.ts
```

main.js로 컴파일해줍니다. 타입 스크립트는 옛날 브라우저를 기준으로 컴파일 시켜주기 때문에 아래처럼 컴파일 해줍니다.

```js
var username = "Jake";
console.log(username);
```

```html
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      body {
        background-color: #000;
      }
    </style>
    <script src="main.js"></script>
  </head>
  <body></body>
</html>
```

위 코드를 라이브 서버로 실행하면 컴파일 된 자바스크립트가 실행됩니다.

하지만 문제가 있습니다. 컴파일을 여러번 계속 다시 해줘야 합니다. 다른 방법이 있습니다.

```sh
tsc main.ts -w
```

위 명령으로 처리하면 됩니다. SCSS를 실시간 컴파일 하듯이 처리합니다.

일반적으로 프로젝트를 만들 때는 아래 디렉토리 구조를 갖고 있습니다.

```txt
빌드/
    index.html
src/
    main.ts
tsconfig.json
```

```sh
tsc --init # tsconfig.json 설치
```

tsconfig.json은 컴파일러 설정하는 파일입니다. 기준 위치와 출력 위치를 정하는 것으로 시작할 수 있습니다.

`"rootDir": "./src"`, `"outDir": "./build/js"`으로 입력과 출력 위치를 결정할 수 있습니다.

```json
"include": ["src"]
```

위로 설정하면 src 파일에서 생성한 것만 컴파일하도록 설정할 수 있습니다.

```ts
let a = 12;
let b = "6";
let c = 2;

console.log(a / b);
```

정적 언어에서는 불가능한 계산입니다. 자바스크립트는 가능하지만 타입스크립트는 에러를 돌려줍니다.

과거 자바스크립트 프로젝트랑 하위 호환하면서 작업 진행은 가능합니다.

`noEmitOnError` 설정을 확성화하는 것으로 에러가 발생할 때 컴파일을 정지시킬 수 있습니다.

```sh
tsc --noEmitOnError -w
```

으로 컴파일 설정을 해둘 수 있습니다.
