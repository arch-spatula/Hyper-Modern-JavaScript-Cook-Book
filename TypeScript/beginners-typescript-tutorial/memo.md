https://github.com/total-typescript/beginners-typescript-tutorial

https://www.totaltypescript.com/tutorials/beginners-typescript/implicit-any-type-error

# The Implicit ‘Any’ Type Error(절대적인 any 자료형 에러)

```sh
npm run exercise 01
```

```ts
import { expect, it } from "vitest";

export const addTwoNumbers = (a: number, b: number): number => {
  return a + b;
};

it("Should add the two numbers together", () => {
  expect(addTwoNumbers(2, 4)).toEqual(6);
  expect(addTwoNumbers(10, 10)).toEqual(20);
});
```

타입스크립트는 함수를 생성할 때마다 매개변수의 자료형을 정해줘야 합니다. 함수를 만들 때 각 매개변수마다 정해줘야 합니다. 엄격모드에서 피드백을 제공합니다. any 타입은 피할 타입인데 사용하고 있다고 경고해주는 것입니다.

단연히 타입스크립트는 엄격모드를 활성화 해야 합니다. 안하는 사람도 있지만 초심자일수록 더욱더 엄격모드를 권장합니다.

# Working with Object Params(객체 매개변수 다루기)

```ts
import { expect, it } from "vitest";

export const addTwoNumbers = (params) => {
  return params.first + params.second;
};

it("Should add the two numbers together", () => {
  expect(
    addTwoNumbers({
      first: 2,
      second: 4,
    })
  ).toEqual(6);

  expect(
    addTwoNumbers({
      first: 10,
      second: 20,
    })
  ).toEqual(30);
});
```

이 에러를 해결하도록 합니다.

```ts
import { expect, it } from "vitest";

interface numbers {
  first: number;
  second: number;
}

export const addTwoNumbers = (params: numbers): number => {
  return params.first + params.second;
};

it("Should add the two numbers together", () => {
  expect(
    addTwoNumbers({
      first: 2,
      second: 4,
    })
  ).toEqual(6);

  expect(
    addTwoNumbers({
      first: 10,
      second: 20,
    })
  ).toEqual(30);
});
```

이렇게 풀었습니다. 이 문제를 풀수 있을 때는 다양하게 풀 수 있습니다. 객체의 각각의 요소를 인라인으로 해결할 수 있습니다.

```ts
import { expect, it } from "vitest";

export const addTwoNumbers = (params: { first: number; second: number }) => {
  return params.first + params.second;
};

it("Should add the two numbers together", () => {
  expect(
    addTwoNumbers({
      first: 2,
      second: 4,
    })
  ).toEqual(6);

  expect(
    addTwoNumbers({
      first: 10,
      second: 20,
    })
  ).toEqual(30);
});
```

```ts
import { expect, it } from "vitest";

type AddTwoNumbersArgs = {
  first: number;
  second: number;
};

export const addTwoNumbers = (params: AddTwoNumbersArgs) => {
  return params.first + params.second;
};

it("Should add the two numbers together", () => {
  expect(
    addTwoNumbers({
      first: 2,
      second: 4,
    })
  ).toEqual(6);

  expect(
    addTwoNumbers({
      first: 10,
      second: 20,
    })
  ).toEqual(30);
});
```

이것은 2번째 방법입니다. 마지막 방법은 이미 한 풀이입니다.

interface의 단점은 객체에만 적용될 수 있습니다.

interface이든 type을 사용하든 취향 문제입니다.

타입 엘리어스(별칭)를 사용하면 읽기 더 쉽습니다. 타입 엘리어스를 자주 만들기를 권장합니다. 하지만 처음 공부할 때는 안해도 괜찮습니다.

# Set Properties as Optional

```ts
import { expect, it } from "vitest";

export const getName = (params: { first: string; last: string }) => {
  if (params.last) {
    return `${params.first} ${params.last}`;
  }
  return params.first;
};

it("Should work with just the first name", () => {
  const name = getName({
    first: "Matt",
  });

  expect(name).toEqual("Matt");
});

it("Should work with the first and last name", () => {
  const name = getName({
    first: "Matt",
    last: "Pocock",
  });

  expect(name).toEqual("Matt Pocock");
});
```

