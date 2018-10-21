const sbt = document.querySelector(".sbt");

(function() {
  var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
                              window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
  window.requestAnimationFrame = requestAnimationFrame;
})();

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
        requestAnimationFrame(count)
      }, 0);
    }
    // count();
  }, 1000);
});
