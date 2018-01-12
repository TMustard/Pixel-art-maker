var currentScreen = "";
var firstNum = 0;
var operator = "";
var secondNum = 0;

var spanArray = document.getElementsByTagName("span");
var screen = document.getElementById("screen");
var clear = document.getElementById("clear");
var equals = document.getElementById("equals");

for (var i = 0; i < spanArray.length; i++) {
  spanArray[i].addEventListener("click", clickEvent);
}

function clickEvent() {
  var entry = event.target.innerHTML;
  if (entry === "\xF7" || entry === "x" || entry === "+" || entry === "-") {
    if (operator === "") {
      operator = entry;
      currentScreen += entry;
      screen.innerHTML = currentScreen;
    }
    return;
  }
  if (entry !== "=") {
    if (operator === "") {
      var entryStr = parseInt(entry);
      firstNum = entryStr;
    } else {
      var entryStr = parseInt(entry);
      secondNum = entryStr;
    }
    currentScreen += entry;
    screen.innerHTML = currentScreen;
  }
}

clear.addEventListener("click", () => {
  firstNum = 0;
  secondNum = 0;
  operator = "";
  currentScreen = "";
  screen.innerHTML = currentScreen;
});

equals.addEventListener("click", () => {
  var solution;
  switch (operator) {
  case "+":
    solution = firstNum + secondNum;
    break;
  case "-":
    solution = firstNum - secondNum;
    break;
  case "x":
    solution = firstNum * secondNum;
    break;
  case "\xF7":
    solution = firstNum / secondNum;
    break;
  }
  currentScreen = solution;
  screen.innerHTML = currentScreen;
  firstNum = solution;
  operator = "";
  secondNum = 0;
  if (screen.innerHTML === "Infinity") {
    screen.innerHTML = "Error";
  }
});
