let botao = document.getElementById("botao");

botao.addEventListener("click", calcular);
function calcular() {
  let n1 = parseInt(document.getElementById("n1").value);
  let n2 = parseInt(document.getElementById("n2").value);
  let OP = document.getElementById("OP").value;
  let res;
  let texto = document.getElementById("texto");
  if (OP == "+") {
    res = n1 + n2;
  }
  if (OP == "-") {
    res = n1 - n2;
  }
  if (OP == "*") {
    res = n1 * n2;
  }
  if (OP == "/") {
    res = n1 / n2;
  }
  texto.innerHTML = res;
}
