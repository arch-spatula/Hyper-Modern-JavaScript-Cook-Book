const waitTimeMs = 100;

function callback() {
  console.log("222");
}

console.log("11111");

setTimeout(callback, waitTimeMs);

console.log("33333");
