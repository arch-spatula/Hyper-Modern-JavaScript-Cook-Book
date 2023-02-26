# 디자인 패턴에 대해서

에릭 감마의 ‘GoF의 디자인 패턴’, 그래디 부치의 ‘UML을 활용한 객체지향 분석 설계’을 참고해야 합니다.

https://refactoring.guru/design-patterns/

# 10 Design Patterns Explained in 10 Minutes

[10 Design Patterns Explained in 10 Minutes](https://www.youtube.com/watch?v=tv-_1er1mWI)

https://fireship.io/lessons/typescript-design-patterns/

디자인 패턴의 분류는 다양합니다.

Creational: Singleton, Prototype, Builder, Factory

structural: Facade, Proxy

Behavioral: Iterator, Observer, Mediator, State

대략 이렇게 됩니다.

생성패턴은 객체를 어떻게 생성해야 하는지 구조패턴은 객체끼리 어떤 관계를 가져야 하는지 행동패턴은 객체끼리 어떻게 상호작용하는지 다룹니다. 언어의 문법을 익히는 수준을 뛰어넘어 문제를 해결할 수 있어야 입문자에서 초보 프로그래머가 될 수 있습니다.

디자인 패턴은 복붙할 수 없습니다. 머리를 써서 직접 만들어야 합니다.

## 싱글튼(Singleton)

한번만 생성되는 객체입니다. 보통 전역으로 접근하고 활용할 때 사용합니다.

```ts
class Settings {
  static instance: Settings;
  public readonly mode = "dark";

  // prevent new with private constructor
  private constructor() {}

  static getInstance(): Settings {
    if (!Settings.instance) {
      Settings.instance = new Settings();
    }

    return Settings.instance;
  }
}

const settings = new Settings(); // throws error
const settings = Settings.getInstance();
```

한번만 객체를 생성하는 것은 이미 자바스크립트가 지원하고 있습니다. 꼭 굳이 바퀴를 다시 만들 필요는 없습니다.

```js
const settings = {
  dark: true,
};
```

이렇게 작성된 코드에서 `settings` 객체는 이미 1번만 생성됩니다. 언어가 기본적으로 제공하는 기능들을 활용하고 없을 때 만들도록 합니다.

## 프로토타입(Prototype)

고급스럽게 복제라고 말하는 것입니다. OOP를 하면 상속이라는 개념에 익숙할 것입니다. 하지만 자바스크립트처럼 극단적으로 동적인 언어에서는 지양할 프로그래밍 패턴입니다. 프로토타입 패턴은 객체와 객체간 상속을 하는 방법입니다.

```ts
const zombie = {
  eatBrains() {
    return "yum 🧠";
  },
};

const chad = Object.create(zombie, { name: { value: "chad" } });

// chad.__proto__;  // __proto__은 더이상 권장하지 않는 방식입니다.
Object.getPrototypeOf(chad);

const babyChad = Object.create(chad, { baby: { value: true } });
```

`zombie` 객체를 `chad` 객체에게 상속시키는 방법입니다. `chad`를 `babyChad`에게 상속했습니다.

자바스크립트는 프로토타입 기반언어답게 프로토타입체이닝으로 타고 올라가 부모의 메서드에 접근하고 활용할 수 있습니다.

## 빌더 패턴(Builder)

`constructor`로 처음부터 생성하기 전에 메서드로 속성값을 지정하도록 합니다.

```ts
class HotDog {
  constructor(
    public bread: string,
    public ketchup?: boolean,
    public mustard?: boolean,
    public kraut?: boolean
  ) {}

  addKetchup() {
    this.ketchup = true;
    return this;
  }
  addMustard() {
    this.mustard = true;
    return this;
  }
  addKraut() {
    this.kraut = true;
    return this;
  }
}

const myLunch = new HotDog("gluten free").addKetchup().addMustard().addKraut();
```

## 팩토리(Factory)

```ts
class IOSButton {}

class AndroidButton {}

// Without Factory
const button1 = os === "ios" ? new IOSButton() : new AndroidButton();
const button2 = os === "ios" ? new IOSButton() : new AndroidButton();

class ButtonFactory {
  createButton(os: string): IOSButton | AndroidButton {
    if (os === "ios") {
      return new IOSButton();
    } else {
      return new AndroidButton();
    }
  }
}

// With Factory
const factory = new ButtonFactory();
const btn1 = factory.createButton(os);
const btn2 = factory.createButton(os);
```

`new` 키워드로 수동으로 생성하지 않고 메서드 혹은 함수를 통해서 객체를 생성하는 패턴입니다.

## 파사드(Facade)

파사드는 건물의 외형을 의미합니다. 건물을 이용하는 사용자는 내부의 복잡성을 굳이 알 필요는 없습니다. 파사드는 구체적인 동작방식을 가리는 API에 불과합니다.

일일이 만들어 사용할 필요 없게 대부분의 패키지는 파사드에 해당할 수 있습니다.

```ts
class PlumbingSystem {
  // low evel access to plubming system
  setPressure(v: number) {}
  turnOn() {}
  turnOff() {}
}

class ElectricalSystem {
  // low evel access to electrical system
  setVoltage(v: number) {}
  turnOn() {}
  turnOff() {}
}

class House {
  private plumbing = new PlumbingSystem();
  private electrical = new ElectricalSystem();

  public turnOnSystems() {
    this.electrical.setVoltage(120);
    this.electrical.turnOn();
    this.plumbing.setPressure(500);
    this.plumbing.turnOn();
  }

  public shutDown() {
    this.plumbing.turnOff();
    this.electrical.turnOff();
  }
}

const client = new House();
client.turnOnSystems();
client.shutDown();
```

## 프록시(Proxy)

프록시는 거대한 객체를 복제하기에는 메모리 사용량이 너무 많을 때 사용합니다. 목적으로 한 객체(target) 대신에 유사한 객체(proxy)로 대체한다는 의미합니다.

```js
const original = { name: "jeff" };

const reactive = new Proxy(original, {
  get(target, key) {
    console.log("Tracking: ", key);
    return target[key];
  },
  set(target, key, value) {
    console.log("updating UI...");
    return Reflect.set(target, key, value);
  },
});

reactive.name; // 'Tracking: name'

reactive.name = "bob"; // 'updating UI...'
```

vue.js에서 사용하는 방식이라고 합니다.

# 이터래이터(Iterator)

대부분의 모던 언어는 순회를 지원합니다. 자바스크립트도 존재하지만 약간 부족합니다.

```ts
function range(start: number, end: number, step = 1) {
  return {
    [Symbol.iterator]() {
      return this;
    },
    next() {
      if (start < end) {
        start = start + step;
        return { value: start, done: false };
      }
      return { done: true, value: end };
    },
  };
}

for (const n of range(0, 100, 5)) {
  console.log(n);
}
```

프로그램 중에 정의한 함수를 다른 곳에서 호출해 활용하기 때문에 pull-base 시스템입니다.

## 옵저버(Observer)

일대다 관계입니다. 하나의 객체에 다른 객체들이 이벤트를 구독하게 만든 패턴입니다. 옵저버는 push-base 시스템에 해당합니다. 현실에서는 일반적인 앱들이 모두 이에 해당합니다. 데이터베이스에 값의 변화는 다른 환경에 모두 반영되는 것과 같은 이치입니다.

```ts
import { Subject } from "rxjs";

const news = new Subject();

const tv1 = news.subscribe((v) => console.log(v + "via Den TV"));
const tv2 = news.subscribe((v) => console.log(v + "via Batcave TV"));
const tv3 = news.subscribe((v) => console.log(v + "via Airport TV"));

news.next("Breaking news: ");
news.next("The war is over ");

tv1.unsubscribe();
```

## 중재자(Mediator)

다대다 관계로 객체끼리 서로 통신해야 할 때 활용합니다. 하지만 중앙에 통제로 다대일로 제어하도록 합니다.

```ts
import express from "express";
const app = express();

// Middleware logic
function mediator(req, res, next) {
  console.log("Request Type:", req.method);
  next();
}

app.use(mediator);

// Mediator runs before each route handler
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/about", (req, res) => {
  res.send("About");
});
```

미들웨어를 만들 때 자주 활용합니다.

# 상태(State)

```ts
interface State {
  think(): string;
}

class HappyState implements State {
  think() {
    return "I am happy 🙂";
  }
}

class SadState implements State {
  think() {
    return "I am sad 🙁";
  }
}

class Human {
  state: State;

  constructor() {
    this.state = new HappyState();
  }

  changeState(state) {
    this.state = state;
  }

  think() {
    return this.state.think();
  }
}

const human = new Human();
console.log(human.think());
human.changeState(new SadState());
console.log(human.think());
```

상태에 따라 객체가 다르게 행동하도록 설정하는 패턴입니다. 단순한 조건문으로 만들지말고 상태를 통해 제어합니다.
