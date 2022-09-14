window.onload = () => {
  const mario = document.querySelector(".mario");
  const pipe = document.querySelector(".pipe");
  const clouds = document.querySelector(".clouds");
  const gameBoard = document.querySelector(".game-board");

  const gameOver = () => {

    gameBoard.style.background = "linear-gradient(#dd1414, #65b0ce)";
    
    clouds.style.animation = "none";

    pipe.style.animation = "none";

    mario.style.animation = "none";
    mario.src = "assets/img/game-over.png";
    mario.style.width = "75px";
    mario.style.marginLeft = "25px";
  };

  const jumpMario = () => {
    mario.classList.add("jump-mario");

    setTimeout(() => {
      mario.classList.remove("jump-mario");
    }, 500);
  };

  const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window
      .getComputedStyle(mario)
      .bottom.replace("px", "");

    if (pipePosition <= 104 && pipePosition > 0 && marioPosition < 80) {
      pipe.style.left = `${pipePosition}px`;
      mario.style.bottom = `${marioPosition}px`;
      gameOver();

      clearInterval(loop);
    }
  }, 10);

  document.addEventListener("keydown", jumpMario);
};