```ts
import { expect, it } from "vitest";

export const getName = (params: { first: string; last?: string }) => {
  if (params.last) {
    return `${params.first} ${params.last}`;
  }
  return params.first;
};

it("Should work with just the first name", () => {
  const name = getName({
    first: "Matt",
  });

  expect(name).toEqual("Matt");
});

it("Should work with the first and last name", () => {
  const name = getName({
    first: "Matt",
    last: "Pocock",
  });

  expect(name).toEqual("Matt Pocock");
});
```

제가 풀이한 정답입니다. ?를 선택적으로 입력하는 매개변수로 지정했습니다. 이게 있으면 객체 속성을 선택적으로 넣을 수 있게 해줍니다.

# Optional Parameters(선택적 매개변수)

```ts
import { expect, it } from "vitest";

export const getName = (first: string, last?: string) => {
  if (last) {
    return `${first} ${last}`;
  }
  return first;
};

it("Should work with just the first name", () => {
  const name = getName("Matt");

  expect(name).toEqual("Matt");
});

it("Should work with the first and last name", () => {
  const name = getName("Matt", "Pocock");

  expect(name).toEqual("Matt Pocock");
});
```

이전 문제와 동일합니다.

# Assigning Types to Variables

```ts
import { expect, it } from "vitest";

interface User {
  id: number;
  firstName: string;
  lastName: string;
  isAdmin: boolean;
}

/**
 * How do we ensure that defaultUser is of type User
 * at THIS LINE - not further down in the code?
 */
const defaultUser = {};

const getUserId = (user: User) => {
  return user.id;
};

it("Should get the user id", () => {
  expect(getUserId(defaultUser)).toEqual(1);
});
```

```ts
import { expect, it } from "vitest";

interface User {
  id: number;
  firstName: string;
  lastName: string;
  isAdmin: boolean;
}

/**
 * How do we ensure that defaultUser is of type User
 * at THIS LINE - not further down in the code?
 */
const defaultUser: User = {
  id: 1,
  firstName: "Jake",
  lastName: "the dog",
  isAdmin: true,
};

const getUserId = (user: User) => {
  return user.id;
};

it("Should get the user id", () => {
  expect(getUserId(defaultUser)).toEqual(1);
});
```

객체에는 인터페이스로 지정해서 특정 속성값이 없으면 에러가 발생하도록 합니다. 또 유용한 자동완성도 활용할 수 있습니다.

특정 식별자에 특정 자료형 요건을 정의하기 유용한 방식입니다.

# Constraining Value Types(값 자료형의 제약)

```ts
interface User {
  id: number;
  firstName: string;
  lastName: string;
  /**
   * How do we ensure that role is only one of:
   * - 'admin'
   * - 'user'
   * - 'super-admin'
   */
  role: string;
}

export const defaultUser: User = {
  id: 1,
  firstName: "Matt",
  lastName: "Pocock",
  // @ts-expect-error
  role: "I_SHOULD_NOT_BE_ALLOWED",
};
```

문제는 role이 `admin`, `user`, `super-admin` 중 하나여야 합니다.

```ts
interface User {
  id: number;
  firstName: string;
  lastName: string;
  /**
   * How do we ensure that role is only one of:
   * - 'admin'
   * - 'user'
   * - 'super-admin'
   */
  role: "admin" | "user" | "super-admin";
}

export const defaultUser: User = {
  id: 1,
  firstName: "Matt",
  lastName: "Pocock",
  // @ts-expect-error
  role: "I_SHOULD_NOT_BE_ALLOWED",
};
```

유니언 타입을 사용한 것으로 문제를 해결한 것입니다. 생각보다 많이 사용합니다. 자료형의 유형을 정의할 수 있게 해줍니다. 학생, 교직원, 교수, 연구원처럼 대학교에서 구분하는 것처럼 구분도 가능합니다.

# Working with Arrays(배열 다루기)

```ts
interface User {
  id: number;
  firstName: string;
  lastName: string;
  role: "admin" | "user" | "super-admin";
  posts: Post;
}

interface Post {
  id: number;
  title: string;
}

export const defaultUser: User = {
  id: 1,
  firstName: "Matt",
  lastName: "Pocock",
  role: "admin",
  posts: [
    {
      id: 1,
      title: "How I eat so much cheese",
    },
    {
      id: 2,
      title: "Why I don't eat more vegetables",
    },
  ],
};
```

