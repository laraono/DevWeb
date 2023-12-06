/* 
Sabendo que: $("#nomeId") == document.querySelector("#nomeId")

Use os métodos (funções):
    .append()   // fim
    .prepend()  // inicio
    .before()   // antes
    .after()    // depois
Para inserir um botão no fim / inicio / depois / antes do container (fieldset). O botão é passado como parâmetro.
Para criar o botão, siga os exemplos a seguir:

// OPÇÃO 1: Usando uma string HTML
let exemplo1 = "<p>Exemplo 1</p>";

// OPÇÃO 2: Usando jQuery
let exemplo2 = $("<p></p>").text("Exemplo 2");
(precisa usar .clone() no parâmetro se for inserir + de uma vez)

Por fim, use o método .remove() para remover uma das disciplinas.
*/

