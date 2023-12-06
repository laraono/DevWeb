let a = [1, 2, 3];

function soma(vet) {
  let sum = 0;
  for (let i = 0; i < vet.length; i++) {
    sum += vet[i];
  }
  return sum;
}

console.log(soma(a));
