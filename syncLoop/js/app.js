const sbt = document.querySelector(".sbt");

sbt.addEventListener("click", e => {
  const time = Date.now() + 1000 * 5; // 5s
  while (time > Date.now()) {
    console.log( 'loop');
  }
});
