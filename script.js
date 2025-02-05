const textArea = document.getElementById("text-area");
const testButton = document.getElementById("test-button");
let letters = document.getElementById("letters-container");

let text;

textArea.addEventListener("input", () => {
  text = textArea.value;
  console.log(text);
  let span = document.createElement("span");
  for (const letter of text) {
    span.textContent = letter;
    span.classList.add("red");
  }
  letters.appendChild(span);
});
