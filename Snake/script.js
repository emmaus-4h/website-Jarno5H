const canvas = document.querySelector(".canvas")
const ctx = canvas.getContext("2d");
const scale = 10;
const rows = canvas.height / scale;
const columns = canvas.width / scale;
var snake;

(function setup() {
  snake = new Snake();
  
  window.setInterval(() => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    snake.update();
     snake.draw();
  }, 250);
}());

var beweegSpeler = function() {
  console.log("beweegspeler");
  
  if (keyIsDown(LEFT_ARROW)) { // A
    spelerX = spelerX - 5;
  }
   if (keyIsDown(RIGHT_ARROW)) { // D
    spelerX = spelerX + 5;
  }
  if (keyIsDown(UP_ARROW)) { // W
    spelerY = spelerY - 5;
  }
  if (keyIsDown(DOWN_ARROW)) { // S
    spelerY = spelerY + 5;
  }
};
