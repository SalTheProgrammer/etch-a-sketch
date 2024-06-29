const container = document.querySelector('.container');

var num = 16;
var numBox = (num * num) + 1; 
var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
slider.oninput = function() {
  output.innerHTML = this.value;
}
output.innerHTML = slider.value;

// create div grids
for (let i = 0; i < num; i++) {
  for (let j = 0; j < num; j++) {
    const div = document.createElement('div');
    div.setAttribute(`style`, `height: calc(100%/${num})`);
    div.setAttribute(`style`, `width: calc(100%/${num}`);
    container.appendChild(div);
  }
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


