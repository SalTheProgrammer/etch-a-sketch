// get container object
const container = document.querySelector('.container');

//initialize number of grid size and the slider display
var num = 10;
var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
slider.oninput = function() {
  output.innerHTML = this.value;
}
output.innerHTML = slider.value;

// set up initial display upon first load
setUpGrids(num);
hoverColor();

// reset grid upon change of slider value
slider.onchange = function() {
  //remove all child nodes of the container first
  while(container.hasChildNodes() ){
    container.removeChild(container.lastChild);
  }
  setUpGrids(slider.value); 
  hoverColor();
}

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

  //function to set up grids
function setUpGrids(size) {
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      const div = document.createElement('div');
      div.setAttribute(`style`, `height: calc(100%/${size})`);
      div.setAttribute(`style`, `width: calc(100%/${size}`);
      container.appendChild(div);
    }   
  }
}

