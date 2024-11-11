it("Raises x to the power n", function() {
  let x = 5;

  let result = x;
  assert.equal(pow(x, 1), result);

  result = x * x; // Для pow(x, 2) результат має бути x * x
  assert.equal(pow(x, 2), result);

  result = x * x * x; // Для pow(x, 3) результат має бути x * x * x
  assert.equal(pow(x, 3), result);
});
//Перевизначення result: Для кожного наступного степеня (2 та 3) перерахувала result правильно, замість того, щоб множити на x попереднє значення.
//Логіка перевірки: Тепер тест коректно перевіряє піднесення до степеня для 1, 2 та 3.