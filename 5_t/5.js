//1
function camelize(str) {
  return str
    .split('-') // Розділяє рядок на масив за допомогою тире
    .map((word, index) => {
      // Робимо перше слово маленьким, а всі наступні з великої літери
      return index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(''); // Об'єднуємо масив назад у рядок
}

console.log(camelize("background-color")); // 'backgroundColor'
console.log(camelize("list-style-image")); // 'listStyleImage'
console.log(camelize("-webkit-transition")); // 'WebkitTransition'

//2
function filterRange(arr, a, b) {
  return arr.filter(item => (a <= item && item <= b));
}

let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);

alert( filtered ); 

alert( arr ); 

//3
function filterRangeInPlace(arr, a, b) {

  for (let i = 0; i < arr.length; i++) {
    let val = arrr[i];

    
    if (val < a || val > b) {
      arr.splice(i, 1);
      i--;
    }
  }

}

let arrr = [5, 3, 8, 1];

filterRangeInPlace(arr, 1, 4); 

alert( arr ); // [3, 1]

//4
let ar = [5, 2, 1, -10, 8];

ar.sort((a, b) => b - a);

alert( ar );

//5
function copySorted(arr1) {
  return arr1.slice().sort();
}

let arr1 = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arr);

alert( sorted );
alert( arr1 );

//6
function Calculator() {

  this.methods = {
    "-": (a, b) => a - b,
    "+": (a, b) => a + b
  };

  this.calculate = function(str) {

    let split = str.split(' '),
      a = +split[0],
      op = split[1],
      b = +split[2];

    if (!this.methods[op] || isNaN(a) || isNaN(b)) {
      return NaN;
    }

    return this.methods[op](a, b);
  };

  this.addMethod = function(name, func) {
    this.methods[name] = func;
  };
}

//7
let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [ john, pete, mary ];

let names = users.map(item => item.name);

alert( names ); // John, Pete, Mary

//8
let john3 = { name: "John", surname: "Smith", id: 1 };
let pete3 = { name: "Pete", surname: "Hunt", id: 2 };
let mary3 = { name: "Mary", surname: "Key", id: 3 };

let users3 = [ john, pete, mary ];

let usersMapped = users.map(user3 => ({
  fullName: `${user3.name} ${user3.surname}`,
  id: user3.id
}));


alert( usersMapped[0].id ); // 1
alert( usersMapped[0].fullName ); // John Smith

//9
function sortByAge(arr) {
  arr.sort((a, b) => a.age - b.age);
}

let john1 = { name: "John", age: 25 };
let pete1 = { name: "Pete", age: 30 };
let mary1 = { name: "Mary", age: 28 };

let arr2 = [ pete, john, mary ];

sortByAge(arr2);

alert(arr2[0].name); // John
alert(arr2[1].name); // Mary
alert(arr2[2].name); // Pete

//10
function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}

let arr6 = [1, 2, 3];
shuffle(arr6);
alert(arr6);

//11
function getAverageAge(users) {
  return users.reduce((prev, user) => prev + user.age, 0) / users.length;
}

let joh = { name: "John", age: 25 };
let pee = { name: "Pete", age: 30 };
let mry = { name: "Mary", age: 29 };

let rr = [ john, pee, mry ];

alert( (getAverageAgerr) ); // 28