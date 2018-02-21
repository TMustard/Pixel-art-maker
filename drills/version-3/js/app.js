var cellcount = prompt("Choose the size of your grid");
var container = document.querySelector(".container");
var colorpicker = document.querySelector(".colorpicker");
colorpicker.value = "#96AF80";

container.style.width = cellcount * 17 + "px";

container.addEventListener("click", function(event) {
  if (event.target.classList.contains("cell")) {
    event.target.style.backgroundColor = colorpicker.value;
  }
});

for (var i = 0; i < cellcount * cellcount; i++) {
  var newCell = document.createElement("div");
  newCell.classList.add("cell");
  container.appendChild(newCell);
}
