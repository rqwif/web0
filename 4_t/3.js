//1
//Так(функція повертає об’єкт, то newповертає його замість this)

//2
function Calculator() {

  this.read = function() {
    this.a = +prompt('a?', 0);
    this.b = +prompt('b?', 0);
  };

  this.sum = function() {
    return this.a + this.b;
  };

  this.mul = function() {
    return this.a * this.b;
  };
}

let calculator = new Calculator();
calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );

//3
function Accumulator(startingValue) {
  this.value = startingValue; // зберігає початкове значення

  // Метод для читання нового числа та додавання до поточного значення
  this.read = function() {
    let userInput = prompt("Введіть число для додавання:", 0);
    this.value += Number(userInput); // додає введене число до value
  };
}

let accumulator = new Accumulator(1); // початкове значення 1

accumulator.read(); // додає введене користувачем значення
accumulator.read(); // додає ще одне значення

alert(accumulator.value); // виводить суму значень

