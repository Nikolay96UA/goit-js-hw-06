function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnChangeColor = document.querySelector(".change-color");
const outputColor = document.querySelector(".color");

const getBogyColor = () => {
  document.body.style.backgroundColor = getRandomHexColor();
  outputColor.textContent = getRandomHexColor();
};

btnChangeColor.addEventListener("click", getBogyColor);