문제입니다.

```ts
interface User {
  id: number;
  firstName: string;
  lastName: string;
  role: "admin" | "user" | "super-admin";
  posts: Post[];
}

interface Post {
  id: number;
  title: string;
}

export const defaultUser: User = {
  id: 1,
  firstName: "Matt",
  lastName: "Pocock",
  role: "admin",
  posts: [
    {
      id: 1,
      title: "How I eat so much cheese",
    },
    {
      id: 2,
      title: "Why I don't eat more vegetables",
    },
  ],
};
```

정답입니다. 2가지가 정답이 있습니다.

제네릭을 사용하는 방법입이 있습니다.

```ts
interface User {
  id: number;
  firstName: string;
  lastName: string;
  role: "admin" | "user" | "super-admin";
  posts: Array<Post>;
}

interface Post {
  id: number;
  title: string;
}

export const defaultUser: User = {
  id: 1,
  firstName: "Matt",
  lastName: "Pocock",
  role: "admin",
  posts: [
    {
      id: 1,
      title: "How I eat so much cheese",
    },
    {
      id: 2,
      title: "Why I don't eat more vegetables",
    },
  ],
};
```

조금더 복잡한 상황에서 많이 사용합니다. map, set, recode, promise에서 많이 사용합니다. 일단은 배열도 이런 표기가 가능합니다.

# Function Return Type Annotations(함수 반환값 주석)

```ts
import { expect, it } from "vitest";

interface User {
  id: number;
  firstName: string;
  lastName: string;
  role: "admin" | "user" | "super-admin";
  posts: Array<Post>;
}

interface Post {
  id: number;
  title: string;
}

/**
 * How do we ensure that makeUser ALWAYS
 * returns a user?
 */
const makeUser = () => {
  return {};
};

it("Should return a valid user", () => {
  const user = makeUser();

  expect(user.id).toBeTypeOf("number");
  expect(user.firstName).toBeTypeOf("string");
  expect(user.lastName).toBeTypeOf("string");
  expect(user.role).to.be.oneOf(["super-admin", "admin", "user"]);

  expect(user.posts[0].id).toBeTypeOf("number");
  expect(user.posts[0].title).toBeTypeOf("string");
});
```

```ts
import { expect, it } from "vitest";

interface User {
  id: number;
  firstName: string;
  lastName: string;
  role: "admin" | "user" | "super-admin";
  posts: Array<Post>;
}

interface Post {
  id: number;
  title: string;
}

/**
 * How do we ensure that makeUser ALWAYS
 * returns a user?
 */
const makeUser = (): User => {
  return {
    id: 1,
    firstName: "Jake",
    lastName: "The dog",
    role: "super-admin",
    posts: [{ id: 1, title: "Cake The Cat" }],
  };
};

it("Should return a valid user", () => {
  const user = makeUser();

  expect(user.id).toBeTypeOf("number");
  expect(user.firstName).toBeTypeOf("string");
  expect(user.lastName).toBeTypeOf("string");
  expect(user.role).to.be.oneOf(["super-admin", "admin", "user"]);

  expect(user.posts[0].id).toBeTypeOf("number");
  expect(user.posts[0].title).toBeTypeOf("string");
});
```

# Typing Promises and Async Requests(프로미스와 비동기 요청 타이핑)

```ts
interface LukeSkywalker {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
}

export const fetchLukeSkywalker = async (): LukeSkywalker => {
  const data = await fetch("https://swapi.dev/api/people/1").then((res) => {
    return res.json();
  });

  return data;
};
```

해결책이 다양합니다.

```ts
interface LukeSkywalker {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
}

export const fetchLukeSkywalker = async (): Promise<LukeSkywalker> => {
  const data = await fetch("https://swapi.dev/api/people/1").then((res) => {
    return res.json();
  });

  return data;
};
```

```ts
interface LukeSkywalker {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
}

export const fetchLukeSkywalker = async () => {
  const data: LukeSkywalker = await fetch(
    "https://swapi.dev/api/people/1"
  ).then((res) => {
    return res.json();
  });

  return data;
};
```

타입 추축을 하게 만드는 방법입니다. 프로미스가 가져오게 될 타입을 정의하는 것입니다. 사실 프로미스는 통신상태가 결과를 결정하기 때문에 아직 타입스크립트가 잘 모를 수밖에 없습니다.

