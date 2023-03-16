const decrementBtn = document.querySelector(' button[data-action="decrement"]');
const incrementBtn = document.querySelector(' button[data-action="increment"]');
const valueEl = document.getElementById("value");

let counterValue = 0;

console.log(decrementBtn);
console.log(incrementBtn);
console.log(valueEl);

decrementBtn.addEventListener("click", () => {
  counterValue -= 1;
  valueEl.textContent = counterValue;
});

incrementBtn.addEventListener("click", () => {
  counterValue += 1;
  valueEl.textContent = counterValue;
});
