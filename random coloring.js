

function generate(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }


function generateRandomColor() {
  const r = generate(1, 254);
  const g = generate(1, 255);
  const b = generate(0, 255);
  const color = `rgb(${r}, ${g}, ${b})`;
  
  return color;
}

function change(value,property,tochange){
    tochange.style[property]=value;
  
}
const listItems = document.querySelectorAll('#myList li');
listItems.forEach(item => {
    item.addEventListener('click',function(){change(generateRandomColor() ,'color',item);});
})