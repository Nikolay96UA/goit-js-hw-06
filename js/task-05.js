const inputName = document.querySelector("#name-input");
const outputName = document.querySelector("#name-output");

inputName.addEventListener("input", (event) => {
  if (event.currentTarget.value === "") {
    return (outputName.textContent = "Anonymous");
  }
  outputName.textContent = event.currentTarget.value;
});
