```js
console.log()

var memberArray = ['egoing', 'graphittie', 'leezche'];
console.group('array loop');
var i = 0; 
while(i < memberArray.length){
    console.log(i, memberArray[i]);
    i = i + 1;
}
console.groupEnd('array loop');

console.time()
console.timeEnd()
console.table()
```

