const container = document.querySelector('.container');

var num = 16;
var numBox = (num * num) + 1; 

// Add 16 divs
for (let i = 1; i < numBox + num; i++) {
    const div = document.createElement('div');
    container.appendChild(div);
 }
 hoverColor();

 //function that changes div color uponed being hovered
function hoverColor() {
    let items = document.querySelectorAll('.container>div');
    items.forEach(item => {
      item.addEventListener('mouseover', () => {
        //item.style.backgroundColor = `${randomColor()}`;
        item.style.backgroundColor = "black";
      });
    });
  }

var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
}