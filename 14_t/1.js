let user = {
  name: "John"
};

function wrap(target) {
  return new Proxy(target, {
    get(target, prop, receiver) {
      if (prop in target) {
        return Reflect.get(target, prop, receiver);
      } else {
        throw new ReferenceError(`Property doesn't exist: "${prop}"`)
      }
    }
  });
}

user = wrap(user);

alert(user.name); // John
alert(user.age); 

//2
let array = [1, 2, 3];

array = new Proxy(array, {
  get(target, prop, receiver) {
    if (prop < 0) {
      prop = +prop + target.length;
    }
    return Reflect.get(target, prop, receiver);
  }
});


alert(array[-1]); // 3
alert(array[-2]); // 2

//3
let handlers = Symbol('handlers');

function makeObservable(target) {
  target[handlers] = [];

  target.observe = function(handler) {
    this[handlers].push(handler);
  };

  return new Proxy(target, {
    set(target, property, value, receiver) {
      let success = Reflect.set(...arguments); 
      if (success) { 
        target[handlers].forEach(handler => handler(property, value));
      }
      return success;
    }
  });
}

let user1 = {};

user1 = makeObservable(user1);

user1.observe((key, value) => {
  alert(`SET ${key}=${value}`);
});

user1.name = "John";