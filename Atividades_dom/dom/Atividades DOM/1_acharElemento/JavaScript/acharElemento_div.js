/* Use querySelectorAll() para localizar o elemento div 2. Dessa vez, faça o comando de alterar a background
color direto na pesquisa, ou seja, não use uma variável. Use a cor lightpink.

Dica: para alterar o css basta usar a fórmula: pesquisa.style.nomeDaPropriedadeCSS = "valorDaPropriedade" */

// Lembre-se: querySelectorAll() retorna uma array.
let pesquisa = document.querySelectorAll("div");

pesquisa[1].style.backgroundColor = "red";
