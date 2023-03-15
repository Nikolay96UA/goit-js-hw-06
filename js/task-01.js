const categories = document.querySelectorAll(".item");

const categoriesArrey = categories.length;

console.log(`Number of categories: ${categoriesArrey}`);
console.log("");

categories.forEach((category) => {
  console.log(`Category: ${category.firstElementChild.textContent}`);
  console.log(`Elements: ${category.lastElementChild.children.length}`);
  console.log("");
});