```ts
interface LukeSkywalker {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
}

export const fetchLukeSkywalker = async () => {
  const data = await fetch("https://swapi.dev/api/people/1").then((res) => {
    return res.json();
  });

  return data as LukeSkywalker;
};
```

이 표기는 타입 캐스팅입니다.

```ts
const matt = {} as LukeSkywalker; // 에러 X
const matt: LukeSkywalker = {}; // 에러 O
```

타입캐스팅을 활용하면 조금더 루즈하게 타입을 지정할 수 있습니다. 비어있는 객체이지만 자료형은 `LukeSkywalker`에 해당하게 되는 것입니다.

# Passing Type Arguments(타입 매개변수를 전달하기)

```ts
import { expect, it } from "vitest";
import { Equal, Expect } from "./helpers/type-utils";

const guitarists = new Set();

guitarists.add("Jimi Hendrix");
guitarists.add("Eric Clapton");

it("Should contain Jimi and Eric", () => {
  expect(guitarists.has("Jimi Hendrix")).toEqual(true);
  expect(guitarists.has("Eric Clapton")).toEqual(true);
});

it("Should give a type error when you try to pass a non-string", () => {
  // @ts-expect-error
  guitarists.add(2);
});

it("Should be typed as an array of strings", () => {
  const guitaristsAsArray = Array.from(guitarists);

  type tests = [Expect<Equal<typeof guitaristsAsArray, string[]>>];
});
```

```ts
import { expect, it } from "vitest";
import { Equal, Expect } from "./helpers/type-utils";

const guitarists = new Set<string>();

guitarists.add("Jimi Hendrix");
guitarists.add("Eric Clapton");

it("Should contain Jimi and Eric", () => {
  expect(guitarists.has("Jimi Hendrix")).toEqual(true);
  expect(guitarists.has("Eric Clapton")).toEqual(true);
});

it("Should give a type error when you try to pass a non-string", () => {
  // @ts-expect-error
  guitarists.add(2);
});

it("Should be typed as an array of strings", () => {
  const guitaristsAsArray = Array.from(guitarists);

  type tests = [Expect<Equal<typeof guitaristsAsArray, string[]>>];
});
```

이렇개 대입할 인자의 자료형을 지정할수 있습니다.

```ts
const map = new Map<string, string>();

map.set("someKey", "someValue");

const guitarists = new Set<string>();
guitarists.add("Jimi Hendrix");
guitarists.add("Eric Clapton");
```

이런식으로 활용할 수 있습니다. 마우스를 올리고 `<>`속에 무슨 내용이 있는지 잘 확인해야 합니다. 기본은 `<unknown>`입니다. 이것은 타입 매개변수에 해당합니다.

# Assigning Dynamic Keys to an Object(키에 동적 타입지정)

```ts
import { expect, it } from "vitest";

const createCache = () => {
  const cache = {};

  const add = (id: string, value: string) => {
    cache[id] = value;
  };

  const remove = (id: string) => {
    delete cache[id];
  };

  return {
    cache,
    add,
    remove,
  };
};

it("Should add values to the cache", () => {
  const cache = createCache();

  cache.add("123", "Matt");

  expect(cache.cache["123"]).toEqual("Matt");
});

it("Should remove values from the cache", () => {
  const cache = createCache();

  cache.add("123", "Matt");
  cache.remove("123");

  expect(cache.cache["123"]).toEqual(undefined);
});
```

```ts
import { expect, it } from "vitest";

interface Props {
  id: string;
  value: string;
  [key: string]: string;
}

const createCache = () => {
  const cache = {} as Props;

  const add = (id: string, value: string) => {
    cache[id] = value;
  };

  const remove = (id: string) => {
    delete cache[id];
  };

  return {
    cache,
    add,
    remove,
  };
};

it("Should add values to the cache", () => {
  const cache = createCache();

  cache.add("123", "Matt");

  expect(cache.cache["123"]).toEqual("Matt");
});

it("Should remove values from the cache", () => {
  const cache = createCache();

  cache.add("123", "Matt");
  cache.remove("123");

  expect(cache.cache["123"]).toEqual(undefined);
});
```

