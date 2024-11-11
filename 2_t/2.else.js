let value = prompt('Type a number', 0);

if (value > 0) {
  alert( 1 );
} else if (value < 0) {
  alert( -1 );
} else {
  alert( 0 );
}

//2
let result = (a + b < 4) ? 'Below' : 'Over';

//3
let message = (login == 'Employee') ? 'Hello' :
              (login == 'Director') ? 'Greetings' :
              (login == '') ? 'No login' : '';

//4
alert( null || 2 || undefined );//2

//5
alert( alert(1) || 2 || alert(3) );//1 потім 2

//6
alert( 1 && null && 2 );//null

//7
alert( alert(1) && alert(2) );//1 потім undefined

//8
alert( null || 2 && 3 || 4 );//3

//9
if (age >= 14 && age <= 90){}

//10
if (!(age >= 14 && age <= 90)){}
if (age < 14 || age > 90){}

//11
if (-1 || 0) alert( 'first' ); //результат -1 || 0 = -1
if (-1 && 0) alert( 'second' );//не виконується
if (null || -1 && 1) alert( 'third' );//виконується && має вищий пріоритет ніж ||

//12
let login = prompt("Хто там?");

if (login === "Admin") {
  let password = prompt("Введіть пароль:");

  if (password === "TheMaster") {
    alert("Ласкаво просимо!");
  } else if (password === "" || password === null) {
    alert("Скасовано");
  } else {
    alert("Неправильний пароль");
  }

} else if (login === "" || login === null) {
  alert("Скасовано");
} else {
  alert("Я вас не знаю");
}
