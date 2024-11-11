//ні, не буде :

new Promise(function(resolve, reject) {
  setTimeout(() => {
    throw new Error("Whoops!");
  }, 1000);
}).catch(alert);
//try..catchЯк було сказано в цьому розділі, навколо коду функції існує «неявний ». Тому всі синхронні помилки обробляються.

