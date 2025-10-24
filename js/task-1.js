//!1
const liElem = document.querySelectorAll('.item');
console.log(`Number of categories: ${liElem.length}`);
//!2
liElem.forEach(el => {
  console.log(`Category: ${el.firstElementChild.textContent}`);
  console.log(`Elements: ${el.lastElementChild.children.length}`);
});
