const inputEl = document.querySelector('input[data-length="6"]');
const validValue = Number(inputEl.dataset.length);

inputEl.addEventListener("blur", validEl);

function validEl(event) {
  const inputValue = event.currentTarget.value.length;
  if (inputValue === validValue) {
    inputEl.classList.add("valid");
    inputEl.classList.remove("invalid");
  } else {
    inputEl.classList.add("invalid");
    inputEl.classList.remove("valid");
  }
}
