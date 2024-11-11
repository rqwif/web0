//1
//Піт

//2
//Піт

//3
//0,1

//4
alert( counter.up() ); // 1
alert( counter.up() ); // 2
alert( counter.down() ); // 1

//5
//помилка

//6
function sum(a) {

  return function(b) {
    return a + b; 
  };

}

alert( sum(1)(2) ); // 3
alert( sum(5)(-1) ); // 4

//7
//помилка

//8
function inBetween(a, b) {
  return function(x) {
    return x >= a && x <= b;
  };
}

let arr = [1, 2, 3, 4, 5, 6, 7];
alert( arr.filter(inBetween(3, 6)) ); // 3,4,5,6

//9
function byField(fieldName){
  return (a, b) => a[fieldName] > b[fieldName] ? 1 : -1;
}

//10
function makeArmy() {

  let shooters = [];

  for(let i = 0; i < 10; i++) {
    let shooter = function() { 
      alert( i ); 
    };
    shooters.push(shooter);
  }

  return shooters;
}

let army = makeArmy();

army[0](); // 0
army[5](); // 5