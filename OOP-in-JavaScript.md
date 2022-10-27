# 시작하기

ES5 방식이 있고 ES6 방식이 있습니다. ES5는 면접질문용입니다. ES6는 2015년부터라고 한다면 적용하고 바뀌는 기간까지 생각해볼 필요가 있습니다. ES5 객체지향 프로그래밍은 레거시로 리팩토링할 대상이 됩니다. 이런 리팩토링 업무에 투입이 적합한지 판단하기 위해 ES5 객체지향 프로그래밍을 질문합니다. 또 자바스크립트에 대한 기초적인 이해를 충분히 가지고 있는지 판단 기준으로도 활용합니다. 하지만 새로운 App을 만단다면 ES6 문법을 사용하면 됩니다. 그래서 ES6 문법으로 자바스크립트의 객체지향 프로그래밍을 배우고 ES5 방식을 다음에 배우겠습니다.

자바스크립트로 OOP를 배울 때는 OOP개념과 자바스크립트 개념 동시에 공부해야 해서 난이도가 더 높습니다.

OOP 배우기 전까지 자료구조랑 알고리즘 배울 자격이 없습니다.

바닐라 자바스크립트로 객체지향 프로그래밍을 시도하는 것은 권장하지 않습니다. 백엔드에서 타입스크립트로 개발하고 있는 상황을 격기 전에 공부해야 합니다.

