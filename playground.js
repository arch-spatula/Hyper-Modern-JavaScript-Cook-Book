function* generateSequence(start, end) {
  for (let i = start; i <= end; i++) {
    yield i;
  }
}

for (let value of generateSequence(1, 5)) {
  console.log(value); // 1, then 2, then 3, then 4, then 5
}
