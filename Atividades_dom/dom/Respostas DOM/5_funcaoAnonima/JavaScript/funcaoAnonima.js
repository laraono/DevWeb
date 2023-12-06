/* 
1) Crie 1 função que recebe uma bebida e: troca seu id para comida; coloca a bebida no container de comida 
2) Crie um event listener de click que usa essa função.
*/

/* Importante 1: Como evitar que um elemento seja "excluído" ao dar appendChild() ?
Use o método .cloneNode(true) no elemento que deve ser manipulado.

Tente usar esse comando dentro da função anônima da comida: trocaComida(comidas[i].cloneNode(true)); 
Agora clique nas comidas. */

/* Importante 2: Como retornar um elemento que sofreu appendChild() ao seu container ? 
Basta criar um event listener para o parâmetro da função! */

// Professor faz
function trocaComida(comida) 
{
    comida.id = "bebida";
    containerBebidas.appendChild(comida);

    // Para que uma comida possa voltar ao container de comida
    comida.addEventListener("click", function() {
        trocaBebida(comida);
    });
}

// Aluno faz
function trocaBebida(bebida)
{
    bebida.id = "comida";
    containerComidas.appendChild(bebida);

    // Para que uma bebida possa voltar ao container de bebida
    bebida.addEventListener("click", function() {
        trocaComida(bebida);
    });
}

let comidas = document.querySelectorAll("#comida"); // Professor faz
let bebidas = document.querySelectorAll("#bebida"); // Aluno faz

let containerComidas = document.getElementById("containerComidas"); // Aluno faz
let containerBebidas = document.getElementById("containerBebidas"); // Professor faz

// Professor faz
for(let i = 0; i < comidas.length; i++)
{
    comidas[i].addEventListener("click", function() {
        trocaComida(comidas[i]);
    });
}

// Aluno faz
for(let i = 0; i < bebidas.length; i++)
{
    bebidas[i].addEventListener("click", function(){
        trocaBebida(bebidas[i]);
    });
}