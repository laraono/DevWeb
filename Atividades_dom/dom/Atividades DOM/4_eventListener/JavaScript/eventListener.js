/* Crie uma função que cria uma imagem e a coloca no site. Depois, crie uma variável que recebe o conteúdo
do botão. Por fim, adicione um event listener de click que chama a função criada. */

// Dica: Existem duas formas de criar um event listener de click:

/* Opção 1
nomeVariável.addEventListener("click", nomeDaFunção) */

/* Opção 2
nomeVariável.onClick = nomeDaFunção */

/* ATENÇÃO: nos event listeners não é preciso usar () após o nome da função */
let botao = document.getElementById("botao");

botao.addEventListener("click", function () {
  let img = document.createElement("img");
  let att = document.createAttribute("src");
  att.value = "../Imagens/wow.jpg";
  img.setAttributeNode(att);
  document.body.appendChild(img);
});
