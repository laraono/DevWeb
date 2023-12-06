let s = "Aula de web1";

function contaLetras(vet, tex) {
  let broke = false;
  for (let i = 0; i < vet.length; i++) {
    if (vet[i] == tex[0]) {
      for (let j = 0; j < tex.length; j++) {
        if (vet[i + j] != tex[j]) {
          broke = true;
          break;
        }
      }
      if (!broke) {
        return i;
      }
    }
  }
  return -1;
}
console.log(contaLetras(s, "web2"));
