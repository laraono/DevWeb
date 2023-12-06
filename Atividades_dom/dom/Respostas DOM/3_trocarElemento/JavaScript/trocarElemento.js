/* Com base no exercício 1 e 2, crie um div com algum texto e com a classe "divPadrao". Troque o parágrafo 
que tem o id "troca" pelo div criado */

/* Dica: para fazer uma troca você pode remover tudo que tiver no elemento usando: nomeVariavel.innerHTML = "";
e dando appendChild() para inserir o elemento criado */

// Dica 2: Nós podemos usar o container para limpar o parágrafo.

/* Dica 3: antes era usado o body.appendChild() pois só era necessário colocar na página, agora é preciso
colocar o elemento em um local específico, portanto, use o comando:
nomeVariavelParaSubstituir.appendChild(nomeVariavelElementoCriado); */

let container = document.getElementById("container");
let meuDiv = document.createElement("div");

let classe = document.createAttribute("class");
meuDiv.textContent = "Meu nome é div";

classe.value = "divPadrao";
meuDiv.setAttributeNode(classe);

container.innerHTML = "";
container.appendChild(meuDiv);

/* Respondendo uma possível pergunta: Por que usar um container ? Simples! Altere seu código 
(mantenha o original em algum lugar) para remover o conteúdo e dar appendChild direto no parágrafo. Agora
repare no inspect do site a diferença no HTML entre as duas soluções.

Existem várias formas de realizar tal substituição, essa forma mostra o funcionamento do innerHTML */