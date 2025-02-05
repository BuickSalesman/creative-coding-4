const textArea = document.getElementById("text-area");
let letters = document.getElementById("letters-container");

let text;

textArea.addEventListener("keyup", () => {
  text = textArea.value;
  letters.innerHTML = "";
  for (const letter of text) {
    let span = document.createElement("span");
    span.textContent = letter === " " ? "\u00A0" + "\u00A0" : letter;
    span.style.color = `hsl(${Math.random() * 359}, 100%, 50%)`;
    letters.appendChild(span);
  }
});
