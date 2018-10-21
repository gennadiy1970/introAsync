let i = 0;

const markSI = setInterval(() => {
  console.log("Вывод  данных в консоль " + ++i);
  console.log("Вывод  данных в консоль " + ++i);
  console.log("Вывод  данных в консоль " + ++i);
}, 1000);

setTimeout(() => {
    clearInterval(markSI)
    console.log("Выход из программы");
}, 10000)