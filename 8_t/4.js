//1
let dictionary = Object.create(null, {
  toString: { // define toString property
    value() { // the value is a function
      return Object.keys(this).join();
    }
  }
});

//2
//Перший виклик має this == rabbit, інші дорівнюють this, Rabbit.prototypeтому що насправді це об’єкт перед крапкою.
rabbit.sayHi();                        // Rabbit
Rabbit.prototype.sayHi();              // undefined
Object.getPrototypeOf(rabbit).sayHi(); // undefined
rabbit.__proto__.sayHi();              // undefined