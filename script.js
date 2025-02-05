const textArea = document.getElementById("text-area");

const testButton = document.getElementById("test-button");

textArea.addEventListener("input", () => {
  console.log(textArea.value);
});
