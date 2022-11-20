const a = false || "어떻게";
// a => "어떻게"
const b = false ?? "사람 이름이";
// b => false
const c = undefined ?? null ?? "엄";
// c => "엄"
console.log(a, b, c);