# freecodecamp
[Intro to Object Oriented Programming - Crash Course](https://www.youtube.com/watch?v=SiBw7os-_zI)

프로그래밍 지식이 어느정도 있다고 가정합니다. 포괄적으로 다양한 언어에 적용할 수 있는 개념을 전달합니다. OOP가 무엇인지 이해하기 위해서는 객체를 이해해야 하고 객체를 이해하려면 원시형 자료형부터 이해를 시작해야 합니다.

원시형은 바이트, 정수, 실수, 부울리안, 더블, 문자(char)입니다. 초기 소프트웨어는 원시형으로 충분했지만 소프트웨어의 규모가 커지면서 정보를 정리할 수단이 필요해졌습니다.

예를 들어 체스 게임을 구현하면 나이트의 위치를 정수로 저장하고 생사여부를 부울리안으로 저장하고 싶을 것입니다. 유사한 정보들과 기능들을 보관하고 서로 참조하게 만드는 것이 좋습니다.

C언어에는 Structure 자료형을 지원합니다. Structure은 다양한 자료형을 보관할 수 있습니다. 정수, 실수, 문자열, 다른 Structure를 보관할 수 있습니다. 하지만 Array는 하나의 자료형만 저장합니다. Structure는 객체의 원형입니다.

Structure의 단점은 메서드를 정의할 수 없었습니다. 참조만 할 수 있었습니다. 객체는 메서드도 담을 수 있습니다.

객체가 가진 속성값은 객체를 생성하면서 할당됩니다. 이것은 init입니다. 나이트의 위치를 정의하면서 인스턴스를 생성하는 것과 같은 논리입니다. 메서드는 공유하지만 위치는 각자 다릅니다.

클래스랑 객체는 다릅니다. 객체는 클래스로 생성하는 것입니다. 그래서 구체적인 하나의 인스턴스(사례)에 해당하게 됩니다.

객체 지향 프로그래밍 4대 개념이 있습니다.

## 캡슐화 Encapsulation

캡슐화는 데이터와 메서드로 묶는 행위입니다. 데이터가 클래스 외부에서 변형이 가해지지 않다록 하는 것입니다. 변형은 메서드를 통해서만 가능하도록 합니다. Getter Setter 메서드 같은 것들이 대표적입니다.

일부 데이터는 Read only여야 합니다. 이런 경우 Getter 메서드만 접근가능하게 정의합니다.

클래스 외부의 정보가 클래스 내부의 정보를 변형하는 것을 막는 것이 중요합니다. 이런 문제는 대규모 프로젝트에서 자주 해결하는 방식입니다.

## 추상화 Abstraction

추상화는 필수적인 부분만 보여주고 자세히 알 필요없는 부분을 가리는 것을 의미합니다. 자동차를 운전하기 위해 자동차의 모든 엔진과 부품의 작동방식을 알 필요가 없습니다. 운전대, 기어, 패달 정도만 알고 제어하는 것처럼 클래스도 상통합니다. 클래스의 세부 동작방식을 필요해지기 전까지 알 필요 없습니다. 이런 특징은 인터페이스(Interface)와 적용(Implementation)으로 구현합니다.

인터페이스는 코드의 섹션이 다른 코드랑 상호작용하는 것을 의미합니다. 클래스속에 숨겨지고 메서드 이외에 제어를 접근할 수 없어야 합니다.

클래스가 각자 독립적으로 서로 의존적이지 않아야 합니다. 코드상 의존성이 발생하면 하나의 객체 혹은 클래스를 수정하면 다른 객체 혹은 클래스를 수정해야 합니다.

추상화는 프로그램을 점진적으로 개발할 수 있게 해줍니다. 상호의존성과 복잡성을 낮추어줍니다.

객체와 객체간 접촉이 발생하는 구체적인 인터페이스만 잘 결정합니다. 그리고 구현하는 방식을 중심으로 고민합니다.

## 상속 Inheritance
상속은 하나의 클래스가 클래스의 다른 특징을 받을 수 있게 해줍니다.

음식 --> 과일 --> 사과

구체화되면서 속성값만 다른 경우가 많을 것입니다.

하위의 클래스는 상위의 클래스의 메서드와 속성값을 접근하려고 합니다.

상속은 1 ~ 3 세대를 넘는 경우는 흔합니다.

상속은 접근변형자(Access Modifiers)

Public은 가장 간단한 접근 변형자입니다. 어디서든 접근할 수 있습니다. 부모 자매관계 상관없이 접근할 수 있습니다. 프로그램 위치랑 무관하게 접근할 수 있습니다.

Privet은 같은 클래스 내에서만 접근할 수 있습니다. 다른 곳에서 접근이 발생하면 안 될 때 사용합니다. 같은 이름을 사용해도 서로 접근할 수 없어서 문제가 안 됩니다.

Protected는 정의된 클래스에서 접근할 수 있습니다. 정의 된 클래스에서 Privet처럼 접근할 수 있습니다.

## 다형성 Polymorphism

다형성은 다양한 형태의 메서드를 받는 것입니다.

동적인 다형성은 프로그램 실행 중에 변형이 발생하는 경우입니다.

서브 클래스 수퍼 클래스 모두 존재할 때입니다. 클래스의 계층에 따라 실행방식이 달라질 수 있습니다.

자동차 클래스의 상송을 받은 슈퍼카 클래스가 존재합니다. 각자 다른 연비를 소모합니다. 운행 메서드를 실행하게 되면 연로 감소 비율 즉 메서드가 각각 다르게 실행됩니다. 이런 메서드가 동적으로 바뀌는 것을 동적 다형성이라고 합니다.

정적 다형성은 컴파일 타임 중에 발생합니다. 여러 같은 이름을 가진 여러 메서드에서 발생합니다. 


## JavaScript Classes Tutorial
[JavaScript Classes Tutorial](https://www.youtube.com/watch?v=2ZphE5HcQPQ)

### The Basics

클래스는 프로그램 로직을 직접 좌우하지 않습니다. 클래스로 생성한 객체가 직접 좌우하게 됩니다.

객체는 2가지 부분을 정의할 수 있습니다. 보유하고 있는 값을 정의하는 것은 인스턴스 속성(property)입니다. 객체가 행하는 것들은 인스턴스 메서드들입니다.

예를 들어 인간은 이름, 나이, 키에 대한 정보를 가질 수 있습니다. 인스턴스 속성은 현재 상태를 알려주는 정보들에 불과합니다. 이런 정보는 인스턴스로 정의할 때마다 고유합니다.

인스턴스 메서드는 인스턴스가 수행하는 작업입니다. 인간으로 치면 대화하고 달리고 점프하는 것입니다. 일반적으로 인스턴스 메서드는 인스턴스 속성값을 활용해서 작업을 수행합니다.

```js
class Rectangle {
    // 생성자 함수
    constructor () {
        console.log("The rectangle is being created.")
    }
}

const myRectangle = new Rectangle();  // The rectangle is being created.
const myRectangle2 = new Rectangle();  // The rectangle is being created.
```

클래스를 정의할 때는 관례적으로 파스칼 케이스로 작성합니다. 대문자로 시작하고 단어마다 대문자로 구분하는 명명입니다.

모든 클래스는 생성자 함수를 반드시 가지고 있습니다. 생성자 함수는 인스턴스 객체 실행 주기 중에 한번만 실행하는 메서드입니다. 한번실행하지만 동시에 생성 중에 실행됩니다.

생성자 함수는 일반적인 함수처럼 행동합니다. 함수처럼 생성할 때마다 `console.log`를 실행했습니다.

```js
class Rectangle {
    constructor () {
        this.width = 4;
        this.height = 8 ;
        this.color = 'blue';
    }
}

const myRectangle = new Rectangle();

console.log(myRectangle);  // Rectangle { width: 4, height: 8, color: 'blue' }
```

생성자 함수는 객체를 설정할 할 때 사용합니다.

`this` 키워드는 현재 객체를 지칭합니다. `console.log`로 보면 object 자료형 속에 3개의 속성값이 담겨있는 것을 볼 수 있습니다. 이 속성값은 이 객체에게 적어도 이 코드 베이스의 프로그램에서는 고유한 값들입니다.

이제 조금더 실용적이게 프로그래밍 중에는 `Rectangle(4, 8, 'blue')`으로 입력해서 이런 속성값을 갖도록 하고 싶습니다. 생성자 함수에 인자를 받아 활용하면 간단하게 구현할 수 있습니다.

```js
class Rectangle {
    constructor (width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }
    getArea() {
        return this.width * this.height
    }
    printDescription() {
        console.log(`I am a rectangle ${this.width} x ${this.height} and I am ${this.color}`);
    }
}

const myRectangle1 = new Rectangle(4, 8, 'blue');
const myRectangle2 = new Rectangle(10, 5, 'red');

console.log(myRectangle1);  // Rectangle { width: 4, height: 8, color: 'blue' }
console.log(myRectangle2);  // Rectangle { width: 10, height: 5, color: 'red' }

console.log(myRectangle1.getArea());  // 32
console.log(myRectangle2.getArea());  // 50

console.log(myRectangle1.printDescription());  // I am a rectangle 4 x 8 and I am blue
console.log(myRectangle2.printDescription());  // I am a rectangle 10 x 5 and I am blue
```

이렇게 생성자 함수에 인자로 넘겨 주면 객체는 고유한 값을 가질 수 있게 됩니다.

메서드는 인스턴스에서 정의한 값을 활용해서 인스턴스의 속성처럼 고유한 값을 반환하게 됩니다.

여기까지 자바스크립트 클래스 문법적인 부분 시작입니다.

### Getters and Setters
Getters and Setters는 클래스의 메서드를 정의하는데 사용합니다. 속성값으로 사용하기 위해서 사용합니다. 속성처럼 보이지만 메서드입니다.

```js
class Square {
    constructor(width) {
        this.width = width;
        this.height = width;
    }
}
```

여기서 정사각형의 넓이를 구하려면 폭과 높이를 곱하면 됩니다. 여기서 getter를 정의해서 달성할 수 있습니다.

```js
class Square {
    constructor(width) {
        this.width = width;
        this.height = width; // 정사각형(Square)은 높이랑 폭이 같습니다.
    }
    // getter 함수 정의
    get area() {
        return this.width * this.height
    }
}

const square1 = new Square(4);
console.log(square1.area)  // 16  메서드인데 뒤에 괄호를 안 붙입니다.
```

이제 Setter 함수입니다. getter랑 비슷하게 작업합니다. Setter는 인스턴스에 새로운 값들을 할당할 수 있습니다. 속성같은 문법으로 수행할 수 있습니다.

```js
class Square {
    constructor(width) {
        this.width = width;
        this.height = width; // 정사각형(Square)은 높이랑 폭이 같습니다.
    }
    // getter 함수 정의
    get area() {
        return this.width * this.height
    }
    set area(area) {
        this.width = Math.sqrt(area);
        this.height = this.width;
    }
}

const square1 = new Square(4);
console.log(square1.area)  // 16  메서드인데 뒤에 괄호를 안 붙입니다.

square1.area = 25; // setter 함수 실행
console.log(square1.width, square1.height)  // 5, 5 setter함수로 인스턴스의 값을 업데이트했습니다.
```

아래 코드로는 메서드를 실행한 횟수를 저장하는 인스턴스를 만들 수 있습니다.

```js
class Square {
    constructor(width) {
        this.width = width;
        this.height = width;
        this.numOfRequestForArea = 0;
    }
    get area() {
        this.numOfRequestForArea ++; // 실행할 때마다 실행횟수 기록
        return this.width * this.height
    }
    set area(area) {
        this.width = Math.sqrt(area);
        this.height = this.width;
    }
}

const square1 = new Square(4);

console.log(square1.area)
console.log(square1.area)
console.log(square1.area)
console.log(square1.area)
console.log(square1.numOfRequestForArea) // 4
```

### Static Methods


정적인 메서드입니다. 인스턴스 객체의 메서드가 아닙니다. 클래스를 통해서 접근합니다. 대표적으로 `helper` 메서드입니다. 인스턴스 객체에 묶여있지 않지만 유틸적으로 유용합니다.

```js
class Square {
    constructor(width) {
        this.width = width;
        this.height = width;
    }
    static equals (a, b){
        return a.width * a.height === b.width * b.height
    }
    static isValidDimensions(width, height) {
        return width === height
    }
}

const square1 = new Square(8);
const square2 = new Square(4);

console.log(square1)  // Square { width: 8, height: 8 }
console.log(Square.equals(square1, square2))  // false
console.log(Square.isValidDimensions(6, 6))  // true
```

정적인 메서드는 인스턴스에 사용할 수 없습니다. 클래스의 메서드로 접근할 수 있습니다.

정적 메서드는 `this` 키워드가 필요하지 않습니다.

### Inheritance and Extends

자바스크립트에서는 `Extends` 키워드가 상속을 구현합니다.

공통적인 특징을 가진 부모클래스를 만들고 부모의 능력에 추가 능력까지 있는 자식클래스를 만들 때 사용합니다.

분류학적으로 접근하는 것이 기본적입니다. 사람을 먼저 정의한 추상적인 것입니다. 상속받을 사람의 직업은 구체적입니다.

```js
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

function developSoftware(programers) {
    
}
```
`Person` -> `developSoftware`으로 상속 시켜야 합니다.


```js
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    describe() {
        console.log(`I am ${this.name} and I am ${this.age} old`)
    }
}

class Programer extends Person {
    constructor(name, age, yearsOfExperience) {
        super(name, age) // 메서드를 통해 상속할 프로퍼티를 받습니다.

        // 수동으로 만드는 영역입니다.
        this.yearsOfExperience = yearsOfExperience;
    }
}

const person1 = new Person('jeff', 45);
const programer1 = new Programer('Dom', 56, 12);

console.log(person1)  // Person { name: 'jeff', age: 45 }
console.log(programer1)  // Programer { name: 'Dom', age: 56, yearsOfExperience: 12 }
```

속성도 상속받지만 메서드도 같이 상속받습니다.

자바스크립트의 특징답게 프로토타입이 `Person`으로부터 체이닝 된 것입니다.

상속은 한 방향으로만 갑니다.

```js
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    describe() {
        console.log(`I am ${this.name} and I am ${this.age} old`)
    }
}

class Programer extends Person {
    constructor(name, age, yearsOfExperience) {
        super(name, age) // 메서드를 통해 상속할 프로퍼티를 받습니다.

        // 수동으로 만드는 영역입니다.
        this.yearsOfExperience = yearsOfExperience;
    }
    code() {
        console.log(`${this.name} is coding`)
    }
}

function developSoftware(programers) {
    for (let programer of programers) {
        programer.code();
    }
}

const programers = [
    new Programer('Dom', 56, 12),
    new Programer('jeff', 28, 2),
];

developSoftware(programers)
// Dom is coding
// jeff is coding
```

### Polymorphism

다형성은 부모에서 자식으로 상속하면서 메서드를 다시 정의하는 것입니다.

```js
class Animal {
    constructor(name) {
        this.name =name;
    }
    makeSound() { // 다변형성을 이루기 위해 바꿀 메서드입니다.
        console.log('Generic Animal Sound!')
    }
}

class Dog extends Animal {
    constructor(name) {
        super(name);
    }
    makeSound() { // 메서드를 이렇게 오버라이딩(덮어쓰기)하는 행위가 다변형성입니다.
        console.log('Woof! Woof!')
    }
}

const a1 = new Animal('DOM');
const a2 = new Dog('Jeff');
a1.makeSound()  // Generic Animal Sound!
a2.makeSound()  // Woof! Woof!
```

자바스크립트의 특징 중 하나는 없으면 외부환경을 참조하는 것이랑 유사하게 메서드도 없으면 부모의 메서드를 참조합니다.

```js
class Animal {
    constructor(name) {
        this.name =name;
    }
    makeSound() { // 다변형성을 이루기 위해 바꿀 메서드입니다.
        console.log('Generic Animal Sound!')
    }
}

class Dog extends Animal {
    constructor(name) {
        super(name);
    }
    // makeSound() { // 메서드를 이렇게 오버라이딩(덮어쓰기)하는 행위가 다변형성입니다.
    //     console.log('Woof! Woof!')
    // }
}

const a1 = new Animal('DOM');
const a2 = new Dog('Jeff');
a1.makeSound()  // Generic Animal Sound!
a2.makeSound()  // Generic Animal Sound!
```
```js
class Animal {
    constructor(name) {
        this.name =name;
    }
    makeSound() { // 다변형성을 이루기 위해 바꿀 메서드입니다.
        console.log('Generic Animal Sound!')
    }
}

class Dog extends Animal {
    constructor(name) {
        super(name);
    }
    makeSound() {
        super.makeSound()  // 상속받은 메서드를 먼저 사용하고 난 후에 자식 클래스의 메서드를 실행하게 만듭니다.
        console.log('Woof! Woof!')
    }
}

const a1 = new Animal('DOM');
const a2 = new Dog('Jeff');
a1.makeSound()  // Generic Animal Sound!
a2.makeSound()  // Generic Animal Sound!  Woof! Woof!
```

메서드를 상속하고 자식에서 확징시키는 방식이 더 일반적으로 코드를 작성하는 방식입니다.

### Classes in Practice

자바스크립트의 클래스를 활용해서 html `ul`태그의 `li`태그를 CRUD 하는 연습입니다.



# 노마드 코더
[객체지향 프로그래밍? 문과도 이해쌉가능. 10분컷.](https://www.youtube.com/watch?v=cg1xvFy1JQQ)

객체지향 프로그래밍은 코드를 정리하는 프로그래밍 패러다임입니다. Java는 객체지향 프로그래밍을 기본 전제로 합니다. Python, JavaScript는 기본적으로 지원해줍니다.

```js
const playerOne = {
    // 캐릭터 속성 & 메서드
}
const playerTwo = {
    // 캐릭터 속성 & 메서드
}
const playerThree = {
    // 캐릭터 속성 & 메서드
}
```
이렇게 작성하면 하나 변형이 필요할 때 각각 모두 바꿔야 합니다. 코드 유지보수하기 상당히 나쁩니다.

클래스를 통해 찍어내는 것으로 유지보수하기 간단하게 만들 수 있습니다.

```js
class Player {
  constructor(name, health, skill) {
    this.name = name;
    this.health = health;
    this.skill = skill;
    this.xp = 0;
  }
  sayHello() {
    return `Hi, my name is ${this.name} and my skill is ${this.skill}`
  }
  takeHit() {
    this.health = this.health - 5;
  }
}

const elon = new Player("name", 90, "something");
console.log(elon.sayHello());  // Hi, my name is name and my skill is something 
```

클래스는 컨스트런터 이외 다양한 메서드를 가질 수 있습니다.

OOP에서 중요한 것은 상속입니다. 확장한다는 개념이 더 좋을 수 있습니다. 반복하는 부분은 부모에게 넘겨두고 달라지는 인스턴스에서 정의합니다.

객체에 상속이 없으면 코드는 이렇게 생겼습니다.

```js
class Human {
  constructor(name) {
    this.name = name;
    this.legs = 2;
    this.arms = 2;
  }
}

class Baby {
  constructor(name) {
    this.name = name;
    this.legs = 2;
    this.arms = 2;
  }
  cry() {
    return `waa waa`
  }
}

class Teenager {
  constructor(name) {
    this.name = name;
    this.legs = 2;
    this.arms = 2;
  }
  curse() {
    return `@$%#$@!`
  }
}
```
`constructor`부분에 중복이 발생하고 있습니다. 이런 중복은 상속을 통해서 제거해야 합니다.


```js
class Human {
  constructor(name) {
    this.name = name;
    this.legs = 2;
    this.arms = 2;
  }
}

class Baby extends Human {
  constructor(name) {
    super(name);
    this.cute = true;
  }
  cry() {
    return `waa waa`
  }
}

class Teenager extends Human {
  constructor(name) {
    super(name);
    this.emotional = true;
  }
  curse() {
    return `@$%#$@!`
  }
}
```

상속을 시키려면 `extends`와 `super` 메서드를 `constructor` 속에서 사용해야 합니다.


[개발자 전공필수? 객체지향 개념정리 10분컷.](https://www.youtube.com/watch?v=IeLWSKq0xIQ)

캡슐화는 클래스에 데이터를 넣는 것을 말합니다. this 키워드를 통해 클래스는 데이터를 스스로 접근할 수 있습니다.
```ts
class Entrepreneur {
  constructor (
    private firstName: string,
    private lastNmae: string,
    private shares: number,
    private company: string,
  ) {}
  public calculateNetWorth() {
    return this.shares * getSharePrice(this.company)
  }
}

const elon = new Entrepreneur("elon", "musk", 170, "TSLA")

// 이런 뮤테이션 불가능
elon.shares = 0;
elon.company = 'AMZN';
```

캡슐화는 정보의 접근과 변형을 결정합니다.

상속은 작은 클래스 단위로 나누어 재사용성을 높입니다.

```ts
class Entrepreneur {
  constructor (
    private firstName: string,
    private lastNmae: string,
    private shares: number,
    private company: string,
  ) {}
  public calculateNetWorth() {
    return this.shares * getSharePrice(this.company)
  }
}

class Actor {
  constructor(
    private firstName: string,
    private lastNmae: string,
    private oscars: number,
    private age: number,
  ) {}
}

```

이론 코드를 아래처럼 더 단순화 시킬 수 있습니다.
```ts
class Person {
  constructor(private firstName: string, private lastNmae: string) {}
  public sayHi() {
    return `Hi, my name is ${this.firstName} ${this.lastNmae}`;
  }
}

class Entrepreneur extends Person {
  constructor(
    firstName: string,
    lastNmae: string,
    private shares: number,
    private company: string
  ) {
    super(firstName, lastNmae);
  }
}

class Actor extends Person {
  constructor(
    firstName: string,
    lastNmae: string,
    private oscars: number,
    private age: number
  ) {
    super(firstName, lastNmae);
  }
}
```

추상화는 구현 세부 정보를 숨기는 일반 인터페이스를 지정하는 행위입니다. 인터페이스는 코드의 생산자가 보여줍니다. 반면 동작하는 구현방식은 숨깁니다.

코드는 보통 메서드로 제어할 수 있게 드러냅니다.

```ts
class BetterArray {
  private items: string[];
  constructor() {
    this.items = [];
  }
  public getItems() {
    return [...this.items];
  }
  public addItem(item: string) {
    this.items.push(item);
  }
  public removeItem(itemToDelete: string) {
    this.items = this.items.filter((item) => item !== itemToDelete);
  }
  public modifyItem(itemToChange: string, newValue: string) {
    const index = this.items.indexOf(itemToChange);
    if (index !== -1) {
      this.items[index] = newValue;
    }
  }
}
```
이런 코드로 추상화를 했습니다.

```ts
const arr = new BetterArray();
arr.addItem("I love");
arr.addItem("Javascript");
arr.modifyItem("Javascript", "Typescript");
```

이제 `public`으로 공개된 메서드로 인스턴스로 제어할 수 있습니다. 이 인스턴스를 제어할 때 함수 내용을 일일이 알 필요는 없습니다.

다형성은 다양한 측면 혹은 형태학의 결합입니다. 

```ts
class Person {
  public sayHi() {
    return "hi";
  }
  public sayBye() {
    return "bye";
  }
}
class 한국인 extends Person {}
class Italian extends Person {}

const 박 = new 한국인();
const mario = new Italian();

박.sayHi();
mario.sayHi();
```

```ts
class 한국인 extends Person{
  public sayHi(){
  	return "안녕!";
  }
}
```
이렇게 되면 메서드 오버라이딩으로 메서드를 덮어쓴 것입니다. 하지만 반환하는 자료형은 같도록 타입스크립트가 막고 있습니다.



# Web Dev Simplified

[What are Classes, Objects, and Constructors?](https://www.youtube.com/watch?v=5AWRivBk0Gw)

클래스는 설계도에 불과합니다. 실제 데이터를 가지고 있지 않습니다. 어떻게 담길지만 설계합니다.

```js
class House {
    constructor(color) {
        this.color = color;  // 객체에만 정보가 남도록 합니다.
    }
    getFurniture() { // 메서드입니다.
        return `sofa`
    }
}

const houseObject1 = new House('red')
const houseObject2 = new House('blue')

console.log(houseObject1.color)
console.log(houseObject1.getFurniture())

console.log(houseObject2.color)
console.log(houseObject2.getFurniture())

// red
// sofa
// blue
// sofa
```

# Fireship

[Object Oriented vs Functional Programming with TypeScript](https://www.youtube.com/watch?v=fsVL_xrYO0w)


# 코딩애플

[객체지향 Class 문법 10분만에 이해시켜줌 (자바스크립트)](https://www.youtube.com/watch?v=dHrI-_xq1Vo)

# 생활코딩

객체 지향 프로그래밍는 처음 접하고 공부할 때 철학적이고 심오한 느낌을 많이 받습니다. 물론 철학적인 주제이기는 합니다.

객체는 상태(프로퍼티 값)과 행동(메서드)으로 이루어져있습니다. 상태와 행동이라는 단어도 사실 매우 추상적인 느낌이 강합니다.

소프트웨어는 여러개의 로직들의 합입니다.

소프트웨어 개발하는 과정에서 코드량이 많아지고 로직들이 복잡해집니다. 이런 로직과 코드량이 많아지면서 구분하고 정리가 필요해집니다.

스파게티코드에 가까워지는 것을 막기위해 다양한 방식으로 문제를 해결할 수 있습니다. 이중에 객체지향 프로그래밍이 방법 중 하나입니다.

객체를 만들어서 구체적인 문법적인 기능이 언어에서 지원합니다. 하나의 객체는 존재하는 취지에 따라서 기능과 연관된 메소드와 값을 담은 것이고 연관성이 없는 것과 구분하기 위한 존재입니다.

> 쉽게 생각하자. 객체는 변수와 메소드를 그룹핑한 것이다.
> - 생활코딩

객체지향 프로그래밍을 공부할 때는 2가지 부분으로 공부할 수 있습니다. 하나는 문법이고 다른 하나는 설계입니다.

처음 공부를 시작할 때는 문법은 무조건 배우게 됩니다. 그리고 쉬운 부분입니다. 어려운 것은 현실을 잘 반영한 소프트웨어를 개발하는 것 이것은 설계하는 것입니다.

설계는 현실의 특징을 잘 포착해서 소프트웨어에 잘 담는 것입니다. 현실은 복잡하고 소프트웨어는 단순합니다. 위성사진은 구체적인 현실입니다. 지하철 노선도는 추상화되었습니다. 지하철의 탑승자의 관심은 거리가 아닙니다. 환승, 순서, 종점을 알고싶어합니다. 복잡한 현실의 일부를 가리고 추상화시켰습니다.

추상화는 객체지향 프로그래밍에서만 나오는 개념은 아닙니다.

좋은 설계는 지혜와 경험의 문제입니다. 스스로 추구하는 것입니다. 우리나라가 직무역량으로 좋아하는 센스입니다.

문법을 먼저 배워야 설계원칙도 익힐 수 있습니다.

객체지향 프로그래밍의 개념은 생각보다 넓습니다.

객체를 만들면 다른 곳에 재사용하기 쉽습니다. 객체가 다른 여러곳에서 부품처럼 활용하게 됩니다.

객체로 코드를 묶어서 코드량을 줄이고 코드 가독성을 높이기 위한 방법입니다. 연관된 것을 묶고 분류하고 부품화합니다.

부품화를 한다고 모든 곳에서 재사용할 수 있는 것은 아닙니다.

제대로 된 부품이면 어떻게 동작하는지 몰라도 사용할 수 있어야 합니다. 객체의 내부의 동작방법을 숨기고 사용자에게 사용법만 노출합니다. 사용방법은 객체의 메소드를 통합니다. 메소드의 사용법만 알면 객체를 다룰 수 있습니다. 이것을 보고 정보의 은닉화 캡슐화라고 합니다.

좋은 부품의 또 다른 특징은 인터페이스를 제공합니다. 부품이 서로 교환할 수 있어야 합니다. 장치와 장치를 연결하는 접점을 보고 인터페이스라고 합니다. 서로 사용할 수 있는 관계와 없는 관계를 프로그래밍적으로 언어적으로 가능합니다.

비유는 문제가 많습니다. 의도하지 않은 점까지 전달될 가능성이 있습니다.

## 생성자와 new
자바스크립트는 프로토타입 기반 언어입니다. 이론 이유로 객체지향 언어의 문법을 비슷하게 사용하지만 사실은 함수형 언어의 특징을 가지고 있습니다. 기존 객체지향 프로그래밍 방식을 알면 오히려 혼란스러울 수 있습니다.

자바스크립트가 추구하는 객체지향 프로그래밍 언어는 아주 자유롭습니다. 다른 언어는 정적이고 엄격하게 규제하지만 자바스크립트는 위험할 정도로 자유롭습니다.

자바스크립트에서 객체를 만들 때는 `{}`으로 만듭니다.

```js
const person = {};

person.name = "Jake";
person.introduce = () => `my name is ${this.name}`

console.log(person.name);
console.log(person.introduce());

// Jake
// my name is undefined
```

객체를 정의하는 중간이 떨어져있습니다. 그래서 `undefined`을 돌려주었습니다.
```js
const person = {
    name: "Jake",
    introduce: function() {
        return `my name is ${this.name}`
    }
};

console.log(person.name);
console.log(person.introduce());

// Jake
// my name is Jake
```

이렇게 되면 `this`가 올바르게 처보고 있으면서 `undefined`을 출력하지 않습니다.

```js
const person1 = {
    name: "Jake",
    introduce: function() {
        return `my name is ${this.name}`
    }
};
const person2 = {
    name: "fin",
    introduce: function() {
        return `my name is ${this.name}`
    }
};

console.log(person1.name);
console.log(person1.introduce());
console.log(person2.name);
console.log(person2.introduce());

// Jake
// my name is Jake
// fin
// my name is fin
```

이렇게 작성하면 `this`가 보는 문제는 없지만 중복이 발생합니다.

자바스크립트는 함수형 언어처럼 취급하는 게 좋습니다. 자바스크립트에게 함수의 위상은 높습니다.

생성자함수의 역할은 객체를 만드는 함수입니다.

```js
function Person(){}
var p = new Person();  // 생성자 함수 p 식별자는 빈 object가 됩니다.
p.name = 'Jake';
p.introduce = function(){
    return 'My name is '+this.name; 
}

console.log(p.name);
console.log(p.introduce());

// Jake
// my name is Jake
```

생성자 함수를 통해 `p` 식별자는 객체를 할 당하게 됩니다. 함수는 객체를 실행하는 것만 아니라 객체를 생성하는 주체가 됩니다.

```js
function Person(name){
    this.name = name;
    this.introduce = function() {
        return 'My name is '+this.name; 
    }
}
var p1 = new Person('Jake');
var p2 = new Person('fin');

console.log(p1.name);
console.log(p1.introduce());
console.log(p2.name);
console.log(p2.introduce());

// Jake
// My name is Jake
// fin
// My name is fin
```

이렇게 생성자 함수를 만들면 장점은 여러개의 같은 객체에 대해서 중복을 제거할 수 있습니다. 생성자를 통해서 객체를 만들면 객체를 초기화를 하면서 만들어서 훨신더 코드가 간결해집니다.


## 전역객체

```js
// 함수 정의입니다.
function func(){
  alert('Hello?');
}
func(); // 함수 호출입니다.
window.func(); // 점(.)을 사용했다는 것 자체는 속성으로 메소드로 호출했습니다.
```
자바스크립트에서 함수를 정의할 때부터 전역객체의 메소드가 됩니다. 사실 지금까지 전역객체를 생략하고 암시적으로 명령을 내렸던 것입니다. 모든 변수와 함수는 전역객체의 프로퍼티에 불과합니다.

자바스크립트는 결국 객체지향 언어입니다. 모든 것은 전역객체 안에 속하기 때문에 그렇습니다.

```js
var o = {'func':function(){
    alert('Hello?');
}}
o.func();
window.o.func();
```
`o`라는 객체도 전역객체를 생략하고 지금까지 사용했다는 것입니다. 전역객체 API를 접근할 수 있습니다. 전역객체는 실행환경에 따라 다릅니다. node.js의 전역객체와 브라우저의 전역객체는 각각 다릅니다. 브라우저는 `window`이고 node.js는 `global`입니다.

자바스크립트의 모든 객체는 전역객체의 프로퍼티입니다. `this`를 이해하기 전에 중요한 내용입니다.

## this

## 상속

## prototype

## 표준 내장 객체의 확장

## Object

## 데이터 타입

## 참조

# MDN

함수선언식과 표현식은 다릅니다.