제가 작성한 풀이입니다. 객체의 키를 문자열로 지정했습니다.

```ts
const cache: Record<string, string> = {};
cache["keyHere"] = "valueHere";
```

이런 방법도 있습니다.

레코드는 실행할 때 어떤 숫자든 동적으로 추가할 수 있게 해줍니다. set, map과 다릅니다(자바스크립트 자료형입니다). 유틸타입에 해당합니다.

```ts
const cache: {
  [id: string]: string;
} = {};
```

이렇게 하면 키의 타입을 지정하고 값의 타입을 지정하는 것입니다. 이것은 인덱스 시그니처에 해당합니다. 저의 풀이가 이것에 더 가까운듯 합니다.

```ts
const cache: Record<string, { a: "???" }> = {};
cache["keyHere"] = "valueHere";
```

이런 패턴도 가능합니다. 타입스크립트에서는 객체 속에 객체에 타입을 지정하는 패턴을 많이 발견할 수 있을 것입니다. 이것은 동적 키에 해당합니다.

# Narrowing Down Union Types

```ts
import { expect, it } from "vitest";

const coerceAmount = (amount: number | { amount: number }) => {};

it("Should return the amount when passed an object", () => {
  expect(coerceAmount({ amount: 20 })).toEqual(20);
});

it("Should return the amount when passed a number", () => {
  expect(coerceAmount(20)).toEqual(20);
});
```

가끔 발생할 수 있는 에러를 해결하는 문제입니다.

```ts
import { expect, it } from "vitest";

const coerceAmount = (amount: number | { amount: number }) => {
  if (typeof amount === "object") return amount.amount;
  return amount;
};

it("Should return the amount when passed an object", () => {
  expect(coerceAmount({ amount: 20 })).toEqual(20);
});

it("Should return the amount when passed a number", () => {
  expect(coerceAmount(20)).toEqual(20);
});
```

매개변수에 따라 반환값을 접근합니다.

타입스크립트에서는 typeof 연산자가 더 똑똑합니다. 무슨 자료형인지에 따라 로직을 처리할 수 있습니다. 유니언 타입 예외처리에 효율적으로 활용할 수 있습니다.

# Typing Errors in a Try-Catch(Try-Catch에서 타입지정)

```ts
import { expect, it } from "vitest";

const tryCatchDemo = (state: "fail" | "succeed") => {
  try {
    if (state === "fail") {
      throw new Error("Failure!");
    }
  } catch (e) {
    return e.message;
  }
};

it("Should return the message when it fails", () => {
  expect(tryCatchDemo("fail")).toEqual("Failure!");
});
```

```ts
import { expect, it } from "vitest";

const tryCatchDemo = (state: "fail" | "succeed") => {
  try {
    if (state === "fail") {
      throw new Error("Failure!");
    }
  } catch (e) {
    return (e as Error).message;
  }
};

it("Should return the message when it fails", () => {
  expect(tryCatchDemo("fail")).toEqual("Failure!");
});
```

`catch()` 속에서 지정할 수 없는 이유가 의문이 생길 것입니다. 또 다른 식별자에 타입 케스팅을 하면 동작합니다. 에러 객체라고 강요를 하고난 다음에 message 프로퍼티를 접근할 수 있게해줍니다.

하지만 좋지 않은 해결책입니다.

```ts
import { expect, it } from "vitest";

const tryCatchDemo = (state: "fail" | "succeed") => {
  try {
    if (state === "fail") {
      throw new Error("Failure!");
    }
  } catch (e) {
    if (e instanceof Error) {
      return e.message;
    }
  }
};

it("Should return the message when it fails", () => {
  expect(tryCatchDemo("fail")).toEqual("Failure!");
});
```

이 해결책이 제일 좋습니다. 일단 e는 기본적으로 unknown입니다. 런타임에 타입이 할당 될 것이고 에러가 발생해야 에러 객체를 할당받게 될 것이라는 것은 대부분의 예상입니다. 그래서 e는 타입지정을 바로 하지 않습니다. 누군가 `throw new Error("Failure!")`처럼 Error 인스턴스를 생성하지 않고 `throw failure!`라고만 작성하면 catch 블록이 무시하는 문제가 발생하기는 합니다.

e는 any로 지정하고 끝낼 수 있지만 any를 테스트 이외에 사용하는 것은 안티패턴이기 때문에 `instanceof Error` 패턴을 사용하는 것입니다.

