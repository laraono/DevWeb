// Escreva um loop que realiza 7 chamadas do comando console.log e exibe o seguinte "triângulo":
let char = "";
for (let i = 0; i < 8; i++) {
  for (let j = 0; j < 8; j++) {
    if ((j + i) % 2 == 0) {
      char += "#";
    } else {
      char += " ";
    }
  }
  char += "\n";
}
console.log(char);
