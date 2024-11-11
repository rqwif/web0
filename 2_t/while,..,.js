//1
let i = 3;

while (i) {
  alert( i-- );
}//1
//Кожна ітерація циклу зменшується i на 1. Перевірка while зупиняє цикл, коли i = 0

//2
let i3 = 0;
while (++i3 < 5) alert( i );//від 1 до 4

let i2 = 0;
while (i2++ < 5) alert( i );//Від 1 до 5

//3
for (let i = 0; i < 5; i++) alert( i );
for (let i = 0; i < 5; ++i) alert( i );//від 0 до 4 в обох випадках.
//Значення, яке повертає, тут не використовується, тому немає різниці між i++і ++i

//4
for (let i = 2; i <= 10; i++) {
  if (i % 2 == 0) {
    alert( i );
  }
}

//5
let i1 = 0;
while (i1 < 3) {
  alert( `number ${i1}!` );
  i1++;
}

//6
let num;

do {
  num = prompt("Введіть число більше ніж 100:", 0);
} while (num <= 100 && num);

//7
function isPrime(num) {
  if (num <= 1) return false; // Число повинно бути більше 1
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false; // Якщо число ділиться на i, то воно не просте
    }
  }
  return true; // Якщо не знайшлося дільників, число просте
}

let n = prompt("Введіть число n:");

for (let i = 2; i <= n; i++) {
  if (isPrime(i)) {
    console.log(i);
  }
}
