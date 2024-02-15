

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


const listItems = document.querySelectorAll('ol li');
listItems.forEach(item => {
  item.addEventListener('click', () => {
    const randomColor = generateRandomColor();
    item.style.color = randomColor;
  });
});
