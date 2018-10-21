const sbt = document.querySelector(".sbt");



sbt.addEventListener("click", e => {
  const time = Date.now() + 1000 * 5; // 5s
  let now = Date.now();

  // функция задержки
  setTimeout(function count() {
    now = Date.now();
    if (now < time) {
        // функция для создания зазора для очереди queue
      setTimeout(() => {
        console.log("loop");
        count();
      }, 0);
    }
  }, 1000);
});