# Inheriting Interface Properties(안터페이스 속성을 상속시키기)

```ts
import { Equal, Expect } from "./helpers/type-utils";

/**
 * Here, the id property is shared between all three
 * interfaces. Can you find a way to refactor this to
 * make it more DRY?
 */

interface User {
  id: string;
  firstName: string;
  lastName: string;
}

interface Post {
  id: string;
  title: string;
  body: string;
}

interface Comment {
  id: string;
  comment: string;
}

type tests = [
  Expect<Equal<User, { id: string; firstName: string; lastName: string }>>,
  Expect<Equal<Post, { id: string; title: string; body: string }>>,
  Expect<Equal<Comment, { id: string; comment: string }>>
];
```

리팩토링 문제입니다. 중복이 발생하는 id를 dry하게 수정하는 것입니다.

```ts
import { Equal, Expect } from "./helpers/type-utils";

/**
 * Here, the id property is shared between all three
 * interfaces. Can you find a way to refactor this to
 * make it more DRY?
 */

interface id {
  id: string;
}

interface User extends id {
  firstName: string;
  lastName: string;
}

interface Post extends id {
  title: string;
  body: string;
}

interface Comment extends id {
  comment: string;
}

type tests = [
  Expect<Equal<User, { id: string; firstName: string; lastName: string }>>,
  Expect<Equal<Post, { id: string; title: string; body: string }>>,
  Expect<Equal<Comment, { id: string; comment: string }>>
];
```

클래스 말고 인터페이스를 상속시키는 패턴입니다. 또 상속을 받을 때 복수의 인터페이스도 상속받을 수 있습니다. 이런식으로 복잡한 데이터 모델을 위한 타입을 조합할 수 있습니다.

```ts
interface Post extends Base, User {
  title: string;
  body: string;
}
```

# Combining Types to Create New Types

```ts
interface User {
  id: string;
  firstName: string;
  lastName: string;
}

interface Post {
  id: string;
  title: string;
  body: string;
}

/**
 * How do we type this return statement so it's both
 * User AND { posts: Post[] }
 */
export const getDefaultUserAndPosts = (): unknown => {
  return {
    id: "1",
    firstName: "Matt",
    lastName: "Pocock",
    posts: [
      {
        id: "1",
        title: "How I eat so much cheese",
        body: "It's pretty edam difficult",
      },
    ],
  };
};

const userAndPosts = getDefaultUserAndPosts();

console.log(userAndPosts.posts[0]);
```

unknown만 변경해서 user 타입에 Posts 타입을 담을 posts 속성을 추가해야 합니다. 타입을 조합하는 것이 문제입니다.

```ts
interface User {
  id: string;
  firstName: string;
  lastName: string;
}

interface Post {
  id: string;
  title: string;
  body: string;
}

export const getDefaultUserAndPosts = (): User & { posts: Post[] } => {
  return {
    id: "1",
    firstName: "Matt",
    lastName: "Pocock",
    posts: [
      {
        id: "1",
        title: "How I eat so much cheese",
        body: "It's pretty edam difficult",
      },
    ],
  };
};

const userAndPosts = getDefaultUserAndPosts();

console.log(userAndPosts.posts[0]);
```

&은 합집합 개념으로 생각하면 모든 속성값을 갖게 만들 수 있습니다. 타입과 타입을 사용할 그 순간을 위해 만들 수 있습니다.

```ts
type DefaultUserAndPosts = (): User & { posts: Post[] } & { age: number}
```

이런 응용 혹은 조합이 가능해지는 것입니다.

# Selectively Construct Types from Other Types

```ts
import { Equal, Expect } from "./helpers/type-utils";

interface User {
  id: string;
  firstName: string;
  lastName: string;
}

/**
 * How do we create a new object type with _only_ the
 * firstName and lastName properties of User?
 */

type MyType = unknown;

type tests = [Expect<Equal<MyType, { firstName: string; lastName: string }>>];
```

인터페이스에서 부분을 선택하는 것이 문제입니다. `id`말고 `fistName`, `lastName`을 선택해야 합니다.

