// Your code here
const dodge = document.getElementById("dodger");

dodger.style.backgroundColor = "#FF69B4";


function moveDodgerLeft() {
    let leftNumbers = dodger.style.left.replace("px", "");
    let left = parseInt(leftNumbers, 10);

    if (left > 0) {
        dodger.style.left = `${left - 1}px`;
    }
}

function moveDodgerRight() {
    let leftNumbers = dodger.style.left.replace("px", "");
    let left = parseInt(leftNumbers, 10);

    if (left < 359) {
        dodger.style.left = `${left + 1}px`;
    }
}

document.addEventListener("keydown", function(event) {
   if (event.key === "ArrowLeft") {
    moveDodgerLeft();
    }

    if (event.key === "ArrowRight") {
        moveDodgerRight();
    }
});