let s = "Aula de web1";

function contaLetras(vet, char) {
  let count = 0;
  for (let i = 0; i < vet.length; i++) {
    if (vet[i] == char) {
      count++;
    }
  }
  return count;
}
console.log(contaLetras(s, "e"));
