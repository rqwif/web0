//1
let a = 1, b = 1;

let c = ++a; // a = 2; c = 2
let d = b++; // b = 2; d = 1(повертає старе значення)

//2
let s = 2;

let x = 1 + (s *= 2); //a = 4(помножити на 2); x = 5(бо 1 + 4)

//3
// "" + 1 + 0 = "10" 
// "" - 1 + 0 = -1 
// true + false = 1
// 6 / "3" = 2
// "2" * "3" = 6
// 4 + 5 + "px" = "9px"
// "$" + 4 + 5 = "$45"
// "4" - 2 = 2
// "4px" - 2 = NaN
// "  -9  " + 5 = "  -9  5" 
// "  -9  " - 5 = -14 
// null + 1 = 1 
// undefined + 1 = NaN 
// " \t \n" - 2 = -2 

//4

let a1 = prompt("First number?", 1);
let b2 = prompt("Second number?", 2);

alert(+a1 + +b2); // перетворити рядки на числа перед +