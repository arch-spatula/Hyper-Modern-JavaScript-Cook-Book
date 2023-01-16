// 숫자형을 받고 숫자형을 반환합니다.
function addTwo(num: number): number {
  return num + 2;
}

// 문자열을 받고 문자열을 반환합니다.
function getUpper(val: string): string {
  return val.toUpperCase();
}

function singUpUser(name: string, email: string, isPaid: boolean) {
  return;
}

// 타임주석을 추가하고 다음에 기본값을 설정하면 선택적으로 입력할 수 있는 매개변수를 작성할 수 있습니다.
let loginUser = (name: string, email: string, isPaid: boolean = false) => {};

addTwo(5); // 숫자형이 아니면 에러가 발생합니다.
getUpper("a"); // 문자열이 아니면 에러가 발생합니다.
singUpUser("Jake", "Jake.com", true); // 모두다 입력하기 전까지 에러가 발생합니다.

loginUser("Jake", "not Jake");

export {};
