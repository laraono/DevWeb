let a = [1, 2, 3];
function inverte(vet) {
  let aux = [];
  for (let i = 0; i < vet.length; i++) {
    aux[vet.length - i - 1] = vet[i];
  }
  return aux;
}
let b = inverte(a);
// b -> [3,2,1]
