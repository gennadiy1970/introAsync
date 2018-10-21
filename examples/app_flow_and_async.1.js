let i = 1;

console.log("Вывод  данных в консоль " + i++);

setTimeout(() => {
    console.log("Выход из программы");
}, 3000)

console.log("Вывод  данных в консоль " + i++);
console.log("Вывод  данных в консоль " + i++);

console.log("Выход из потока");