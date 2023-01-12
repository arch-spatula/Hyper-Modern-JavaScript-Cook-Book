const arr1 = [1, 2, 3, 4, 5, 6, 7, 8];

const arr2 = arr1.map((num) => {
  if (num % 2 === 0) return num;
});

console.log(arr2);
