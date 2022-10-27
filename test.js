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