const decrementBtn = document.querySelector(' button[data-action="decrement"]');
const incrementBtn = document.querySelector(' button[data-action="increment"]');
let valueEl = document.getElementById("value");

const counterValue = 0;
valueEl = counterValue;
document.addEventListener("click", clickDecrement);

const clickDecrement = function (valueEl) {
  valueEl.textContent += 1;
  return valueEl;
};

console.log(valueEl);
