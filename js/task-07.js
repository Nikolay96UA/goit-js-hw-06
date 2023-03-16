const inputRange = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

const fontSizeRange = function () {
  const inputSize = inputRange.value;
  text.style.fontSize = `${inputSize}px`;
};

inputRange.addEventListener("input", fontSizeRange);
