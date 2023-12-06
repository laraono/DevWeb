let i = 3;

function addItem() {
    i++;
    let novoItem = "<li>item " + i + "</li>";
    $("#lista").append(novoItem);
}

/*
Sabendo que: 
    $("#nomeId") == document.querySelector("#nomeId")
    .nomeEvento(function() {}) == .addEventListener("nomeEvento", function() {})

Crie:
    1) Um evento de click que adiciona um item à lista ao apertar o botão "Add item". 
    ATENÇÃO: basta criar o evento e chamar a função addItem()

    2) Um evento de duplo click que remove o botão "CLICA EM MIM!". duplo click == dblclick
    Dica: caso você precise usar o elemento da pesquisa dentro da função, ao invés de realizar outra query,
    basta usar: $(this)

    Exemplo: $("#nomeId").evento(function() {
        $(this).val(); // pega o valor do nomeId
    });

    3) Um evento de hover que altera a cor do div "TROCA COR" ao passar e retirar o mouse do div.
    Dica 1: para alterar o css basta usar o método (função): .css("nomeDaPropriedade", "valor")
    Dica 2: para esse exercício você precisa de 2 funções dentro do evento, uma entrando e outra saindo do div, 
    para isso, basta separar as funções por 1 vírgula.

    Exemplo: .evento(function() {
        // Mouse entrando
        }, function() {
            // Mouse saindo
        }    
    );
*/

