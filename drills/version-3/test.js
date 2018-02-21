// function addDiv(number) {
//   for (var j = 0; j < number; j++) {
//     var parentDiv = document.querySelector("#top-div");
//     var newContainerDiv = document.createElement("div");
//     for (var i = 0; i < number; i++) {
//       var newDiv = document.createElement("div");
//       var newParagraph = document.createElement("p");
//       newParagraph.textContent = "Happy Holidays";
//       newDiv.setAttribute("class", "green");
//       newDiv.appendChild(newParagraph);
//       newContainerDiv.appendChild(newDiv);
//     }
//     parentDiv.appendChild(newContainerDiv);
//   }
// }
//
// function addSquares(number) {
//   for (var i = 1; i <= number; i++) {
//     let divSquare = document.createElement("div");
//     if (i % 2 == 0) {
//       divSquare.setAttribute("class", "square green");
//     } else {
//       divSquare.setAttribute("class", "square red");
//     }
//     divSquare.innerText = "Merry Christmas";
//     document.querySelector("#top-div").appendChild(divSquare);
//   }
// }
//
// addDiv(3);
//
// addSquares(9);

// function addDiv() {
//   for (var i = 0; i < 3; i++) {
//     var newContainerDiv = document.createElement('div')
//     for (var j = 0; j < 3; j++) {
//       var newDiv = document.createElement('div')
//       var newParagraph = document.createElement('p')
//       newParagraph.textContent = 'HiHiHi'
//       newDiv.setAttribute('class', 'green')
//       newDiv.appendChild(newParagraph)
//       newContainerDiv.appendChild()
//     }
//   }
// }

var paintSwatch = "#aeaeae";
var paint = document.querySelector(".paint");
var cellcount = prompt("How big do you want your canvas?");
var container = document.querySelector(".container");

paint.addEventListener("click", function(event) {
  var targetStyle = window.getComputedStyle(event.target);
  var color = targetStyle.getPropertyValue("background-color");
  paintSwatch = color;
});

container.style.width = cellcount * 17 + "px";

container.addEventListener("click", function(event) {
  if (event.target.classList.contains("cell")) {
    event.target.style.backgroundColor = paintSwatch;
  }
});

for (var i = 0; i < cellcount * cellcount; i++) {
  var newCell = document.createElement("div");
  newCell.classList.add("cell");
  container.appendChild(newCell);
}
