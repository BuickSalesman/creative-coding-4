const textArea = document.getElementById("text-area");
const testButton = document.getElementById("test-button");
let letters = document.getElementById("letters-container");

let text;

textArea.addEventListener("input", () => {
  text = textArea.value;
  console.log(text);
  letters.innerHTML = "";
  for (const letter of text) {
    let span = document.createElement("span");
    span.textContent = letter;
    span.classList.add("red");
    letters.appendChild(span);
  }
});
