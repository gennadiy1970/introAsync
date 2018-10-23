for (let index = 0; index < 10; index++) {
  setTimeout(() => console.log("let index = " + index), 2000);
}

setTimeout(
  () => console.log("================================================="),
  3000
);

for (var i = 0; i < 10; i++) {
  setTimeout(() => console.log("var i = " + i), 4000);
}
























/*

setTimeout(
  () => console.log("================================================="),
  5000
);
setTimeout(() => console.log("var i =" + i), 5500);
setTimeout(() => console.log("let index =" + index), 5600);

*/