```ts
import { Equal, Expect } from "./helpers/type-utils";

interface User {
  id: string;
  firstName: string;
  lastName: string;
}

/**
 * How do we create a new object type with _only_ the
 * firstName and lastName properties of User?
 */

type MyType = Pick<User, "firstName" | "lastName">;

type tests = [Expect<Equal<MyType, { firstName: string; lastName: string }>>];
```

타입 핼퍼를 활용한 것입니다. 2가지 방법으로 해결할 수 있습니다. 특정 타입만 남도록 교집합으로 선택한것과 비슷합니다.

```ts
import { Equal, Expect } from "./helpers/type-utils";

interface User {
  id: string;
  firstName: string;
  lastName: string;
}

/**
 * How do we create a new object type with _only_ the
 * firstName and lastName properties of User?
 */

type MyType = Omit<User, "id">;

type tests = [Expect<Equal<MyType, { firstName: string; lastName: string }>>];
```

위는 교집합으로 특정 속성을 선택하는 것이라면 이것은 반대로 차집합으로 남기지말 속성을 선택하는 연산입니다.

# Typing Functions(함수타이핑)

```ts
import { Equal, Expect } from "./helpers/type-utils";

/**
 * How do we type onFocusChange?
 */
const addListener = (onFocusChange: unknown) => {
  window.addEventListener("focus", () => {
    onFocusChange(true);
  });

  window.addEventListener("blur", () => {
    onFocusChange(false);
  });
};

addListener((isFocused) => {
  console.log({ isFocused });

  type tests = [Expect<Equal<typeof isFocused, boolean>>];
});
```

인자로 함수를 대입할 때 타입을 지정하는 문제입니다. 현재 콜백함수로 대입할 때 타입은 unknown입니다. 이부분을 해결해야 합니다.

```ts
import { Equal, Expect } from "./helpers/type-utils";

/**
 * How do we type onFocusChange?
 */
const addListener = (onFocusChange: (val: boolean) => void) => {
  window.addEventListener("focus", () => {
    onFocusChange(true);
  });

  window.addEventListener("blur", () => {
    onFocusChange(false);
  });
};

addListener((isFocused) => {
  console.log({ isFocused });

  type tests = [Expect<Equal<typeof isFocused, boolean>>];
});
```

함수 타입을 지정하면 됩니다. 함수 자체가 타입이 될 수 있습니다.

```ts
type FocusListener = (isFocused: boolean) => void;

const addListener = (onFocusChange: FocusListener) => {...}
```

사이드이펙트를 발생시키고 반환할 값이 없는 함수를 만들 때는 void를 반환값으로 지정하는 것을 권장합니다.

# Typing Async Functions

```ts
import { expect, it } from "vitest";

interface User {
  id: string;
  firstName: string;
  lastName: string;
}

const createThenGetUser = async (
  createUser: unknown,
  getUser: unknown
): Promise<User> => {
  const userId: string = await createUser();

  const user = await getUser(userId);

  return user;
};

it("Should create the user, then get them", async () => {
  const user = await createThenGetUser(
    async () => "123",
    async (id) => ({
      id,
      firstName: "Matt",
      lastName: "Pocock",
    })
  );

  expect(user).toEqual({
    id: "123",
    firstName: "Matt",
    lastName: "Pocock",
  });
});
```

2개의 `unknown` 타입을 `function type`으로 지정하는 것으로 문제를 풀면됩니다.

```ts
import { expect, it } from "vitest";

interface User {
  id: string;
  firstName: string;
  lastName: string;
}

type createUser = () => Promise<string>;

type getUser = (userId: string) => Promise<User>;

const createThenGetUser = async (
  createUser: createUser,
  getUser: getUser
): Promise<User> => {
  const userId: string = await createUser();

  const user = await getUser(userId);

  return user;
};

it("Should create the user, then get them", async () => {
  const user = await createThenGetUser(
    async () => "123",
    async (id) => ({
      id,
      firstName: "Matt",
      lastName: "Pocock",
    })
  );

  expect(user).toEqual({
    id: "123",
    firstName: "Matt",
    lastName: "Pocock",
  });
});
```

Promise까지 고려하면 됩니다. 비동기함수는 반환하는 자료형은 Promise라는 것만 알면 풀 수 있습니다. 물론 피드백이 친절해서 충분히 잘 풀 수 있습니다. 반환하게 될 자료형까지 지정하는 것이 중요합니다.
