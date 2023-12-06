let button = document.getElementById("print");
let div = document.getElementById("div");

button.addEventListener("click", function () {
  let input = document.getElementById("input").value;
  let n = 1;
  let n2 = 0;
  let size = 200;
  for (let i = 0; i < input; i++) {
    let span = document.createElement("span");
    n2 += n;
    n = n2;
    span.textContent = n2 + " ";
    let randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    span.style.color = randomColor;
    span.style.fontSize = size + "px";
    div.appendChild(span);
    size -= i;
  }
});
