const array = ["Lorem", "Ut", "Duis", "Excepteur"];

let botao = document.getElementById("button");
let gerado = document.createElement("div");
document.body.appendChild(gerado);

botao.addEventListener("click", function () {
  gerado.innerHTML = "";
  gerado.setAttribute("id", "gerado");
  let frases = document.getElementById("frases").value;
  let prgf = document.getElementById("prgf").value;
  for (let i = 0; i < prgf; i++) {
    let p = document.createElement("p");
    for (let j = 0; j < frases; j++) {
      p.textContent += array[Math.floor(Math.random() * array.length)] + " ";
    }
    p.textContent += "\n";
    gerado.appendChild(p);
  }
});
