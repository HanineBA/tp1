
function generateRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

const ol = document.querySelector('ol');

ol.addEventListener('click', (e) => {
  if (e.target.tagName === 'LI') {
    e.target.style.backgroundColor = generateRandomColor();
  }
});

