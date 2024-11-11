//1
let messages = [
  {text: "Hello", from: "John"},
  {text: "How goes?", from: "John"},
  {text: "See you soon", from: "Alice"}
];

// Створюємо WeakMap для зберігання статусу "прочитано"
let readStatus = new WeakMap();

// Функція для відмітки повідомлення як прочитане
function markAsRead(message) {
  readStatus.set(message, true);
}

// Функція для перевірки, чи прочитано повідомлення
function isRead(message) {
  return readStatus.get(message) === true;
}

// Тестування
markAsRead(messages[0]); // Відмічаємо перше повідомлення як прочитане
console.log(isRead(messages[0])); // true
console.log(isRead(messages[1])); // false

//2
let messages1 = [
  {text: "Hello", from: "John"},
  {text: "How goes?", from: "John"},
  {text: "See you soon", from: "Alice"}
];

let readMap = new WeakMap();

readMap.set(messages1[0], new Date(2017, 1, 1));